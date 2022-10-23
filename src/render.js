const fileTypes = {
    image: renderImg,
    audio: renderAudio,
    video: renderVideo
}
   
function renderImg(item) {
    const imgEl = document.createElement('img');
    imgEl.classList.add('item-img');
    imgEl.src = item.resource;
    return imgEl;
}

function renderAudio(item) {
    const audioEl = document.createElement('audio');
    audioEl.classList.add('item-audio');
    audioEl.src = item.resource;
    audioEl.controls = true;
    return audioEl;
}

function renderVideo(item) {
    const videoEl = document.createElement('video');
    videoEl.classList.add('item-video');
    videoEl.src = item.resource;
    videoEl.controls = true;
    return videoEl;
}
export function render(item) {
    const cardEl = document.createElement('div');
    
    const titleEl = document.createElement('p');

    cardEl.classList.add('item');
    titleEl.classList.add('item-title');
    titleEl.innerText = item.title;

    const renderType = fileTypes[item.type];

    cardEl.append(renderType(item), titleEl);
    return cardEl;
}