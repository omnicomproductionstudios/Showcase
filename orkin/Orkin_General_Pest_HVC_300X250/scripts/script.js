/*	version: "v8.2"	*/

$.noConflict();
var $ = jQuery;

var $cta_width;

/************************************ Custom JS *****************************************/

function init_animation() {
	"use strict";
	frame_one();
	gsap.delayedCall(3, frame_two);
	gsap.delayedCall(7, frame_three);
	gsap.to("#bg1", 10, {scale:1.1, ease:Linear.easeNone});
	
	$cta_width = $("#cta").width() + 10;
}

function frame_one() {
	gsap.to("#copy1", 0.8, {x:0, alpha:1, ease:Power2.easeOut});
}

function frame_two() {
	gsap.to("#bg2", 10, {x:0, scale:1, ease:Linear.easeNone});
    gsap.to("#green_angle", 1.5, { autoAlpha: 1, y: '0',ease:Linear.easeNone })
	gsap.to("#copy1", 0.6, {alpha:0, ease:Power2.easeOut});
	gsap.to("#bg1", 0.6, {alpha:0, delay:0.25, ease:Power2.easeOut});
	
	gsap.to("#copy2", 0.8, {x:0, alpha:1, delay:0.8,  ease:Power2.easeOut});
}

function frame_three() {
	gsap.to("#copy2", 0.6, {alpha:0, ease:Power2.easeOut});
	gsap.to("#copy3", 0.8, {x:0, alpha:1, delay:0.8, ease:Power2.easeOut});
	
	gsap.delayedCall(2, end_frame);
}

function end_frame() {
	gsap.to("#cta", 0.6, {y:0, alpha:1, ease:Power2.easeOut, onComplete:init_cta});
	gsap.to("#legal", 0.6, {y:0, alpha:1, delay:0.8, ease:Power2.easeOut});
}

function init_cta() {
	gsap.to("#sheen", 1, {x:$cta_width, delay:0.5, onComplete:init_rollover});
}

function init_rollover() {
	$("#main-panel").on("mouseover", function(evt) {
		gsap.set("#sheen", {x:-150, onComplete:function() {
			gsap.to("#sheen", 1, {x:$cta_width});
		}});
	});
}

/*********************************************************************************************/
