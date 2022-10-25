'use strict';

const showCutePug =
  document.querySelector('.dog-button').onclick = function() {
  document.querySelector('.pug-image').style.display= "block";
  document.querySelector('.animal-prompt').innerHTML = "Dogs are the best!"
}

const showCuteKitten =
  document.querySelector('.cat-button').onclick = function() {
  document.querySelector('.kitten-image').style.display= "block";
  document.querySelector('.animal-prompt').innerHTML = "Cats are the best!"
}

// Not sure how to have other image disappear when chosing different prompts

// Honestly super lost, need to work on JS a lot