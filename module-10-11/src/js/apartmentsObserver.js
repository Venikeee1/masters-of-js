import gsap from 'gsap';

const animateApartment = element => {
  const timeLine = gsap.timeline();
  const apartmentTitle = element.querySelector('.apartment__title');
  const apartmentDescription = element.querySelector('.apartment__description');
  gsap.set([apartmentTitle, apartmentDescription], { y: 30 });
  timeLine.to([element, apartmentTitle, apartmentDescription], {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
  });
};

const apartmentsObserver = apartmentList => {
  const observerHandler = function (entries, observer) {
    entries.forEach(entry => {
      const isInView = entry.isIntersecting;

      if (isInView) {
        const { target } = entry;
        animateApartment(target);
        observer.unobserve(target);
      }
    });
  };
  const observerOptions = {
    rootMargin: '-200px',
  };

  gsap.set(apartmentList, { y: 30, opacity: 0 });
  const observer = new IntersectionObserver(observerHandler, observerOptions);

  apartmentList.forEach(apartment => {
    observer.observe(apartment);
  });
};

export default apartmentsObserver;
