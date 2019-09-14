import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "select", "article" ]

  highlightFilteredArticles() {
    const category = this.selectTarget.value
    
    this.articleTargets.forEach(articleTarget => {
      if (category === 'all') {
        articleTarget.classList.remove('fade')
        articleTarget.classList.remove('highlight')
        return
      }
      
      if (articleTarget.dataset.categories.includes(category)) {
        articleTarget.classList.add('highlight')
        articleTarget.classList.remove('fade')
      } else {
        articleTarget.classList.add('fade')
        articleTarget.classList.remove('highlight')
      }
    })
  }
}
