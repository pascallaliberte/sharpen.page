import { Controller } from "stimulus"

export default class extends Controller {
  
  connect() {
    addOrReloadAvailabilityJs()
  }
}

function getMetaContent(name) {
  const meta = document.querySelector(`meta[name=${name}]`)
  return meta && meta.content
}

function addOrReloadAvailabilityJs() {
  const url = getMetaContent("services-availability-url")
  
  let el = document.querySelector(`script[src="${url}"]`)
  if (el) {
    el.remove()
  }
  
  el = document.createElement('script')
  el.setAttribute('type', 'text/javascript')
  el.setAttribute('defer', true)
  el.setAttribute('src', url)
  
  document.querySelector('head').appendChild(el)
}
