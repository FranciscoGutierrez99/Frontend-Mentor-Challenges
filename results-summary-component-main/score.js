'use strict';



const visualScoreDisplayElement = document.getElementById('visual-score');

const reactionScoreDisplayElement = document.getElementById('reaction-score');

const memoryScoreDisplayElement = document.getElementById('memory-score');

const verbalScoreDisplayElement = document.getElementById('verbal-score');


fetch('./data.json').then(function(resp){
  return resp.json();
}).then(function(data) {
  for (const element of data){
    if (element.category === 'Reaction') {
      reactionScoreDisplayElement.textContent = element.score
    }
    else if  (element.category === 'Memory') {
      memoryScoreDisplayElement.textContent = element.score;
    }
    else if (element.category === 'Verbal') {
      verbalScoreDisplayElement.textContent = element.score;
    }
    else {
      visualScoreDisplayElement.textContent = element.score
    }
  }
})



