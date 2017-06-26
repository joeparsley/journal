var Journal = require('./backend').journalModule;

$(document).ready(function(){
  var newEntry = new Journal();

  console.log(newEntry);



});

function Journal(title, entry) {
  this.title = title;
  this.entry = entry;
}

// Journal.prototype.wordCount = function(entry) {
//
// };


exports.journalModule = Journal;
