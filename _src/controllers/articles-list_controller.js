import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "article" ]

  highlightFilteredArticles(event) {
    const topic = event.target.value || event.detail.value
    
    this.element.dataset.filterTopic = topic
    
    this.articleTargets.forEach(articleTarget => {
      if (topic === 'all') {
        articleTarget.classList.remove('fade')
        articleTarget.classList.remove('highlight')
        return
      }
      
      if (articleTarget.dataset.categories.includes(topic)) {
        articleTarget.classList.add('highlight')
        articleTarget.classList.remove('fade')
      } else {
        articleTarget.classList.add('fade')
        articleTarget.classList.remove('highlight')
      }
    })
  }
}
