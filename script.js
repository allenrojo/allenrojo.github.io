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
            video.play();
        } else {           
            video.pause();
        }
    });
}, { threshold: 0.3 }); 

observer.observe(video);
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});