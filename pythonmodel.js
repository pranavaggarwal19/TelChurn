// pythonModel.js

const { spawn } = require("child_process");

// Function to interact with the Python model
const runPythonModel = async (customerId) => {
  return new Promise((resolve, reject) => {
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
        resolve(predictionResult);
      } else {
        console.error(`Python process exited with code ${code}`);
        reject(new Error("Python Process Error"));
      }
    });
  });
};

module.exports = {
  runPythonModel,
};
