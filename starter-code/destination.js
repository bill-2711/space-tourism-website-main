let marsPic = document.getElementById("marsPic")

let planets = document.querySelector(".moon");
planets.addEventListener("click", function () {
    heading.innerHTML="Moon"; 
    marsPic.src="assets/destination/image-moon.png"
    // console.log(marsPic.src);
    
    
});



planets = document.querySelector(".mars");
planets.addEventListener("click", function () {
    heading.innerHTML="Mars"; 
    marsPic.src="assets/destination/image-mars.png"
});


planets = document.querySelector(".europa");
planets.addEventListener("click", function () {
    heading.innerHTML="Europa";
    marsPic.src="assets/destination/image-europa.png"
});

planets = document.querySelector(".titan");
planets.addEventListener("click", function () {
    heading.innerHTML="Titan";
    marsPic.src="assets/destination/image-titan.png"
});
