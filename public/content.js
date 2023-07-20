const bg = document?.querySelector('.hp_top_cover');
const bg2 = document?.querySelector('.img_cont');
const pic = chrome.runtime.getURL('bg/beautiful.jpg ')
try {
    bg.setAttribute('style', `background-image: url(${pic}) !important;`);
    bg2.setAttribute('style', `background-image: url(${pic}) !important;`);
}catch(e) {
    console.log(e);
}
