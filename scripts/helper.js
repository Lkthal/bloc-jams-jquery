$(document).ready(function() {
class Helper {
  constructor () {
    this.helper = new Helper();
  }
    playPauseAndUpdate(song) {
      const totalTime = player.getTime();
      $('#time-control .total-time').text(totalTime);
      player.playPause(song);
    }
  }
});
