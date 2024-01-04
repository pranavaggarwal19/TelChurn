// predictionsRoutes.js

const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

// Route for making predictions using Python model
router.get("/predict-churn/:customerId", (req, res) => {
  try {
    const customerId = req.params.customerId;

    // Spawn a child process to run the Python script
    const pythonProcess = spawn("python", [
      "path/to/your/python_script.py",
      customerId,
    ]);

    let predictionResult = "";

    pythonProcess.stdout.on("data", (data) => {
      // Capture data output from the Python script
      predictionResult += data.toString();
    });

    pythonProcess.on("close", (code) => {
      if (code === 0) {
        res.status(200).json({ churnPrediction: predictionResult });
      } else {
        console.error(`Python process exited with code ${code}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.error("Prediction Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
