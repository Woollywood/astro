// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

let inputs = document.querySelectorAll('.input');
let buttons = document.querySelectorAll('.button');

inputs.forEach((input) => {
	let inputWrapper = document.createElement('div');
	inputWrapper.classList.add(...input.classList);
	input.after(inputWrapper);
	inputWrapper.append(input);
	input.className = 'input__tag';

	let backgroundSVG = document.createElement('div');
	backgroundSVG.classList.add('input__background');
	backgroundSVG.innerHTML = `
		<svg width="324" height="48" viewBox="0 0 324 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.5434 47.5L4.46007 0.5H323.457L319.54 47.5H0.5434Z"/>
		</svg>
	`;
	inputWrapper.append(backgroundSVG);

	inputWrapper.addEventListener('click', (e) => {
		input.focus();
	});
});

buttons.forEach((button) => {
	let buttonInner = button.innerHTML;
	button.innerHTML = `<div class="button__inner">${buttonInner}</div>`;

	let backgroundSVG = document.createElement('div');
	backgroundSVG.classList.add('button__background');
	backgroundSVG.innerHTML = `
		<svg width="153" height="48" viewBox="0 0 153 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.77227 0H153L144.228 48H0L8.77227 0Z"/>
			<defs>
				<linearGradient id="dark" x1="4.06539" y1="-9.5" x2="30.8206" y2="131.64" gradientUnits="userSpaceOnUse">
					<stop stop-color="#0A1F35"/>
					<stop offset="1" stop-color="#040D17"/>
				</linearGradient>
				<linearGradient id="light" x1="-5.48837" y1="-6.75001" x2="242.355" y2="114.287" gradientUnits="userSpaceOnUse">
					<stop stop-color="#144558"/>
					<stop offset="1" stop-color="#0E3B4C"/>
				</linearGradient>
				<linearGradient id="hover" x1="4.06539" y1="-9.5" x2="30.8206" y2="131.64" gradientUnits="userSpaceOnUse">
					<stop stop-color="#173352"/>
					<stop offset="1" stop-color="#00eebd"/>
				</linearGradient>
			</defs>
		</svg>
	`;
	button.append(backgroundSVG);
});

document.addEventListener('DOMContentLoaded', (eventGlobal) => {
	let headerHeight = getHeaderHeight(document.querySelector('.header'));
	document.querySelector('.main-block').style.paddingTop = headerHeight + 'px';

	window.addEventListener('resize', (resizeEvent) => {
		let headerHeight = getHeaderHeight(document.querySelector('.header'));
		document.querySelector('.main-block').style.paddingTop = headerHeight + 'px';
	});
});

function getHeaderHeight(header) {
	return header.getBoundingClientRect().height;
}
