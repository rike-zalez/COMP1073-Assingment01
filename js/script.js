const nouns = ['cat', 'dog', 'bird', 'tree', 'house'];
const verbs = ['jumped', 'ran', 'flew', 'ate', 'slept'];
const adjectives = ['big', 'small', 'happy', 'sad', 'funny'];
const adverbs = ['quickly', 'slowly', 'happily', 'sadly', 'loudly'];
const places = ['park', 'beach', 'school', 'forest', 'city'];

let chosenWords = {
  noun: '',
  verb: '',
  adjective: '',
  adverb: '',
  place: ''
};

document.getElementById('nounBtn').addEventListener('click', () => chooseWord('noun'));
document.getElementById('verbBtn').addEventListener('click', () => chooseWord('verb'));
document.getElementById('adjectiveBtn').addEventListener('click', () => chooseWord('adjective'));
document.getElementById('adverbBtn').addEventListener('click', () => chooseWord('adverb'));
document.getElementById('placeBtn').addEventListener('click', () => chooseWord('place'));
document.getElementById('viewStoryBtn').addEventListener('click', viewStory);
document.getElementById('randomStoryBtn').addEventListener('click', generateRandomStory);
document.getElementById('resetBtn').addEventListener('click', reset);

function chooseWord(partOfSpeech) {
  const words = eval(partOfSpeech + 's');
  const index = Math.floor(Math.random() * words.length);
  chosenWords[partOfSpeech] = words[index];
  document.getElementById(partOfSpeech + 'Btn').innerText = words[index];
}

function viewStory() {
  const { noun, verb, adjective, adverb, place } = chosenWords;
  const story = `The ${adjective} ${noun} ${verb} ${adverb} to the ${place}.`;
  document.getElementById('story').innerText = story;
}

function generateRandomStory() {
  Object.keys(chosenWords).forEach(partOfSpeech => chooseWord(partOfSpeech));
  viewStory();
}

function reset() {
  Object.keys(chosenWords).forEach(partOfSpeech => {
    chosenWords[partOfSpeech] = '';
    document.getElementById(partOfSpeech + 'Btn').innerText = partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1);
  });
  document.getElementById('story').innerText = '';
}
