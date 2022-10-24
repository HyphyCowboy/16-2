
const substitutionModule = (function () {
 
  function substitution(input, alphabet, encode = true) {
    const encryptionKeys = {};

    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    
    let charCodeCount = 97;

    for (let c = 0; c <= 25; c++) {
      
      if (Object.values(encryptionKeys).includes(alphabet[c])) {
        return false;
      } 
      else {
        encryptionKeys[String.fromCharCode(charCodeCount)] = alphabet[c]; 
        charCodeCount++;
      }
    }

    const buildEncryption = input.toLowerCase().split("");

    {
     
      return buildEncryption
        .map((letter) => {
          
          for (let plainLetter in encryptionKeys) { 
            
            let substitutionLetter = encryptionKeys[plainLetter]; 
            if (letter == " ") return " "; 
            if (encode && letter == plainLetter) return substitutionLetter; 
            if (!encode && letter == substitutionLetter) return plainLetter; 
          }
        })
        .join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
