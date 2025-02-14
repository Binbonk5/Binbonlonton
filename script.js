function DisplayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Get the container where the images will be displayed
    var imageContainer = document.getElementById('image-container');

    // Create a new div to hold all images side by side
    var imagesWrapper = document.createElement('div');
    imagesWrapper.style.display = 'flex'; // Use flexbox to align images horizontally
    imagesWrapper.style.justifyContent = 'center'; // Center images in container
    imagesWrapper.style.alignItems = 'center'; // Align images vertically
    imagesWrapper.style.gap = '20px'; // Add spacing between images
    imagesWrapper.style.padding = '10px'; // Add padding for better spacing

    // Function to create an image element
    function CreateImage(src, alt) {
        var img = new Image();
        img.src = src;
        img.alt = alt;
        img.style.width = '150px'; // Adjust width to ensure uniform size
        img.style.height = 'auto'; // Maintain aspect ratio
        img.style.borderRadius = '10px'; // Optional: rounded corners for aesthetics
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Optional: subtle shadow for better UI
        return img;
    }

    // Create images
    var catHeartImage = CreateImage('cat-heart.gif', 'Cat Heart');
    var snailImage = CreateImage('snail.gif', 'Snail');
    var duckImage = CreateImage('duck.gif', 'Duck');

    // When all images are loaded, append them to the wrapper
    catHeartImage.onload = snailImage.onload = duckImage.onload = function() {
        imagesWrapper.appendChild(catHeartImage);
        imagesWrapper.appendChild(snailImage);
        imagesWrapper.appendChild(duckImage);
        imageContainer.appendChild(imagesWrapper);

        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
