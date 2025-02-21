
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
        // breakpoints: {
        //     1024: { perPage: 2 },
        //     767: { type: 'loop', perPage: 1, padding: '5%', gap: '10%', }
        // },
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



    // carousel2
    const splide2 = new Splide('#splide2', {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        // autoplay: true,
        // interval: 2000,
        pagination: false,
        arrows: false,
    })


    // progress bar -----------------------------------------------------
    const bar2 = splide2.root.querySelector( '.my-carousel-progress-bar2' );

    // Updates the bar width whenever the carousel moves:
    splide2.on( 'mounted move', function () {
        const end  = splide2.Components.Controller.getEnd() + 1;
        const rate = Math.min( ( splide2.index + 1 ) / end, 1 );
        bar2.style.width = String( 100 * rate ) + '%';
    } );
    // ------------------------------------------------------------------

    splide2.mount();



    // carousel3
    const splide3 = new Splide('#splide3', {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        autoplay: false,
        interval: 2000,
        pagination: false,
        arrows: false,
        // breakpoints: {
        //     1024: { perPage: 2 },
        //     767: { type: 'loop', perPage: 1, padding: '5%', gap: '10%', }
        // },
    })


    // progress bar -----------------------------------------------------
    const bar3 = splide3.root.querySelector( '.my-carousel-progress-bar3' );

    // Updates the bar width whenever the carousel moves:
    splide3.on( 'mounted move', function () {
        const end  = splide3.Components.Controller.getEnd() + 1;
        const rate = Math.min( ( splide3.index + 1 ) / end, 1 );
        bar3.style.width = String( 100 * rate ) + '%';
    } );
    // ------------------------------------------------------------------

    splide3.mount();



    // carousel4
    const splide4 = new Splide('#splide4', {
        type   : 'loop',
        perPage: 3,
        gap: '3%',
        // autoplay: true,
        // interval: 2000,
        pagination: false,
        arrows: false,
        breakpoints: {
            850: { gap: '10%', },
            767: { perPage: 1 }
        },
    })


    // progress bar -----------------------------------------------------
    const bar4 = splide4.root.querySelector( '.my-carousel-progress-bar4' );

    // Updates the bar width whenever the carousel moves:
    splide4.on( 'mounted move', function () {
        const end  = splide4.Components.Controller.getEnd() + 1;
        const rate = Math.min( ( splide4.index + 1 ) / end, 1 );
        bar4.style.width = String( 100 * rate ) + '%';
    } );
    // ------------------------------------------------------------------

    splide4.mount();


    // carousel5
    const splide5 = new Splide('#splide5', {
        type   : 'loop',
        perPage: 3,
        gap: '3%',
        autoplay: true,
        interval: 2000,
        pagination: false,
        arrows: false,
        breakpoints: {
            850: { gap: '10%', },
            767: { perPage: 1 }
        },
    })

    splide5.mount();

        // carousel6
        const splide6 = new Splide('#splide6', {
            type   : 'loop',
            perPage: 3,
            gap: '3%',
            autoplay: true,
            interval: 2000,
            pagination: false,
            arrows: false,
            breakpoints: {
                850: { gap: '10%', },
                767: { perPage: 1 }
            },
        })

        splide6.mount();

});

