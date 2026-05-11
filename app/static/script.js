const imageInput = document.getElementById("fruit_image");

const previewImage = document.getElementById("preview-image");

imageInput.addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (file) {
        previewImage.src = URL.createObjectURL(file);
        previewImage.style.display = "block";
    }
});