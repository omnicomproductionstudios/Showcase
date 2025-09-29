gsap.registerPlugin(SplitText);

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
  setRollover();
  animate();
}


function animate() {
  tl.set("#main", { autoAlpha: 1, force3D: true });
tl.from('#bg', 1, { ease: Power2.easeOutIn})
  document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });
      let split;
        SplitText.create(".split", {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
          onSplit: (self) => {
            split = gsap.from(self.lines,{
              duration: 1.5,
              yPercent: 100,
              opacity: 0,
              stagger: 0.2,
              ease: "expo.out",
            });
            return split;
          }
      });
  });
  tl.to('#cta', 0.5, {autoAlpha: 1}, 4) 
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


function default_over() {
  TweenMax.to('#cta', 0.3, { scale: 1.1, transformOrigin: '100% 73%', ease: Power2.easeOutIn })
}

function default_out() {
  TweenMax.to('#cta', 0.3, { scale: 1, ease: Power1.easeInOut })
}