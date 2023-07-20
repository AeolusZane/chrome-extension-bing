const bg = document?.querySelector('.hp_top_cover');
const bg2 = document?.querySelector('.hp_media_container');
const pic = chrome.runtime.getURL('bg/beautiful.jpg ');
const mp4 = chrome.runtime.getURL('bg/beautiful.mp4');
document.querySelector('html').style.overflow = 'auto';
try {
    const video = document.createElement('video');
    video.setAttribute('src', chrome.runtime.getURL('bg/beautiful.mp4'));
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.setAttribute('class', 'bg-video');

    const video2 = document.createElement('video');
    video2.setAttribute('src', chrome.runtime.getURL('bg/beautiful.mp4'));
    video2.autoplay = true;
    video2.loop = true;
    video2.muted = true;
    video2.setAttribute('class', 'bg-video');

    const config = { childList: true, subtree: true, attributes: true };

    // 当观察到变动时执行的回调函数
    const callback = function (mutationsList) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (mutation.removedNodes[0] === video && mutation.target === bg) {
                    bg.appendChild(video);
                }

                if (mutation.removedNodes[0] === video2 && mutation.target === bg2) {
                    bg2.appendChild(video2);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(bg, config);
    observer.observe(bg2, config);
    bg.appendChild(video);
    bg2.appendChild(video2);
    bg.setAttribute('style', `background-image: url(${pic}) !important;`);
    bg2.setAttribute('style', `background-image: url(${pic}) !important;`);
} catch (e) {
    console.log(e);
}
