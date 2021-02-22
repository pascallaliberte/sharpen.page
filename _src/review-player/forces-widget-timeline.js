import anime from 'animejs'

const iframeHost = 'http://localhost:3000'

const iframeSelector = '[data-behavior="forces-widget"]';

let forces_tl = null;
let reveal_tl = null;
let iframe = null;

let sizes = {
  struggle: 0,
  attraction: 0,
  anxiety: 0,
  habits: 0
}

const init = function() {
  iframe = document.querySelector(iframeSelector)
  
  reveal_tl = anime.timeline({
    easing: 'linear',
    autoplay: false
  })
  
  reveal_tl
  .add({
    targets: iframe,
    opacity: 0,
    translateY: '5%',
    delay: 0,
    duration: 1
  })
  .add({
    targets: iframe,
    opacity: 1,
    translateY: 0,
    delay: 600,
    duration: 5
  })
  .add({
    duration: 823
  })
  
  forces_tl = anime.timeline({
    easing: 'linear',
    autoplay: false
  });
  
  forces_tl
  .add({
    targets: sizes,
    attraction: 1,
    delay: 654,
    duration: 1
  })
  .add({
    targets: sizes,
    attraction: 2,
    delay: 10,
    duration: 1
  })
  .add({
    targets: sizes,
    struggle: 1,
    attraction: 2,
    delay: 5,
    duration: 1
  })
  .add({
    targets: sizes,
    struggle: 2,
    attraction: 2,
    anxiety: 1,
    habits: 1,
    delay: 15,
    duration: 1
  })
  .add({
    targets: sizes,
    struggle: 0,
    attraction: 0,
    anxiety: 0,
    habits: 0,
    delay: 20,
    duration: 1
  })
  .add({
    duration: 719
  })
}

const setProgress = function(progress) {
  if (progress === undefined) { return }
  forces_tl.seek(forces_tl.duration * progress)
  reveal_tl.seek(reveal_tl.duration * progress)
  
  iframe.contentWindow.postMessage({ sizes: sizes }, iframeHost)
}

export default {
  init,
  setProgress
}
