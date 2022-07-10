import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["buttonTemplate", "buttons"]
  
  adjustPurchaseOptions(event) {
    const service = this.getServiceDetails(event)
  }
  
  connect() {
    this.backupOriginalButtons()
  }
  
  disconnect() {
    this.restoreOriginalButtons()
  }
  
  backupOriginalButtons() {
    this.originalButtonsHTML = this.buttonsTarget.innerHTML
  }
  
  restoreOriginalButtons() {
    if (!this.originalButtonsHTML) { return }
    this.buttonsTarget.innerHTML = this.originalButtonsHTML
  }
  
  getServiceDetails(event) {
    const service_slug = this.data.get('slug')
    if (!service_slug) { return undefined }
    return event?.detail?.service_ladder[service_slug]
  }
}
