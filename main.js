import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


//load loading animation and the align animation//
var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    render: 'svg',
    loop: false,
    autoplay: true, 
    path: 'loader.json'
})


var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('capabilities'),
    render: 'svg',
    loop: true,
    autoplay: true, 
    path: 'align.json'
})



//navigation
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener('click', () => {
    primaryNav.toggleAttribute('data-visisble') 
    ? navToggle.setAttribute('aria-expanded', true)
    : navToggle.setAttribute('aria-expanded', false);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
});

$(document).on("click", ".nav-list", function() {
    
        primaryNav.toggleAttribute('data-visisble') 
        ? navToggle.setAttribute('aria-expanded', true)
        : navToggle.setAttribute('aria-expanded', false);
        primaryNav.toggleAttribute('data-visible');
        primaryHeader.toggleAttribute('data-overlay');
    
  });

/*
document.onclick = function(){
    
    let value = primaryNav.getAttribute('data-visible');
    console.log(value);
    if (value === null)
    primaryNav.toggleAttribute('data-visible'),
    console.log(value);
 
    
}
   */ 

const scrollTracker = document.querySelector('.scroll-tracker');

const animatedImages = document.querySelectorAll(".maze")

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
});

animatedImages.forEach((image) => {   
    const imageOffsetTop = image.offsetTop;
    const imageHeight = image.offsetHeight;
    // const animatedImageTimeline = new ScrollTimeline ({
    //     scrollOffsets: [
    //         { target: image, edge: "end", threshold: "0"},
    //         { target: image, edge: "start", threshold: "1"}
    //     ],
    // });
    image.animate(
        {
            transform: ["scale(100%, 100%) translate(0%, 0%)  rotateX(0) rotateZ(20deg)", "scale(-350%, -350%) translate(-400%, 750%)  rotateX(-405deg)"],
        },
        {
            duration: 1,
            timeline: new ScrollTimeline({
                // scrollOffsets: [
                //     { target: image, edge: "end", threshold: "0"},
                //     { target: image, edge: "start", threshold: "1"}
                // ],
               
            }), 
        }
    );
});




// scrollTracker.animate(
//     {
//         transform: [ 'scaleX(0)', 'scaleX(1)']
//     },
//     {
//         duration: 1,
//         timeline: scrollTrackingTimeline,
//     }
// );

// calculat heights on window resize or refresh //
$(document).ready(function(){

    function sliderheight(){
        var divHeight = ($(".services").height());
        $('.background-top').css({'min-height' : divHeight});
    }
    sliderheight();
    
    });
    $(document).ready(function(){

        function sliderheight(){
            var divHeightEx = ($(".exceptional-text-wrapper").height() * 2 + 240 );
            $('.exceptional').css({'min-height' : divHeightEx});
           
        }
        sliderheight();
        
        });

 // calculat heights on window resize or refresh //
$(window).resize(function() {
    function sliderheight(){
        var divHeight = ($(".services").height());
        $('.background-top').css({'min-height' : divHeight});
    }
    sliderheight();
    
    });
    
$(document).ready(function(){

    function sliderheight(){
        var divHeightEx = ($(".exceptional-text-wrapper").height() * 2 + 240 );
        $('.exceptional').css({'min-height' : divHeightEx});
       
    }
    sliderheight();
    
});
      
//intersection observers //

//slide in white services section //
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: .07,
};
const appearOnScroll = new IntersectionObserver (function(
    entries,
    appearOnScroll
    )   
        {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
            }
        });
    }, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


//fade in value section  //
const fadersTwo = document.querySelectorAll('.fade-in-2');
const appearOptionsTwo = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScrollTwo = new IntersectionObserver (function(
    entries,
    appearOnScrollTwo
) {
    entries.forEach(entry => {

        if(!entry.isIntersecting) {
    
            return;
        } else {
    
            entry.target.classList.add("appear");
        }
    });
}, 
appearOptionsTwo);

fadersTwo.forEach(faderTwo => {
    appearOnScrollTwo.observe(faderTwo);
});

//fade in Footer cols //

const fadersThree = document.querySelectorAll('.fade-in-3');
const appearOptionsThree = {
    threshold: 1,
};
const appearOnScrollThree = new IntersectionObserver (function(
    entries,
    appearOnScrollThree
) {
    entries.forEach(entry => {

        if(!entry.isIntersecting) {
    
            return;
        } else {
    
            entry.target.classList.add("appear");
        }
    });
}, 
appearOptionsThree);

fadersThree.forEach(faderThree => {
    appearOnScrollThree.observe(faderThree);
});