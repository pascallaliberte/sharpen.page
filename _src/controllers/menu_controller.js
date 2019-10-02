import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "link" ]
  
  select(event) {
    event.preventDefault()
    event.stopPropagation()
    
    const value = event.target.dataset.value
    this.element.dispatchEvent(new CustomEvent('change', { detail: { value: value } }))
  }
  
  update(event) {
    this.linkTargets.forEach(option => {
      if (option.dataset.value === event.detail.value) {
        option.classList.add('active')
      } else {
        option.classList.remove('active')
      }
    })
  }
}
