let slideIndex = 0
let slidesLength = document.getElementsByClassName('slide').length

function slideNext(event) {
    let currentSlide = document.getElementById(`slide-${slideIndex}`)
    currentSlide.classList.remove('active')

    if (slideIndex  === slidesLength - 1) {
        slideIndex = -1
    }

    slideIndex++

    let nextSlide = document.getElementById(`slide-${slideIndex}`)
    nextSlide.classList.add('active')

    if (event === undefined) {
        setTimeout(slideNext, 4000)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let images = document.getElementsByTagName('img')

    for (let i = 0; i < images.length; i++) {
        let image = images[i]
        image.addEventListener('click', slideNext)
    }

    slideNext()
})
