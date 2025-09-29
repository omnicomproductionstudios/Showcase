// Banner duration timer start time
var startTime;
// Timeline reference
var tl;
init();
// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, rotationZ: 0.1, force3D: true });
  tl.set(["#photo, #photo2"], { rotationZ: 0.1, force3D: true });
  tl.set(["#photo2"], { y: 300, autoAlpha:1 });

  tl.addLabel('frame_1', 0)
    .to(['#logo'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1")
    .to('#photo2', .8, { y: 0, ease: "none" }, "frame_1")
    .to(['#h1'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=1")
    .to(['#h2'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=1.5")

  // tl.addLabel('frame_END', '+=4.5')
  tl.addLabel('frame_2', 2)
    .to(['#cta'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2")
    .to(['#logoText'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2+=0.5")

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  setRollover();
  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {

  var clickArea = document.getElementById("default_exit");
  clickArea.onclick = function () {
    window.open(clickTag, "_blank");
  };
  // clickArea.addEventListener("mouseover", default_over, false);
  // clickArea.addEventListener("mouseout", default_out, false);
}

// function default_over(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor: "#014732", color: "#fff" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#fff" }, "<");
// }

// function default_out(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor: "inherit", color: "#000" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#000" }, "<");
// }


