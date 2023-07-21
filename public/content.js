const bg = document?.querySelector('.hp_top_cover');
const bg2 = document?.querySelector('.hp_media_container');
const pic = chrome.runtime.getURL('bg/beautiful.jpg ');
const mp4 = chrome.runtime.getURL('bg/beautiful.mp4');
document.querySelector('html').style.overflow = 'auto';
try {
    const video2 = document.createElement('video');
    const mdcontainer = document.querySelector('.hp_media_container');
    // mdcontainer.setAttribute('style', `background-image: url(${pic}) !important;`);
    // mdcontainer.classList.add('bg-video');

    const config = { childList: true, subtree: true };

    // 当观察到变动时执行的回调函数
    const callback = function (mutationsList) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (mutation.removedNodes[0] === video2 && mutation.target === bg2) {
                    bg2.appendChild(video2);
                    video2.setAttribute('src', chrome.runtime.getURL('bg/beautiful.mp4'));
                    video2.autoplay = true;
                    video2.loop = true;
                    video2.muted = true;
                    video2.classList.add('bg-video');
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(bg2, config);
    bg2.appendChild(video2);
    // bg.setAttribute('style', `background-image: url(${pic}) !important;`);
    // bg2.setAttribute('style', `background-image: url(${pic}) !important;`);
} catch (e) {
    console.log(e);
}
