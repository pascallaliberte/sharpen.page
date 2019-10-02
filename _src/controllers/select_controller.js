import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "option" ]
  
  update(event) {
    event.preventDefault()
    event.stopPropagation()
    
    this.optionTargets.forEach(option => {
      if (option.getAttribute('value') === event.detail.value) {
        option.setAttribute('selected', 'selected')
      } else {
        option.removeAttribute('selected')
      }
    })
  }
}
