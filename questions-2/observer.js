var options = {
  rootMargin: '0px 0px -100px 0px',
};
const intersectionHandler = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.classList.add('active');
    }
  });
};
const observer = new IntersectionObserver(intersectionHandler, options);
const paragraphsRef = document.querySelectorAll('.paragraph');
paragraphsRef.forEach((paragraph) => observer.observe(paragraph));
// observer.observe(paragraphsRef[4]);

const token = localStorage.getItem('token');
if (token) {
  console.log('checking for user session');
}
