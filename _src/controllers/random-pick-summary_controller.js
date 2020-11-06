import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['invitation', 'pick']
  
  connect() {
    this.addButton()
  }
  
  disconnect() {
    this.removeButton()
  }
  
  pickRandom() {
    this.element.dispatchEvent(new CustomEvent('request-new-pick', { detail: { name: this.data.get('name') } }))
  }
  
  updatePick(event) {
    this.pickTarget.textContent = event.detail.pick
    this.pickTarget.classList.add(this.data.get('class'))
  }
  
  addButton() {
    this.button = document.createElement('button')
    this.button.textContent = "Pick one at random"
    
    this.button.addEventListener('click', this.pickRandom.bind(this))
    
    this.invitationTarget.appendChild(this.button)
  }
  
  removeButton() {
    button.removeEventListener('click', this.pickRandom)
    
    this.invitationTarget.removeChild(this.button)
  }
}
