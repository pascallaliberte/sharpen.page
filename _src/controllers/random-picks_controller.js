import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['instructions', 'summary', 'pick']
  
  connect() {
    this.instructionsTarget.classList.add(this.data.get('hide-instructions-class'))
  }
  
  disconnect() {
    this.instructionsTarget.classList.remove(this.data.get('hide-instructions-class'))
  }
  
  updatePick(event) {
    const el = event.target
    const newPick = event.detail.pick
    const pickName = event.detail.name
    
    this.summaryTargets.forEach(summary => {
      if (summary.dataset['random-pick-summary-name'] === pickName) {
        summary.dispatchEvent(new CustomEvent('update-pick', { detail: { pick: newPick } }))
      }
    })
  }
  
  requestNewPick(event) {
    const el = event.target
    const pickName = event.detail.name
    
    this.pickTargets.forEach(summary => {
      if (summary.dataset['random-pick-name'] === pickName) {
        summary.dispatchEvent(new CustomEvent('pick-new', { }))
      }
    })
  }
}
