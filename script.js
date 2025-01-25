const animatedImage = document.getElementById('animatedImage');
animatedImage.addEventListener('click', function() {
    animatedImage.classList.add('clicked');
     setTimeout(() => {
       animatedImage.classList.remove('clicked');
       }, 150)
});

const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', function() {
    const imageUrl = document.querySelector('.animated-image').src;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg'; // You can change the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});