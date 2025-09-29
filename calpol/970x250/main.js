// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;
var tl2;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({});

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });
  animate();
}

function animate() {
  tl1.set(["#main"], { autoAlpha: 1});
  // tl1.set(["#cta"], { force3D: false, rotation: .001 });
  // tl1.set('.copy2', {y:20})
  tl1.addLabel('frame1', '0')
  tl1.to(['.baby1, .copy1'], 0.5, { autoAlpha: 0, ease: "power1.in" }, 'frame1+=3');
  tl1.to('#leftVector', 0.5, { x: -288, ease: "power1.in" }, 'frame1+=3.1');
  tl1.to(['.legal1'], 0.5, { autoAlpha:0, ease: "power1.in" }, 'frame1+=3.1');
  
  tl1.to(['.copy2, .legal2, .icon, .p1, #cta'], 0.5, { autoAlpha:1, ease: "power1.in" }, 'frame1+=3.8');

  tl1.to(['.copy2, .legal2, .p1, .icon'], 0.5, { autoAlpha:0, ease: "power1.in" }, 'frame1+=8');

  tl1.to(['.baby2, .copy3, .legal3, .p2'], 0.5, { autoAlpha:1, ease: "power1.in" }, 'frame1+=8.7');
  tl1.to('.logoTag', 0.5, { autoAlpha:0, ease: "power1.in" }, 'frame1+=8.7');
}

function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta-roll"], 0.3, {
    autoAlpha: 1,
    ease: Power1.easeOut,
    delay: 0,
  });
}

function default_out(event) {
  TweenMax.to(["#cta-roll"], 0.3, {
    autoAlpha: 0,
    ease: Power1.easeOut,
    delay: 0,
  });
}
