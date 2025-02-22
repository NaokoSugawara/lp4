

// header inclusion

fetch("header.html")
.then(response => response.text())
.then(data => document.getElementById("header-placeholder").innerHTML = data);



//
// Accordion
//

const accordionTitles = document.querySelectorAll(".accordion__title");

accordionTitles.forEach((accordionTitle) => {

    accordionTitle.addEventListener("click", () => {
        const icon = accordionTitle.children[1];
        icon.classList.toggle("accordion__title__icon--active");

        let height = accordionTitle.nextElementSibling.scrollHeight;
        if (icon.classList.contains("accordion__title__icon--active")) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
        }
    })

})




document.addEventListener('DOMContentLoaded', function () {

    // carousel1
    const splide = new Splide('#splide1', {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        pagination: false,
        arrows: false,
        breakpoints: {
            767: { pagination: true, }
        },
    })


    // progress bar -----------------------------------------------------
    const bar = splide.root.querySelector( '.my-carousel-progress-bar' );

    // Updates the bar width whenever the carousel moves:
    splide.on( 'mounted move', function () {
        const end  = splide.Components.Controller.getEnd() + 1;
        const rate = Math.min( ( splide.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
    } );
    // ------------------------------------------------------------------

    splide.mount();


    // progress bar -----------------------------------------------------
    // const bar4 = splide4.root.querySelector( '.my-carousel-progress-bar4' );

    // // Updates the bar width whenever the carousel moves:
    // splide4.on( 'mounted move', function () {
    //     const end  = splide4.Components.Controller.getEnd() + 1;
    //     const rate = Math.min( ( splide4.index + 1 ) / end, 1 );
    //     bar4.style.width = String( 100 * rate ) + '%';
    // } );
    // ------------------------------------------------------------------



});

