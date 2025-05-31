
let img = document.getElementById("img");
let currentIndex = 0;
let images = ["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg"];




document.getElementById("btn1").addEventListener('click', function(){
    img.src = images[0];
    currentIndex = 0;
});
document.getElementById("btn2").addEventListener('click', function(){
    img.src = images[1];
    currentIndex = 1;
});
document.getElementById("btn3").addEventListener('click', function(){
    img.src = images[2];
    currentIndex = 2;
});
document.getElementById("btn4").addEventListener('click', function(){
    img.src = images[3];
    currentIndex = 3;
});

setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
}, 3000);

   