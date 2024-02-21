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
