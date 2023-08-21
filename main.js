/* function changeImage() {
    let displayImage = document.getElementById('js-container-image');
    if (displayImage.src = 'images/image-equilibrium.jpg') {
        displayImage.src = 'images/active-cube.jpg';
    } 
} */

function changeImage() {
    let displayImage = document.getElementById('js-container-image');
    if (displayImage.src.match('images/image-equilibrium.jpg')) {
        displayImage.src = 'images/active-cube.jpg'
    } else {
        displayImage.src = 'images/image-equilibrium.jpg'
    }
}