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
    const highlightClass = this.data.get('class')
    
    if (elements.length === 0) {
      return
    }
    
    elements.forEach(el => {
      el.classList.remove(highlightClass)
    })
    
    const index = this.nextUnpickedIndex(elements.length)
    elements[index].classList.add(highlightClass)
    
    this.element.dispatchEvent(new CustomEvent('update', { detail: { 
      name: this.data.get('name'),
      pick: elements[index].textContent
    } }))
  }
  
  nextUnpickedIndex(length) {
    let picked = this.pickedIndexes().filter(index => index >= 0 && index < length)
    let remaining = this.unpickedIndexes(length, picked)
    
    if (remaining.length === 0) {
      const lastPicked = picked[picked.length - 1]
      picked = []
      remaining = this.unpickedIndexes(length, picked)
      
      if (length > 1 && lastPicked !== undefined) {
        remaining = remaining.filter(index => index !== lastPicked)
      }
    }
    
    const index = remaining[this.getRandomInt(remaining.length)]
    picked.push(index)
    this.element.dataset.randomPickPickedIndexes = picked.join(',')
    return index
  }
  
  pickedIndexes() {
    const raw = this.element.dataset.randomPickPickedIndexes
    if (!raw) return []
    
    return raw.split(',').map(value => Number(value)).filter(value => Number.isInteger(value))
  }
  
  unpickedIndexes(length, picked) {
    const remaining = []
    
    for (let index = 0; index < length; index += 1) {
      if (picked.indexOf(index) === -1) {
        remaining.push(index)
      }
    }
    
    return remaining
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
