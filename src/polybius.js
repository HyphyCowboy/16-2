
const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
    
    const polybiusSquare = {
      1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" },
      2: { 1: "f", 2: "g", 3: "h", 4: "i/j", 5: "k" },
      3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p" },
      4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u" },
      5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z" },
    };

    const message = input.toLowerCase().split(""); 
    const messageNoSpaces = message.filter((nums) => nums != " ");
    if (!encode) {
     
      let decodeString = "";
      if (messageNoSpaces.length % 2 != 0) return false; 
      for (let index = 0; index < message.length; index += 2) {
        
        if (message[index] === " ") {
          
          decodeString += " ";
          index--; 
        } else {
          decodeString += polybiusSquare[message[index + 1]][message[index]];
        } 
      }
      return decodeString;
    } else {
      
      const buildEncryption = [];
      for (let letter of message) {
        
        if (letter === " ") {
          buildEncryption.push(" ");
        } 
        for (let c = 1; c < 6; c++) {
          
          for (let i = 1; i < 6; i++) {
            
            if (polybiusSquare[c][i].includes(letter)) {
              buildEncryption.push(i);
              buildEncryption.push(c);
            }
          }
        }
      }
      return buildEncryption.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
