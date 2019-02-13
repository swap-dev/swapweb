var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
  speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
	durationMax: null, // Integer. The maximum amount of time the scroll animation should take
	durationMin: null, // Integer. The minimum amount of time the scroll animation should take
	clip: true,
  easing: 'easeInOutCubic'
});
