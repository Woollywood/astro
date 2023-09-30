import { gsap, ScrollTrigger } from 'gsap/all.js';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);

const smoothScrolling = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
});

smoothScrolling.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
	scrollTop(value) {
		return arguments.length ? smoothScrolling.scrollTo(value, 0, 0) : smoothScrolling.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
	pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed',
});

// Init function for code here
init();

ScrollTrigger.addEventListener('refresh', () => smoothScrolling.update());
ScrollTrigger.refresh();

function init() {
	gsap.from('.header', {
		y: 100,
		opacity: 0,
		duration: 1,
	});

	const t1 = gsap.to('.main-block__left', {
		x: -260,
		y: -100,
		scale: 0.6,
		opacity: 0,
	});
	const t2 = gsap.to('.main-block__right', {
		x: 260,
		y: 100,
		scale: 0.6,
		opacity: 0,
	});

	ScrollTrigger.create({
		trigger: '.main-block',
		start: 'top top',
		scroller: '[data-scroll-container]',
		animation: t1,
		scrub: 1,
	});

	ScrollTrigger.create({
		trigger: '.main-block',
		start: 'top top',
		scroller: '[data-scroll-container]',
		animation: t2,
		scrub: 1,
	});

	const t3 = gsap.from('.about__title', {
		x: -260,
		scale: 0.6,
		opacity: 0,
	});

	const t4 = gsap.from('.about__image', {
		x: -260,
		scale: 0.6,
		opacity: 0,
	});

	const t5 = gsap.from('.about__content', {
		x: 260,
		scale: 0.6,
		opacity: 0,
	});

	ScrollTrigger.create({
		trigger: '.about',
		start: 'top 80%',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t3,
		scrub: 1,
	});

	ScrollTrigger.create({
		trigger: '.about',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t4,
		scrub: 1,
	});

	ScrollTrigger.create({
		trigger: '.about',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t5,
		scrub: 1,
	});

	const t6 = gsap.from('.tournaments__title', {
		x: -260,
		scale: 0.6,
		opacity: 0,
	});

	const t7 = gsap.from('.tournaments__content', {
		x: 260,
		scale: 0.6,
		opacity: 0,
	});

	ScrollTrigger.create({
		trigger: '.tournaments',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t6,
		scrub: 1,
	});

	ScrollTrigger.create({
		trigger: '.tournaments',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t7,
		scrub: 1,
	});

	const t8 = gsap.from('.shop__content', {
		xPercent: 100,
		opacity: 0,
	});

	const t9 = gsap.from('.news__content', {
		xPercent: -100,
		opacity: 0,
	});

	ScrollTrigger.create({
		trigger: '.shop',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t8,
		scrub: 1,
	});

	ScrollTrigger.create({
		trigger: '.news',
		end: 'top 30%',
		scroller: '[data-scroll-container]',
		animation: t9,
		scrub: 1,
	});

	const t10 = gsap.from('.channel', {
		scale: 0.6,
		opacity: 0.6,
	});

	ScrollTrigger.create({
		trigger: '.channel',
		start: 'top 80%',
		end: 'center 120%',
		scroller: '[data-scroll-container]',
		animation: t10,
		scrub: 1,
	});
}
