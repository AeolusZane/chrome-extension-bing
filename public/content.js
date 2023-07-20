const bg = document?.querySelector('.hp_top_cover');
const bg2 = document?.querySelector('.img_cont');
const pic = chrome.runtime.getURL('bg/beautiful.jpg ');
const mp4 = chrome.runtime.getURL('bg/beautiful.mp4');
try {
    bg.setAttribute('style', `background-image: url(${pic}) !important;`);
    bg2.setAttribute('style', `background-image: url(${pic}) !important;`);
    const video = document.createElement('video');
    video.setAttribute('src', chrome.runtime.getURL('bg/beautiful.mp4'));
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.setAttribute('class', 'bg-video');

    const video1 = document.createElement('video');
    video1.setAttribute('src', chrome.runtime.getURL('bg/beautiful.mp4'));
    video1.autoplay = true;
    video1.loop = true;
    video1.muted = true;
    video1.setAttribute('class', 'bg-video');

    setTimeout(() => {
        bg.appendChild(video1);
        bg2.appendChild(video);
        video.addEventListener('loadeddata', () => {
            video.play();
        });
        video1.addEventListener('loadeddata', () => {
            video1.play();
        });
    }, 1000);
} catch (e) {
    console.log(e);
}