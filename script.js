function changeBackgroundImage(imagePath) {
    var banner = document.querySelector('.banner');
    banner.style.transition = 'background 0.5s ease-in-out'; // Adjust the transition timing for a smoother effect
    banner.style.backgroundImage = 'url(' + imagePath + ')';
}

document.getElementById('column1').addEventListener('mouseover', function() {
    changeBackgroundImage('imageDefault.jpg'); // Change to the image you want
});

// document.getElementById('column1').addEventListener('mouseout', function() {
//     changeBackgroundImage('imageDefault.jpg'); // Change to the default image
// });

document.getElementById('column2').addEventListener('mouseover', function() {
    changeBackgroundImage('image2.jpg'); // Change to the image you want
});

// document.getElementById('column2').addEventListener('mouseout', function() {
//     changeBackgroundImage('imageDefault.jpg'); // Change to the default image
// });

document.getElementById('column3').addEventListener('mouseover', function() {
    changeBackgroundImage('image3.jpg'); // Change to the image you want
});

// document.getElementById('column3').addEventListener('mouseout', function() {
//     changeBackgroundImage('imageDefault.jpg'); // Change to the default image
// });

document.getElementById('column4').addEventListener('mouseover', function() {
    changeBackgroundImage('image4.jpg'); // Change to the image you want
});

// document.getElementById('column4').addEventListener('mouseout', function() {
//     changeBackgroundImage('imageDefault.jpg'); // Change to the default image
// });

document.getElementById('column5').addEventListener('mouseover', function() {
    changeBackgroundImage('image5.jpg'); // Change to the image you want
});

// document.getElementById('column5').addEventListener('mouseout', function() {
//     changeBackgroundImage('imageDefault.jpg'); // Change to the default image
// });

document.getElementById('column6').addEventListener('mouseover', function() {
    changeBackgroundImage('image6.jpg'); // Change to the image you want
});

// document.getElementById('column6').addEventListener('mouseout', function() {
//     changeBackgroundImage('imageDefault.jpg'); // Change to the default image
// });
