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
  tl.set(["#main_content"], { autoAlpha: 1, rotationZ: 0, force3D: true });
  tl.set(["#faceR"], { x: '-100%', autoAlpha: 1 });
  tl.set(["#faceL"], { x: "100%", autoAlpha: 1 });
  tl.set(["#left_content"], { width: '0%' });
  tl.set(["#left_content", "#right_content"], { scale: 1.6, });
  tl.set(["#h1L"], { x: '100%', autoAlpha: 1 });
  tl.set(["#h1R"], { x: '-100%', autoAlpha: 1 });
  tl.set(["#legal"], { y: '100%', autoAlpha: 1 });

  tl.addLabel('frame_1', 0.5)
    .to('#left_content', 0.7, { width: '50%', ease: Power2.easeOut }, "frame_1")
    .to(['#faceL'], 0.45, { x: '35%', ease: Power2.easeOut }, "frame_1")
    .to(['#faceR'], 0.45, { x: '-35%', ease: Power2.easeOut }, "frame_1")
    .to(['#faceL'], 0.7, { x: 0, ease: Power2.easeOut }, "frame_1+=0.3")
    .to(['#faceR'], 0.7, { x: 0, ease: Power2.easeOut }, "frame_1+=0.3")
    .to('#legal', 1, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, "frame_1+=1")
    .to(['#left_content', '#right_content'], 1, { scale: 1, ease: Power2.easeOut }, "frame_1+=1.1")
    .to(['#h1L', '#h1R'], 0.5, { x: 0, ease: Power2.easeOut }, "frame_1+=1.5")


    .to('#left_content', .75, { width: '0%', ease: 'none' }, "frame_1+=3")
    .to(['#faceL', '#faceR',], 1.5, { x: '-100%', ease: 'none' }, "frame_1+=3")
    .to(['#h1R',], 0.5, { autoAlpha: 0, ease: Power1.easeIn }, "frame_1+=4.5")


  tl.addLabel('frame_2', 5.5)
    .to(['#h2', '#phn'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_2+=0")
    .to(['#h2'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=3")
    .to(['#h3'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_2+=3.5")
  tl.addLabel('frame_3', 12.5)
    .to(['#h3', '#phn'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_3+=0")
    .to(['#h4', '#logo', '#cta'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, 'frame_3+=0.5')

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


