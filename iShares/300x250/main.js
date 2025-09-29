var creative = {}

/* INITIALISE
************************************************** */

function checkIfAdKitReady(event) {
    adkit.onReady(init);
}

function init() {
  setupDom()
  addListeners()
  animate()
}

/* DOM REFERENCES
************************************************** */
function setupDom() {
  creative.dom = {}
  creative.dom.mainContainer = document.getElementById('main-container')
}

function addListeners() {
  document.getElementById("up").addEventListener('click', clickUp);
  document.getElementById("up").addEventListener('mouseover', rolloverUp);
  document.getElementById("up").addEventListener('mouseout', rolloutUp);
  document.getElementById("up").addEventListener('touchstart', rolloverUp);
  document.getElementById("up").addEventListener('touchend', rolloutUp);
  document.getElementById("down").addEventListener('click', clickDown);
  document.getElementById("down").addEventListener('mouseover', rolloverDown);
  document.getElementById("down").addEventListener('mouseout', rolloutDown);
  document.getElementById("down").addEventListener('touchstart', rolloverDown);
  document.getElementById("down").addEventListener('touchend', rolloutDown);

  document.getElementById("background_exit").addEventListener('click', bgExit);
  document.getElementById('background_exit').addEventListener('mouseover', default_over);
  document.getElementById('background_exit').addEventListener('mouseout', default_out);

  document.getElementById('info').addEventListener('click', revealTerms);
  document.getElementById('close').addEventListener('click', hideTerms);
}

function bgExit(){
  adkit.clickthrough();
}

function revealTerms() {
  gsap.to([".text2", "#info", ".anim_container", ".anim", "#t1", ".hide"],0.3,  {autoAlpha:0});
  gsap.to(["#terms", "#cta"], 0.6, { y: 0, ease:"power4.inOut", delay:0.3, autoAlpha: 1 });
  gsap.to("#terms_text", .2, { y: 0 });
  gsap.to("#cta", 0.6, {opacity: 0, display: "none"}, 0.3, );
}

function hideTerms() { 
  gsap.to(["#terms"], 0.6, { y: 30, autoAlpha: 0, ease:"power4.inOut"});
  gsap.to([".text2", "#info", ".hide" ],0.3, {autoAlpha:1, delay: 0.6});
  gsap.to("#cta", .2, {y: 0, opacity: 1, display: "block", ease: "power4.inOut", delay: 0.3,autoAlpha: 1});
}

function default_over(event) {
  gsap.to(["#cta"], .3, { scale: 1.05, ease:"power4.inOut" });
}

function default_out(event) {
  gsap.to(["#cta"], .3, { scale: 1, ease:"power4.inOut" });
}

function rolloverUp(ev) {
  ev.preventDefault();
  gsap.set("#up", {backgroundPositionY:"top"});
  scrollInterval = setInterval(scrollUp, 500);
  console.log("upbtn roll over");
}

function rolloutUp(ev) {
  ev.preventDefault();
  gsap.set("#up", {backgroundPositionY:"center"});
  clearInterval(scrollInterval);
  console.log("upbtn roll out");
}

function clickUp() {}

function rolloverDown(ev) {
  ev.preventDefault();
 gsap.set("#down", {backgroundPositionY:"bottom"});
  scrollInterval = setInterval(scrollDown, 500);
  console.log("Downbtn roll over");
}

function rolloutDown(ev) {
  ev.preventDefault();
  gsap.set("#down", {backgroundPositionY:"center"});
  clearInterval(scrollInterval);

  console.log("Downbtn roll out");
}

function clickDown() {}

function scrollDown() {
  var currentYPos = gsap.getProperty("#terms_text", "y");
  var termsMaxYPositionNegative = -Math.abs(termsMaxYPosition);
  if (currentYPos >= termsMaxYPositionNegative) {
      gsap.to("#terms_text", .2, { y: "-=60" });
  } else {
      gsap.to("#terms_text", .2, { y: termsMaxYPositionNegative - 30 });
      clearInterval(scrollInterval);
  }
}

function scrollUp() {
  var currentYPos = gsap.getProperty("#terms_text", "y");
  if (currentYPos <= 0) {
      gsap.to("#terms_text", .2, { y: "+=60" });
  } else {
      gsap.to("#terms_text", .2, { y: 0 });
      clearInterval(scrollInterval);
  }
}

function slowDown() {
  gsap.to("#runway", {
    duration: 3, 
    x: "-=300", 
    ease: "power1.out" 
  });
}

/* ANIMATE AD
************************************************** */
function animate() {

  gsap.set("#terms", {y:"+=30px", autoAlpha: 0, ease: Power2.easeIn});
  gsap.set(" #t2, #cta, #anim", {autoAlpha:0});

termsHolderHeight = document.getElementById("text_wrapper").offsetHeight;
  termsHeight = document.getElementById("terms_text").offsetHeight;
  termsCurrentPosition = document.getElementById("terms_text").offsetTop;
  termsMaxYPosition = termsHeight - termsHolderHeight;  
  gsap.to("#main-container" , 0, {autoAlpha:1});
    
  var mainTL = gsap.timeline();
    mainTL.addLabel("frame1", 0.0) 
    .addLabel("frame2", 4.5)  
    .addLabel("frame3", 10)  
    .addLabel("frame4", 11) 
    .addLabel("explosion", "frame1+=3.7")

    .from([".t1word", "#main","#main_drop"], {duration:1, autoAlpha:0}, "frame1")
    .to(".word1", {x: 0, autoAlpha: 1, ease: Power2.easeOut})
    .to(".word2, #anim", {x: 0, autoAlpha: 1, ease: Power2.easeOut}, "-=0.4")
    .to("#runway", 4, {x: -600, onComplete: slowDown}, "-=0.4")
    .to("#plane", {autoAlpha: 1}, "-=4")
    .to("#plane", 4, {y: 0, x: 0, ease: Power2.easeOut, autoAlpha: 1}, "-=3")
    .to("#plane", 2, {rotation: 0, ease: Power2.easeIn}, "-=2.5")
    .to(["#main", "#main_drop", "#t1", "#anim"], {duration:0.3, autoAlpha:0}, "8")
    .to(["#t2"], {duration:0.3, autoAlpha:1}, "8")
    .to(["#cta"], {duration:0.3, autoAlpha:1}, "8.5");
}
/* WINDOW LOAD
************************************************** */
gsap.defaults({ease:"none"});
try {
  if (window.location.href !== window.parent.location.href) {
    addEventListener('load', init)
  } else {
    window.addEventListener('load', checkIfAdKitReady)
  }
} catch(error) {
  if (error.code === 18) {
    addEventListener('load', init)
  }
}