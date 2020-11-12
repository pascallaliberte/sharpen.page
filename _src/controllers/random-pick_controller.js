import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['invitation']
  
  connect() {
    this.addButton()
  }
  
  disconnect() {
    this.removeButton()
  }
  
  pickRandom() {
    const elements = this.element.querySelectorAll(this.data.get('selector'))
    
    elements.forEach(el => {
      el.classList.remove(this.data.get('class'))
    })
    
    const randomIndex = this.getRandomInt(elements.length)
    elements[randomIndex].classList.add(this.data.get('class'))
    
    this.element.dispatchEvent(new CustomEvent('update', { detail: { 
      name: this.data.get('name'),
      pick: elements[randomIndex].textContent
    } }))
  }
  
  addButton() {
    this.button = document.createElement('button')
    this.button.textContent = "Highlight one at random"
    
    this.button.addEventListener('click', this.pickRandom.bind(this))
    
    this.invitationTarget.appendChild(this.button)
  }
  
  removeButton() {
    button.removeEventListener('click', this.pickRandom)
    
    this.invitationTarget.removeChild(this.button)
  }
  
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
