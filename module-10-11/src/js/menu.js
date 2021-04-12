import gsap from 'gsap';
import clientStorage from './services/clientStorage';

const isSideBarOpen = JSON.parse(localStorage.getItem('isOpen')); // 'true' -> true

const burgerRef = document.querySelector('.burger');
const sideBarRef = document.querySelector('.side-bar');
const closeButtonRef = sideBarRef.querySelector('.x-mark');
const navBarLinksRef = sideBarRef.querySelectorAll('.side-bar__link');

const openSideBar = () => {
  clientStorage.setItem('isOpen', true);

  gsap.set(navBarLinksRef, { x: -40, opacity: 0 });
  const timeLine = gsap.timeline();
  timeLine.to(sideBarRef, { x: '0%', duration: 0.6 }).to(navBarLinksRef, {
    x: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.15,
    ease: 'elastic',
  });
};

const closeSideBar = () => {
  clientStorage.setItem('isOpen', false);

  const timeLine = gsap.timeline();
  timeLine
    .to(navBarLinksRef, {
      y: 25,
      opacity: 0,
      duration: 0.4,
      stagger: -0.1,
    })
    .to(sideBarRef, { x: '-100%', duration: 0.4 }, '-=0.4');
};

burgerRef.addEventListener('click', openSideBar);
closeButtonRef.addEventListener('click', closeSideBar);

if (isSideBarOpen) {
  openSideBar();
}
