const morse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};

let decode = function (str) {
  let result = "";
  let words = str.split("  ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(" ");
    for (let j = 0; j < letters.length; j++) {
      for (let k in morse) {
        if (morse[k] === letters[j]) {
          result += k;
        }
      }
    }
    result += " ";
  }
  return result;
};

let encode = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += morse[str[i].toUpperCase()] + " ";
  }
  return result;
};

console.log(decode("... --- ..."));
console.log(encode("sos"));
