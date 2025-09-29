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
  setRollover();
  animate();
}

function animate() {
  tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: false, rotation: 0.001 });

  tl1.staggerTo(
    "#text-1 span",
    0.5,
    { autoAlpha: 1, ease: "power1.in" },
    1,
    0.5
  );
  tl1.to("#text-1", 0.5, { autoAlpha: 0, ease: "power1.in" }, 3);
  tl1.to("#text-2", 0.5, { autoAlpha: 1, ease: "power1.in" }, 3.8);
  tl1.to("#cta", 0.5, { autoAlpha: 1, ease: "power1.in" }, "+=1");
  tl1.to("#car", 4, { scale: 1, ease: "power1.in", force3D: true }, 0);
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
