// Banner duration timer start time
var startTime;


// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
  setRollover();
}

function animate() {
  tl.set(["#main"], { autoAlpha: 1, force3D: true });

  tl.addLabel('frame_1', 0)
    .to(copy1, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_1+=.5");

  tl.addLabel('frame_2', 0.5)
    .to(shape, 0.75, { y: 215, ease: "power2.out" }, "frame_2")
    .to(copy2, 0.25, { autoAlpha: 1, ease: "power2.inOut" }, "frame_2+=.75")
    .to(logo, 0.25, { autoAlpha: 1, ease: "power2.inOut" }, "frame_2+=.75")
    .to(terms, 0.25, { autoAlpha: 1, ease: "power2.inOut" }, "frame_2+=.75");

  tl.addLabel('frame_3', 4.75)
    .to(copy1, 0.2, { autoAlpha: 0, ease: "power2.inOut", }, "frame_3")
    .to(copy2, 0.2, { autoAlpha: 0, ease: "power2.inOut", }, "frame_3")
    .to(shape, 0.5, { y: 0, ease: "linear" }, "frame_3")
    .to(copy3, 0.25, { autoAlpha: 1, ease: "power2.inOut" }, "frame_3+=.5")
    // .to(bgExit, 0.25, { autoAlpha: 1, display: 'block', ease: "power2.inOut" }, "frame_3+=.5")
    .to(cta, 0.25, { autoAlpha: 1, ease: "power2.inOut" }, "frame_3+=.5");

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {
  // document
  //   .getElementById("bgExit")
  //   .addEventListener("mouseover", default_over, false);
  // document
  //   .getElementById("bgExit")
  //   .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  // TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor: "#014732", color: "#fff" });
  // TweenMax.to(["#cta span svg"], 0.3, { fill: "#fff" }, "<");
}

function default_out(event) {
  // TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor: "inherit", color: "#000" });
  // TweenMax.to(["#cta span svg"], 0.3, { fill: "#000" }, "<");
}


