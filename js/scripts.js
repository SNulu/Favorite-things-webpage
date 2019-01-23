$(document).ready(function() {
  $("#things form").submit(function(event) {
    var favoritesId = ["#favorite1", "#favorite2", "#favorite3"];
    var userInputes = [];
    console.log("things ", favoritesId);

    favoritesId.forEach(function(favoriteId) {
      //debugger;
      var userInput = $(favoriteId).val();
      userInputes.push(userInput);
      // console.log(userInput);
      // $("." + thingsId).text(userInput).val();
    });

    // $("#story").show();
    console.log("User Inputes: ", userInputes);
    console.log("first element: ", userInputes[1]);
    console.log("first element: ", userInputes[0]);
    console.log("first element: ", userInputes[2]);
    event.preventDefault();
  });
});
