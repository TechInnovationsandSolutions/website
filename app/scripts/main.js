// console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle='tooltip']').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle='popover']').popover(); });

(function () {
    var slideIndex = 0;
    var slideDuration = 3000;
    var sliderContents =[
        {
            title: 'Research',
            content: 'We analyze and study  the project so  we can understand the needs of each client.',
            src: 'images/our-work-research-analysis -1.png'
        },
        {
            title: 'Information Architecture',
            content: 'We interiorize and conceptualize the project   to organize the information and define the structure.',
            src: 'images/our-work-information-architecture 1.png' 
        },
        {
            title: 'User Experience (UX)',
            content: 'We study the user’s interactions and perceptions to guarantee a satisfactory experience.',
            src: 'images/our-work-ui-ux.png'
        },
        {
            title: 'Interface Design (UI)',
            content: 'We believe the shape and content go together through the inspiration, creativity, detail and interaction.',
            src: 'images/our-work-ui-interface.png' 
        },
        {
            title: 'Development',
            content: 'Our methodology is centered in the use of advanced tools to accomplish an optimal result and a solid product.',
            src: 'images/our-work-development.png'
        }
    ]

    function showSlides() {
        var i;
        var slides = document.querySelectorAll('div.slide-item');
        var slideNo = document.getElementsByClassName('slideNo');
        var slideTitle = document.querySelector('p.slider-title');
        var slideContent = document.querySelector('p.slider-content');
        // console.log(slides);

        if (slides) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';  
            }

            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < slideNo.length; i++) {
                slideNo[i].className = slideNo[i].className.replace(' active', '');
            }
            // console.log(slideIndex);
            slideTitle.innerHTML = sliderContents[slideIndex - 1].title;
            slideContent.innerHTML = sliderContents[slideIndex - 1].content;
            slides[slideIndex-1].style.display = 'flex';  
            slideNo[slideIndex-1].className += ' active';
            setTimeout(showSlides, slideDuration); // Change image every 2 seconds
            }
    }

    try {
       showSlides(); 
    } catch (err) {
        console.err(error);
    }
})()