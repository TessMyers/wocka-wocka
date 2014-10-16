$(document).ready(function(){

  console.log('running');

  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'solo.mp3');

  $('.sax').on('click', function(){
    console.log('playing');
    audioElement.play();
  })
})