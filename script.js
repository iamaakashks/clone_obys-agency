//selecting 00 to make it functioning

var tl1 = gsap.timeline();
gsap.from(".line h1", {
  y: 150,
  stagger: 0.3,
  duration: 0.6,
  delay:0.5
});
tl1.to(".line #now-animation",{
  animationName:"anime",
  opacity:1
})
tl1.from("#line-part-1", {
  opacity: 0, delay:0.5, duration:1,
  onStart: function () {
    let loaderCounter = document.querySelector(".line #line-part-1 #count0");
    console.log(loaderCounter.textContent);
    function loaderStart() {
      let count = 10;
      let break_SetInterval = setInterval(function () {
        loaderCounter.textContent = count;
        if (count === 100) {
          clearInterval(break_SetInterval);
          console.log("100 complete");
        }
        count++;
      }, 25);
    }
    loaderStart();
  }
});
tl1.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3,
});
tl1.from("#page1", {
    y:1500, opacity:0, delay:0.2, ease:"power4", duration:1.3
})
tl1.to("#loader", {
  display:none
})