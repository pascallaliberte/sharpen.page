import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "progressbar", "video", "play-pause-button" ]
  
  play(event) {
    this.videoTarget.play()
  }
  
  pause(event) {
    this.videoTarget.pause()
  }
  
  togglePlayback(event) {
    if (event.target == this.progressbarTarget) { return }
    
    if (this.videoTarget.dataset.status == 'playing') {
      this.pause()
    } else {
      this.play()
    }
  }
  
  setAsPlaying(event) {
    this.videoTarget.dataset.status = 'playing'
  }
  
  setAsPaused(event) {
    this.videoTarget.dataset.status = 'paused'
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
  }
}
