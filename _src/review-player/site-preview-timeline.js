import anime from 'animejs'

const selector = '[data-behavior="site-preview"]';

let tl = null;

const init = function() {
  tl = anime.timeline({
    easing: 'linear',
    autoplay: false
  });

  tl
  .add({
    targets: selector,
    translateY: '-25%', // scroll to 2
    delay: 255,
    duration: 5 // at 260
  })
  .add({
    targets: selector,
    translateY: '-50%', // scroll to 3
    delay: 16, // at 276
    duration: 6 // at 282
  })
  .add({
    targets: selector,
    translateY: '-70%', // scroll to 4
    delay: 60, // at 342
    duration: 9 // at 351
  })
  .add({
    targets: selector,
    translateY: '0%', // scroll back to 
    delay: 17, // at 378
    duration: 4 // at 382
  })
  .add({
    duration: 1046
  })
}

const setProgress = function(progress) {
  if (progress === undefined) { return }
  tl.seek(tl.duration * progress)
}

export default {
  init,
  setProgress
}
