$(document).ready(function(){

	// Your JavaScript goes here
	const introAnimation = new TimelineMax();

	introAnimation
		.from($('.ks-mo-title-ver'), 0.5, {
			y: 30,
			x: -50,
			autoAlpha: 0,
			rotation: 90,
			transformOrigin: 'left center'
		})
		.from($('.ks-mo-figure'), 0.5, {
			scaleY: 0,
			transformOrigin: 'bottom bottom',
			ease: Back.easeOut
		})
		.staggerFrom($('.ks-mo-desc *'), 0.5, {
			y: 50,
			autoAlpha: 0,
			transformOrigin: 'left',
			ease: Back.easeOut
		}, 0.2)
		.from($('.ks-button'), 0.5, {
			y: 30,
			autoAlpha: 0,
			ease: Back.easeOut
		}, '-=0.2')
		.staggerFrom($('.social_media_wrapper a'), 0.4, {
			y: 20,
			autoAlpha: 0,
			ease: Back.easeOut
		}, 0.1, '-=0.2')

	setTimeout(() => {
		introAnimation.play();
	}, 1200);

});