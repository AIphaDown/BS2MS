
const file = '';
//gets Beatsaber file
var client = new XMLHttpRequest();
client.open('GET', 'BeatSaberMaps/ExpertStandard.txt');
client.onreadystatechange = function() {
  alert(client.responseText);
}
client.send();

console.log(file);
let input = "hello world";
console.log(input);
let newword = input.indexOf("wor")

function findNote(BSfile) {
  let newFile = "";
  let start = BSfile.indexOf("_notes")

}

function findWord(word, str) {
  return str.split(' ').some(function(w) { return w === word })
}
console.log(newword);