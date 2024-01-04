const express = require("express");
const app = express();
const predictionsRoutes = require("./routes/predictionsRoutes");
const offersRoutes = require("c:\\Users\\user\\Desktop\\College Project\\ProTelChurn\\backend\\server.js");

// Linking routes
app.use("/predictions", predictionsRoutes);
app.use("/offers", offersRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Churn Prediction System!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port 5000`);
});
