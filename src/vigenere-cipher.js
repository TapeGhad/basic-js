const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw Error;
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) throw Error;
  }
}

module.exports = VigenereCipheringMachine;
