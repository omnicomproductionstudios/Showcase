// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });

  var delayRollover = setTimeout(setRollover, 9000);
  animate();
}

function animate() {

  // tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: false, rotation: .001 });
  tl1.set(["#turtle-shadow"], { x:"45px", y:"-8px" });

  tl1.to(['#turtle', '#turtle-shadow'], 1.25,{ x: '+=300', ease: "power1.out" }, 0);
  tl1.to(['#turtle', '#turtle-shadow'], 0.75,{ y: '-=75', ease: "power1.out" }, 0);
  tl1.staggerTo(['.headline'], 1.25,{ scale: 1, y: '-=75', x: '+=300', ease: "power1.out" }, 0.1, 0);

  tl1.to(['#frame-left'], 1,{ x: '+=100', ease: "power1.out" }, '+=0');
  tl1.to(['#frame-right'], 1,{ x: '-=100', ease: "power1.out" }, '<');
  tl1.to(['#frame-bottom'], 1,{ x: '+=100', ease: "power1.out" }, '<');

  tl1.to(['#cta'], 0.5,{ autoAlpha: 1, ease: "power1.out" }, '+=1');

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("bgExit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("bgExit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1.1)", ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1)", ease: Power1.easeOut, delay: 0 });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
