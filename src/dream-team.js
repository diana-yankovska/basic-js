module.exports = function createDreamTeam(members) {

  return Array.isArray(members) ?
    members
      .filter(item => typeof (item) === "string") // array of strings only
      .map(str => str.trim()) // array of trimed strings 
      .filter(str => str.length > 0) // array of not empty strings after trim
      .map(str => str[0].toUpperCase()) // array of first upper case chars of each string
      .sort() // sorted array of upper case chars
      .join("") : // concatenated string from upper case chars
    false;

};
