const imageList = [
  {
    original:
      'https://www.meme-arsenal.com/memes/9795d899f7cc9241dacd01a5e1d81281.jpg',
    preview:
      'https://www.meme-arsenal.com/memes/9795d899f7cc9241dacd01a5e1d81281.jpg',
    alt: 'photo',
  },
  {
    original:
      'https://www.meme-arsenal.com/memes/f2db48840abed91b4c8ef10ec2c26837.jpg',
    preview:
      'https://www.meme-arsenal.com/memes/f2db48840abed91b4c8ef10ec2c26837.jpg',
    alt: 'photo',
  },
];

const nextButtonRef = document.querySelector('.next');
const prevButtonRef = document.querySelector('.prev');
const imageRef = document.querySelector('.img');
let currentIndex = 0;

const goToNextImage = () => {
  if (currentIndex === imageList.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  showImage();
};

const goToPrevImage = () => {
  if (currentIndex === 0) {
    currentIndex = imageList.length - 1;
  } else {
    currentIndex -= 1;
  }

  showImage();
};

const showImage = () => {
  const activeImage = imageList[currentIndex];
  imageRef.src = activeImage.original;
  imageRef.alt = activeImage.alt;
};

showImage();

nextButtonRef.addEventListener('click', goToNextImage);
