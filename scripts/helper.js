
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
