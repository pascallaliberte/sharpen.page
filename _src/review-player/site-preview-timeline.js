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
    translateY: '-30%',
    delay: 300,
    duration: 200
  })
  .add({
    targets: selector,
    translateY: '-60%',
    delay: 700,
    duration: 300
  })
  .add({
    targets: selector,
    translateY: '0',
    delay: 100,
    duration: 100
  })
  .add({
    targets: selector,
    translateY: '-60%',
    delay: 200,
    duration: 200
  })
  .add({
    targets: selector,
    translateY: '-80%',
    delay: 500,
    duration: 300
  })
  .add({
    duration: 300
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
