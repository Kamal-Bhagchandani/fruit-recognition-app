const imageInput = document.getElementById("fruit_image");

const previewImage = document.getElementById("preview-image");

const form = document.querySelector("form");

form.addEventListener("submit", () => {
    const button = document.querySelector("button");
    button.innerText = "Predicting...";
});

imageInput.addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (file) {
        previewImage.src = URL.createObjectURL(file);
        previewImage.style.display = "block";
    }
});