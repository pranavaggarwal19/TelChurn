// Import Axios for making HTTP requests
const axios = require("axios");

// Controller function to handle predictions
const makePrediction = async (req, res) => {
  try {
    // Assuming req.body contains the necessary input data for prediction
    const inputData = req.body;

    // Make a POST request to your Python model API endpoint for predictions
    const pythonApiUrl = "http://127.0.0.1:5000/"; // Replace with your Python API endpoint
    const predictionResponse = await axios.post(pythonApiUrl, inputData);

    // Assuming the prediction response contains the result
    const predictionResult = predictionResponse.data.prediction;

    res.status(200).json({ success: true, prediction: predictionResult });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error making prediction",
      error: error.message,
    });
  }
};

// Export the controller function(s)
module.exports = {
  makePrediction,
};
