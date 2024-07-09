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