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

  animate();
}

function animate() {
  tl1.set(['#cta'], { force3D: false });
  // tl1.set(['#txt1', '#txt2'], { scale: 0.5 });
  tl1.set(['#terms', '#cta'], { autoAlpha: 0 });

  // tl1.to('#logo', 0.5,{ autoAlpha: 1 }, 1);
  tl1.from(['#txt1'], 1,{ autoAlpha: 0, y: '+=100' }, 0);
  tl1.to(['#terms'], 1,{ autoAlpha: 1 }, '-=1');
  tl1.to(['#txt1'], 1,{ autoAlpha: 0, y: '+=100' }, '+=2');
  tl1.to(['#txt1-mask'], 1,{ y: '-=50' }, '-=1');
  tl1.to(['#txt1-mask'], 0,{ autoAlpha: 0 }, '+=0');
  tl1.to(['#image1'], 1,{ autoAlpha: 1, y: '+=250' }, '-=0.75');
  tl1.to(['#terms'], 0.5,{ autoAlpha: 0 }, '+=0');
  tl1.to(['#image1'], 1,{ autoAlpha: 1, y: '+=250' }, '+=1.5');
  tl1.to(['#image1'], 0,{ autoAlpha: 0 }, '+=0');
  tl1.to(['#txt2-mask'], 0,{ autoAlpha: 1 }, '+=0');


  tl1.from(['#txt2'], 1,{ autoAlpha: 0, y: '+=100' }, '+=0');
  tl1.to(['#terms2'], 1,{ autoAlpha: 1 }, '-=1');
  tl1.to(['#txt2'], 1,{ autoAlpha: 0, y: '+=100' }, '+=2');
  tl1.to(['#txt2-mask'], 1,{ y: '-=50' }, '-=1');
  tl1.to(['#txt2-mask'], 0,{ autoAlpha: 0 }, '+=0');
  tl1.to(['#image2'], 1,{ autoAlpha: 1, y: '+=250' }, '-=0.75');
  tl1.to(['#terms2'], 0.5,{ autoAlpha: 0 }, '+=0');
  tl1.to(['#image2'], 1,{ autoAlpha: 1, y: '+=250' }, '+=1.5');
  tl1.to(['#image2'], 0,{ autoAlpha: 0 }, '+=0');
  tl1.to(['#txt3-mask', '#txt4-mask', '#cta-mask'], 0,{ autoAlpha: 1 }, '+=0');


  tl1.from(['#txt3', '#txt4'], 1,{ autoAlpha: 0, y: '+=100' }, '+=0');
  tl1.to(['#cta'], 1,{ autoAlpha: 1, y: '-=100' }, '-=0.75');
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
