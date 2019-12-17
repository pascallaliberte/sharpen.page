import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "select", "menu" ]
  
  connect() {
    this.element.classList.add('show')
  }
  
  update(event) {
    let value = ''
    if (event.target.tagName.toLowerCase() == "select") {
      value = event.target.value
    } else {
      value = event.detail.value
    }
    this.selectTarget.dispatchEvent(new CustomEvent('update', { detail: { value: value } }))
    this.menuTarget.dispatchEvent(new CustomEvent('update', { detail: { value: value } }))
  }
}
