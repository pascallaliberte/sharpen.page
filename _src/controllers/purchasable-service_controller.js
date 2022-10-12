import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["buttonTemplate", "buttons"]
  
  adjustPurchaseOptions(event) {
    const service = this.getServiceDetails(event)
    if (service === undefined) { return }
    
    let newButtonHTML = ""
    service.purchasable_blocks.forEach(purchasable_block => {
      let html = this.buttonTemplateTarget.innerHTML
      html = html
        .replaceAll(`%endpoint%`, service.checkout_session_endpoint)
        .replaceAll(`%service_uuid%`, service.uuid)
        .replaceAll(`%price_in_dollars%`, purchasable_block.price_in_dollars)
        
      if (purchasable_block.weeks.length > 0) {
        html = html
          .replaceAll(`%start_date%`, purchasable_block.weeks[0].from_date)
          .replaceAll(`%end_date%`, purchasable_block.weeks[purchasable_block.weeks.length - 1].to_date)
          .replaceAll(`%date_range_as_string%`, purchasable_block.date_range_as_string)
          .replaceAll(`%start_week%`, purchasable_block.weeks[0].date_range_as_string)
      }
      
      newButtonHTML += `\n` + html
    })
    
    this.buttonsTarget.innerHTML = newButtonHTML
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
