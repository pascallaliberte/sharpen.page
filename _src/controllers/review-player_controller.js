import { Controller } from "stimulus"
import SitePreviewTimeline from "../review-player/site-preview-timeline.js"
import ForcesWidgetTimeline from "../review-player/forces-widget-timeline.js"

export default class extends Controller {
  static targets = [ "progressbar", "video", "playPauseButton", "toggleLayoutButton", "sitePreviewURL", "sitePreviewScreenshot", "sitePreviewFrameWrapper", "sitePreviewLoadButton" ]
  
  connect() {
    SitePreviewTimeline.init()
    ForcesWidgetTimeline.init()
  }
  
  play(event) {
    this.videoTarget.play()
  }
  
  pause(event) {
    this.videoTarget.pause()
  }
  
  checkIframeLoaded(event) {
    // show a little message
  }
  
  togglePlayback(event) {
    if (event !== undefined) {
      if (event.target == this.progressbarTarget) { return }
      if (event.target == this.toggleLayoutButtonTarget) { return }
      if (event.target == this.sitePreviewScreenshotTarget) { return }
      if (event.target == this.sitePreviewURLTarget) { return }
      if (event.target == this.sitePreviewLoadButton) { return }
    }
    
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
  
  controlVideoByKeyboard(event) {
    if (event.code === "Space")      { event.preventDefault(); event.stopPropagation(); this.togglePlayback() }
    if (event.code === "ArrowLeft")  { event.preventDefault(); event.stopPropagation(); this.skipBack() }
    if (event.code === "ArrowRight") { event.preventDefault(); event.stopPropagation(); this.skipForward() }
  }
  
  stopPropagation(event) {
    event.stopPropagation();
  }
  
  skipBack() {
    if (this.videoTarget.currentTime < 10) { this.videoTarget.currentTime = 0; return }
    this.videoTarget.currentTime = this.videoTarget.currentTime - 10;
  }
  
  skipForward() {
    if (this.videoTarget.duration - this.videoTarget.currentTime < 10) { this.videoTarget.currentTime = this.videoTarget.duration; this.pause(); return }
    this.videoTarget.currentTime = this.videoTarget.currentTime + 10;
  }
  
  updateComponents(event) {
    const percentage = this.videoTarget.currentTime / this.videoTarget.duration
    
    this.progressbarTarget.value = percentage * this.progressbarTarget.getAttribute('max')
    SitePreviewTimeline.setProgress(percentage)
    ForcesWidgetTimeline.setProgress(percentage)
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
    this.sitePreviewScreenshotTarget.setAttribute('src', 
      `https://api.apiflash.com/v1/urltoimage?access_key=c5c2ce4e413f42daad021dd0f001bf3c&format=jpeg&full_page=true&no_cookie_banners=true&no_tracking=true&response_type=image&scroll_page=true&url=${encodeURIComponent(this.sitePreviewURLTarget.value)}&width=1280`
    )
  }
  
  revealSitePreview(event) {
    this.sitePreviewScreenshotTarget.classList.add('show')
    this.sitePreviewURLTarget.blur();
  }
}
