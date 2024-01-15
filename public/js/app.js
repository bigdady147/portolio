
var myWow = new WOW().init();

var myFullpage = new fullpage('#fullpage', {
	// Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors: ['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
	// Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 600,
	scrollBar: true,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	// Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// Design
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>',
		'<div class="fp-arrow"></div>'
	],
	verticalCentered: true,
	// sectionsColor : ['#ccc', '#fff'], // Setbackground color
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
	dropEffect: false,
	dropEffectOptions: { speed: 1300, color: '#F82F4D', zIndex: 9999 },
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
	cards: false,
	cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

	// Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	// credits: { enabled: false, label: '', position: 'right'},

	// Events
	beforeLeave: function (origin, destination, direction, trigger) { },
	onLeave: function (origin, destination, direction, trigger) {
		handleAnimations(destination);
	},
	afterLoad: function (origin, destination, direction, trigger) { 
		// $(destination.item).find('.to-animate-left').addClass('animated fadeInLeftBig');
	},
	afterRender: function () { },
	afterResize: function (width, height) { },
	afterReBuild: function () { },
	afterResponsive: function (isResponsive) { },
	afterSlideLoad: function (section, origin, destination, direction, trigger) { },
	onSlideLeave: function (section, origin, destination, direction, trigger) { },
	onScrollOverflow: function (section, slide, position, direction) { }



});
const handleAnimations = (destination) => {
	if (window.matchMedia("(min-width: 1300px)").matches) {
		const destinationAnimatedEls = destination.item.querySelectorAll(
			".animate__animated"
		);
		for (const el of destinationAnimatedEls) {
			const dataset = el.dataset;
			el.classList.add(dataset.animation);
			if (el.classList.contains("last")) {
				el.addEventListener("animationend", () => {
					destination.item.querySelector(".fp-overflow").style.overflow =
						"auto";
				});
			}
		}
	}
}
// document.getElementsByClassName('fp-watermark').style.display = "none";