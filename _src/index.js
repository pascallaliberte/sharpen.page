import Turbolinks from 'turbolinks';

// CSS and SASS files
import './index.scss';

Turbolinks.start();

function pauseClassTransitionForElement(selector, newBody, currentBody) {
  const newEl = newBody.querySelector(selector);
  const currentEl = currentBody.querySelector(selector);

  if (newEl.className === currentEl.className) {
    return;
  }

  newEl.setAttribute('data-incoming-class', newEl.className);
  newEl.className = currentEl.className;
}

function resumeClassTransitionForElement(selector) {
  const el = document.querySelector(selector)

  if (!el.hasAttribute('data-incoming-class')) {
    return
  }

  setTimeout(() => {
    el.className = el.getAttribute('data-incoming-class')
    el.removeAttribute('data-incoming-class')
  }, 200)
}

function cleanUpAnimationClasses(newBody) {
  const animatedEls = newBody.querySelectorAll('[data-behavior="animate-on-load"]')

  animatedEls.forEach((el) => {
    if (!el.hasAttribute('data-animation-class')) {
      return
    }
    el.className = el.className.replace(el.getAttribute('data-animation-class'), '')
  })
}

function animateElementsWithAnimateOnLoad() {
  const animatedEls = document.querySelectorAll('[data-behavior="animate-on-load"]')

  animatedEls.forEach((el) => {
    if (!el.hasAttribute('data-animation-class')) {
      return
    }
    el.className = `${el.className} ${el.getAttribute('data-animation-class')}`
  })
}

document.addEventListener('turbolinks:before-render', (event) => {
  const { newBody } = event.data
  const currentBody = document.querySelector('body')

  pauseClassTransitionForElement('[data-behavior="navigation__tagline"]', newBody, currentBody)
  cleanUpAnimationClasses(newBody)
})

document.addEventListener('turbolinks:load', () => {
  resumeClassTransitionForElement('[data-behavior="navigation__tagline"]')
  animateElementsWithAnimateOnLoad()
})
