let next = document.getElementById('next')
let prev = document.getElementById('prev')
let carousel = document.querySelector('.carousel')
let listItemDom = document.querySelector('.carousel .list')

let thumbnailDom = document.querySelector('.carousel .thumbnail')
/*
let runningTime = 7000;
let runTimeOut;

let timeAutoNext = 7000;
let runAutoRun = setTimeout(()=>{
    next.click();
}, timeAutoNext)
*/
next.onclick = function(){
    showSlider('next');
}

prev.onclick = function(){
    showSlider('prev')
}
function showSlider(type)
{
    let itemsSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type == 'next')
    {
        listItemDom.appendChild(itemsSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0])
        carousel.classList.add('next')
    }
    else
    {
        let lastPosition = itemsSlider.length - 1;
        listItemDom.prepend(itemsSlider[lastPosition])
        thumbnailDom.prepend(itemsThumbnail[lastPosition])
        carousel.classList.add('prev')
    }

    /*
    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(()=> {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, runningTime)

    clearTimeout(runAutoRun)

    runAutoRun = setTimeout(()=>{
        next.click();
    }, timeAutoNext)
    */
}