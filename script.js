
// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'ĐM?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}


function displayCatHeart() {
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
// Display the cat.gif initially
displayCat();
displayCatHeart();