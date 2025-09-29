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

  tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: false, rotation: .001 });
  
  tl1.to(['.copy1'], 0.5,{ autoAlpha: 1 }, 3.5);
  tl1.to(['.copy1'], 0.5,{ autoAlpha: 0 }, '+=3');
  tl1.to(['#cta'], 0.5,{ autoAlpha: 1 }, '+=0.5');
  tl1.to(['#copy2'], 0.5,{ autoAlpha: 1 }, '+=1');

  tl1.to(['#bkg'], 10,{ scale: 1.1 }, 0);
  tl2.to(['#bike'], 3,{ y: '-=450', ease: "slow(0.7, 0.7, false)" }, 0);
  tl2.call(bikeFloat, [5], '+=0')
}

function bikeFloat(loop) {
  for (let i = 0; i < loop; i++) {
    tl2.to(['#bike'], 1,{ y: '+=10', ease: "slow(0.7, 0.7, false)" }, '+=0');
    tl2.to(['#bike'], 1,{ y: '-=10', ease: "slow(0.7, 0.7, false)" }, '+=0');
  }
}

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
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
  TweenMax.to(["#cta", "#cta-shine-container"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta", "#cta-shine-container"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
