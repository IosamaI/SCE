const animatedImage = document.getElementById('animatedImage');
<<<<<<< HEAD
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
=======
const downloadButton = document.getElementById('downloadButton');

// Image click animation
animatedImage.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 200);
});

// Download functionality
downloadButton.addEventListener('click', async function() {
    try {
        const imageUrl = animatedImage.src;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const filename = `downloaded-image-${Date.now()}.jpg`;
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again.');
    }
});

// Add hover effect for touch devices
document.addEventListener('touchstart', function() {}, true);
>>>>>>> master
