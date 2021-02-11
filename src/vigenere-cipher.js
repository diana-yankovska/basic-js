const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirectMachine) {
    if (isDirectMachine == null) {
      this.isDirectMachine = true;
    } else {
      this.isDirectMachine = isDirectMachine;
    }
  }

  encrypt(message, key) {
    if (message === undefined) {
      throw new Error("Parameter message is required");
    }
    if (key === undefined) {
      throw new Error("Parameter key is required");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let notEncryptedCharCount = 0;

    for (let i = 0; i < message.length; i++) {
      const currentKeyPosition = (i - notEncryptedCharCount) % key.length;
      if (message[i] >= "A" && message[i] <= "Z") {
        result += String.fromCodePoint((message.codePointAt(i) + key.codePointAt(currentKeyPosition)) % 26 + 65);
      } else {
        result += message[i];
        notEncryptedCharCount++;
      }
    }

    if (!this.isDirectMachine) {
      result = result.split("").reverse().join("");
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined) {
      throw new Error("Parameter message is required");
    }
    if (encryptedMessage === undefined) {
      throw new Error("Parameter key is required");
    }

    key = key.toUpperCase();
    let result = "";
    let notEncryptedCharCount = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const currentKeyPosition = (i - notEncryptedCharCount) % key.length;
      if (encryptedMessage[i] >= "A" && encryptedMessage[i] <= "Z") {
        result += String.fromCodePoint((encryptedMessage.codePointAt(i) + 26 - key.codePointAt(currentKeyPosition)) % 26 + 65);
      } else {
        result += encryptedMessage[i];
        notEncryptedCharCount++;
      }
    }

    if (!this.isDirectMachine) {
      result = result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
