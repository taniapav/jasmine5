var languagesArrayCreation = function () {
  var languages =  Array('Html', 'CSS', 'Java', 'PHP');

  return languages;
}

var numbersArrayCreation = function () {
  var numbers = Array(0, 1, 2, 3, 4, 5);

    return numbers;
}

var ElementReplacement = function (languages) {

  languages.splice(2, 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  var monTableau = new Array ("1", "2", "3");
  numbers.unshift(-2, -1,);
  return  numbers;
}

var deleteArrayFirstElement = function (languages) {
 languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  var languagesInString = languages.join(',');
  return languagesInString;
}

var arraySort = function (socialMedia) {
  socialMedia.sort();
  return socialMedia;
}

var arrayInvert = function (languages){
  languages.reverse()
  return languages;
}
