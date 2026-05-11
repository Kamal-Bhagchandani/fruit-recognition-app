const imageInput = document.getElementById("fruit_image");

const previewImage = document.getElementById("preview-image");

// Loading text during prediction
const form = document.querySelector("form");

const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
    if (!imageInput.files.length) {
        event.preventDefault();
        errorMessage.innerText = "Please upload an image first.";
        return;
    }

    errorMessage.innerText = "";

    const button = document.querySelector("button");
    button.innerText = "Predicting...";
});

const uploadBox = document.getElementById("upload-box");

// Show image preview
function showPreview(file) {
    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = "block";
}


// File input preview
imageInput.addEventListener("change", function(event) {
    const file = event.target.files[0];

    errorMessage.innerText = "";

    if (file) {
        showPreview(file);
    }
    else {
        // Hide preview if no file selected
        previewImage.style.display = "none";
        previewImage.src = "#";
    }
});


// Prevent browser from opening file
uploadBox.addEventListener("dragover", function(event) {
    event.preventDefault();
    uploadBox.classList.add("dragging");
    errorMessage.innerText = "";
});


// Remove dragging style
uploadBox.addEventListener("dragleave", function() {
    uploadBox.classList.remove("dragging");
});


// Handle dropped file
uploadBox.addEventListener("drop", function(event) {
    event.preventDefault();

    uploadBox.classList.remove("dragging");

    const file = event.dataTransfer.files[0];

    if (file) {
        // Assign dropped file to input
        imageInput.files = event.dataTransfer.files;

        // Show preview
        showPreview(file);
    }
});