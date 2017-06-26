function Journal(title, entry) {
  this.title = title;
  this.entry = entry;
}

Journal.prototype.wordCount = function() {
  return this.entry.split(" ");


  // return entry.split(/[\s,]+/).length - 1;
};

Journal.prototype.vowelCount = function() {

  // add vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  //

  /// return something?
};

exports.journalModule = Journal;
