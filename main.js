$(document).ready(function(){

  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'solo.mp3');

  $('.sax').add('.text').on('click', function(){
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  })
})