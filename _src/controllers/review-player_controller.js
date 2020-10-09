import { Controller } from "stimulus"
import SitePreviewTimeline from "../review-player/site-preview-timeline.js"

export default class extends Controller {
  static targets = [ "progressbar", "video", "playPauseButton", "toggleLayoutButton", "sitePreviewURL", "sitePreviewFrame", "sitePreviewFrameWrapper", "sitePreviewLoadButton" ]
  
  initialize() {
    SitePreviewTimeline.init()
  }
  
  play(event) {
    this.videoTarget.play()
  }
  
  pause(event) {
    this.videoTarget.pause()
  }
  
  togglePlayback(event) {
    if (event.target == this.progressbarTarget) { return }
    if (event.target == this.toggleLayoutButtonTarget) { return }
    if (event.target == this.sitePreviewFrameTarget) { return }
    if (event.target == this.sitePreviewURLTarget) { return }
    if (event.target == this.sitePreviewLoadButton) { return }
    
    if (this.element.dataset.status == 'playing') {
      this.pause()
    } else {
      this.play()
    }
  }
  
  setAsPlaying(event) {
    this.element.dataset.status = 'playing'
  }
  
  setAsPaused(event) {
    this.element.dataset.status = 'paused'
  }
  
  seekVideo(event) {
    const value = event.target.value
    const max = Number(event.target.getAttribute('max'))
    const percentage = value / max
    
    this.videoTarget.currentTime = percentage * this.videoTarget.duration
  }
  
  updateComponents(event) {
    const percentage = this.videoTarget.currentTime / this.videoTarget.duration
    
    this.progressbarTarget.value = percentage * this.progressbarTarget.getAttribute('max')
    SitePreviewTimeline.setProgress(percentage)
  }
  
  toggleLayout(event) {
    if (this.element.dataset.layout == "thumbnail") {
      this.element.dataset.layout = "bigger-video"
    } else {
      this.element.dataset.layout = "thumbnail"
    }
  }
  
  loadSitePreview(event) {
    event.preventDefault();
    this.sitePreviewFrameTarget.setAttribute('src', this.sitePreviewURLTarget.value)
    this.sitePreviewFrameWrapperTarget.classList.add('show')
  }
}
