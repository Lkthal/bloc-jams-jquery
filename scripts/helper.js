<<<<<<< HEAD
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
=======

class Helper {
  constructor () {

  }
    playPauseAndUpdate(song) {
      setTimeout( () => {
        if(player.playState !== 'playing') {return;}
        const totalTime = player.getDuration();
        $('#time-control .total-time').text(totalTime);
      }, 100);
      return player.playPause(song);
    }
  }

const helper = new Helper();
>>>>>>> checkpoint-2-14-sliders
