// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    const id = $(this).data("id");
     constfreshburger = $(this).data("freshburger");

     constfreshburgerState = {
      devour: freshburger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: freshburgerState
    }).then(
      function() {
        console.log("changed sleep to", freshburger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var freshburger = {
      name: $("#bu").val().trim(),
      devour: $("[name=devour]:checked").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: freshburger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
