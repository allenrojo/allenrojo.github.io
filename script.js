document.addEventListener('DOMContentLoaded', function() {
    const backgroundImages = [
        'url(renders/render01.png)',
        'url(renders/render06.png)',
        'url(renders/render07.png)'
    ];
    const changeBackgroundButton = document.getElementById('changeBackgroundButton');
    const container = document.querySelector('.about-container'); 
    let currentImageIndex = 0;
    
    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        container.style.backgroundImage = backgroundImages[currentImageIndex];
    }
    changeBackgroundButton.addEventListener('click',changeBackground);
    changeBackground();

});

const video = document.getElementById('video');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the video is in the viewport, play it
            video.play();
        } else {
            // If the video is not in the viewport, pause it
            video.pause();
        }
    });
}, { threshold: 0.5 }); // Trigger when at least 50% of the video is visible

// Observe the video element
observer.observe(video);
video.addEventListener('click', () => {
    if (video.paused) {
        // If the video is paused, play it
        video.play();
    } else {
        // If the video is playing, pause it
        video.pause();
    }
});