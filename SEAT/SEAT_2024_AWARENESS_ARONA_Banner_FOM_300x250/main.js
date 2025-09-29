var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {


  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#cta,#image1", { opacity: 0, force3D: true })
  // .set("#image1", { x: -37, y: 35, scale: 1.45 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#logo', 0.5, { opacity: 0, ease: Linear.easeInOut }, "frame1+=1")
    .to('#image1', 0.1, { opacity: 1, ease: Linear.easeInOut }, "frame1+=1.4")
    .to('#image1', 4.8, { x: 0, y: 0, scale: 1, ease: Linear.easeInOut, rotation: 0.1, force3D: true }, "frame1+=1.5")

  tl.addLabel("frame2", "6.8")
    .to('#image1', 0.2, { opacity: 0, ease: Linear.easeInOut }, "frame2+=0")
    .to('#logo', 0.5, { opacity: 1, ease: Linear.easeInOut }, "frame2+=0.2")
    .to('#cta', 0.5, { opacity: 1, ease: Linear.easeInOut }, "frame2+=0.6")
}
