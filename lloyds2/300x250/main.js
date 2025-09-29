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

  var delayRollover = setTimeout(setRollover, 8000);
  animate();
}

function animate() {

  tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: true, rotation: .001 });
  tl1.set(['#cta', '#txt1', '#txt2', '#overlay'], { autoAlpha: 0 });
  
  tl1.to(['#txt1', '#overlay'], 0.5,{ autoAlpha: 1 }, 2);
  tl1.to(['#bkg'], 0,{ autoAlpha: 0 }, "+=0");
  // tl1.to(['#txt1'], 0.5,{ autoAlpha: 0 }, "-=0.5");
  // tl1.to(['#txt2'], 0.5,{ autoAlpha: 1 }, "+=0.5");
  tl1.to(['#cta'], 0.5,{ autoAlpha: 1 }, "+=1");

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
  TweenMax.to(["#cta"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
