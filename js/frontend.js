var Journal = require('./backend').journalModule;

$(document).ready(function(){

  $(".form").submit(function(e){
    e.preventDefault();

    var userTitle = $('#titleInput').val();
    var userEntry = $('#entryInput').val();
    var newEntry = new Journal(userTitle, userEntry);

    newEntry.wordCount(userEntry);
    // console.log(newEntry.wordCount());
    // console.log(newEntry);

    $('.output').each(function(){
      $('.output').append("<li>" + userEntry + "</li>");
    });
    // console.log(newEntry);
  });




});
