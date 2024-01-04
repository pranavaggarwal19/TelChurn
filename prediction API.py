from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample churn prediction function
def predict_churn(data):
    # Your churn prediction logic using the provided data
    # Replace this with your actual churn prediction code
    # This function should return the predicted result
    # Example: prediction = churn_model.predict(data)

    # For demonstration purposes, assuming a dummy prediction
    prediction = "Churn" if data["usage"] == "high" else "No Churn"
    return prediction

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json()  # Assuming data is sent as JSON
        prediction = predict_churn(data)
        return jsonify({'prediction': prediction}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Run the Flask app on port 5000 (or your desired port)
