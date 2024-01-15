

// Start landing-page1
let landingPage = document.querySelector('.landing-page')
let imgArray = ["poster 1.png","poster 2.png","poster 3.png","poster 12.png", "poster 13.jpeg","poster 14.jpg"]

// change background img array url


setInterval(function(){
    let RandomNumber = Math.floor(Math.random() * imgArray.length);
    landingPage.style.backgroundImage = 'url("images/' + imgArray[RandomNumber] + '")';
},3000

);
// End landing-page1
// Start landing-page2
let landing = document.querySelector('.landing')
let imgArrays = ["poster 1.png","poster 2.png","poster 3.png","poster 12.png"]

// change background img array url


setInterval(function(){
    let RandomNumber = Math.floor(Math.random() * imgArrays.length);
    landingPage.style.backgroundImage = 'url("images/' + imgArrays[RandomNumber] + '")';
},3000

);
// End landing-page2

// Start cardsFilm
let cardImgFilm = document.querySelector('.mvl-title img');
let feedCard = document.querySelector('.feed-card');
cardImgFilm.addEventListener('mouseover',()=>{
    feedCard.style.display = "block";
})
// End cardsFilm
// Start Video-Card
let videosCards = document.querySelectorAll('.video-card');

videosCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1]
        video.pause();
    });
});
// End Video-Card

// owl carousel slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.owl-2').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1000:{
        items:3
    }
}
});
// End owlCarousel