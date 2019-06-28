class VideoPlayer {
  constructor(elem) {
    this.videoPlayer = elem;
    this.video = this.videoPlayer.querySelector(".video-player__video");
    this.controls = this.videoPlayer.querySelector(".video-player__controls");

    this._configureControls();
  }

  _configureControls() {
    this.controls
      .querySelector(".video-controls__play")
      .addEventListener("click", this.onClickPlay.bind(this));
  }

  onClickPlay() {
    const video = this.video;
    const controls = this.controls;
    const hiddenCssClass = "video-player__controls_hidden";

    if (video.paused) {
      video.play();
      controls.classList.add(hiddenCssClass);
      return;
    }
    video.pause();
    controls.classList.remove(hiddenCssClass);
  }
}

export function init() {
  document.querySelectorAll(".video-player").forEach(elem => {
    new VideoPlayer(elem);
  });
}
