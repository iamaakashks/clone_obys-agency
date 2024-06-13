//selecting 00 to make it functioning

function loading_page() {
  let tl1 = gsap.timeline();
  gsap.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.7,
    delay: 0.5,
  });
  tl1.to(".line #now-animation", {
    animationName: "anime",
    opacity: 0
  });
  tl1.from("#line-part-1", {
    opacity: 0,
    delay: 0.5,
    duration: 1,
    onStart: function () {
      let loaderCounter = document.querySelector(".line #line-part-1 #count0");
      function loaderStart() {
        let count = 10;
        let break_SetInterval = setInterval(function () {
          loaderCounter.textContent = count;
          if (count === 100) {
            clearInterval(break_SetInterval);
          }
          count++;
        }, 25);
      }
      loaderStart();
    },
  });
  tl1.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2,
  });
  tl1.from("#page1", {
    y: 1500,
    opacity: 0,
    delay: 0.2,
    ease: "power4",
    duration: 1.3,
  });
  tl1.to("#loader", {
    display: "none"
  });
  tl1.from("#page1_nav", {
      opacity:0
  })
  tl1.from(".first-page-view h1", {
    y:100,
    stagger:0.3
  });
}
loading_page();


function cursorAnimation(){
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
      duration: 0.4
    });
  });
  Shery.makeMagnet("#page1_nav_part2 h4");
}
cursorAnimation();

