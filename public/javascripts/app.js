$('#get-dish').on('click', function(event) {
  event.preventDefault();

  $.get("/dishes/random.json", function(newDish) {
    alert("Your random dish is: " + newDish["new_dish"]);
  });
});
