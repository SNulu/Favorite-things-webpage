$(document).ready(function() {
  $("#things form").submit(function(event) {
    var favoritesId = ["favorite2", "favorite1", "favorite3"];
    var userInputes = [];
    console.log("things ", favoritesId);

    favoritesId.forEach(function(favoriteId) {
      //debugger;
      var userInput = $("#" + favoriteId).val();
      $("." + favoriteId).text(userInput).val();
      userInputes.push(userInput);

      // console.log(userInput);
      // $("." + thingsId).text(userInput).val();
    });

    // $("#story").show();
    console.log("User Inputes: ", userInputes);
    // console.log("first element: ", userInputes[1]);
    // console.log("first element: ", userInputes[0]);
    // console.log("first element: ", userInputes[2]);
    event.preventDefault();
  });
});
