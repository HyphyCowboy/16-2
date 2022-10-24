
const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    } 
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]; 
    const result = []; 
    input = input.toLowerCase().split(""); 

    if (encode === true) {
      
      input.forEach((char, index) => {
        
        if (alphabet.includes(char)) {
          
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newIndex = index + shift; 
              if (newIndex < 0) {
                newIndex = newIndex + 26;
              } 
              if (newIndex > 25) {
                newIndex = newIndex - 26;
              }
              newChar = alphabet[newIndex];
              result.push(newChar);
            }
          });
        } else {
          result.push(char);
        }
      });
    } else {
      input.forEach((char, index) => {
        
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newIndex = index - shift;
              if (newIndex < 0) {
                newIndex = newIndex + 26;
              }
              if (newIndex > 25) {
                newIndex = newIndex - 26;
              }
              newChar = alphabet[newIndex];
              result.push(newChar);
            }
          });
        } else {
          result.push(char);
        }
      });
    }
    return result.join(""); 
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
