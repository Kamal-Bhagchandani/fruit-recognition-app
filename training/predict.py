import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image

# Load trained model
model = tf.keras.models.load_model("model/fruit_model.h5")

# Class labels
class_names = ["Apple", "Banana", "Grapes", "Mango"]


def predict_fruit(img_path):

    # Load image
    img = image.load_img(img_path, target_size=(128, 128))

    # Convert image to array
    img_array = image.img_to_array(img)

    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)

    # Predict fruit
    predictions = model.predict(img_array)

    # Get predicted class
    predicted_class = class_names[np.argmax(predictions)]

    # Confidence score
    confidence = np.max(predictions) * 100

    return predicted_class, confidence