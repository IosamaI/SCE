document.addEventListener('DOMContentLoaded', () => {
    const animatedImage = document.getElementById('animatedImage');
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
            
            if (!response.ok) throw new Error('Network response was not ok');
            
            const blob = await response.blob();
            const filename = `image-${Date.now()}.jpg`;
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Download failed. Please try again.');
        }
    });

    // Add hover effect support for touch devices
    document.addEventListener('touchstart', function() {}, true);
});