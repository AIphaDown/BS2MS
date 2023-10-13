
let file = '';
//gets Beatsaber file
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
  file = this.responseText;
}

// Send a request
xhttp.open("GET", "BeatSaberMaps/ExpertStandard.txt");
xhttp.send();

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