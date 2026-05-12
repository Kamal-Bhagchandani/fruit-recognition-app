from flask import Flask, render_template, request
import os

from app.predict import predict_fruit

app = Flask(__name__)

UPLOAD_FOLDER = "app/uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    # Get uploaded image
    file = request.files["fruit_image"]

    # Create file path
    file_path = os.path.join(
        app.config["UPLOAD_FOLDER"],
        file.filename
    )

    # Save image temporarily
    file.save(file_path)

    # Predict fruit
    fruit, confidence = predict_fruit(file_path)

    # Delete image after prediction
    os.remove(file_path)

    # Render same page with prediction result
    return render_template(
        "index.html",
        prediction=fruit,
        confidence=f"{confidence:.2f}"
    )

if __name__ == "__main__":
    app.run(debug=True)