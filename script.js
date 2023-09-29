const title = $("#title");
const rating = $("#rating");
const submit = $("#submit-btn");

submit.on("click", function (e) {
  e.preventDefault();
  if (title.val().length < 2 || rating.val() < 0 || rating.val() > 10) {
    alert(
      "Please enter a title with at least 2 characters and a rating between 0-10"
    );
  } else {
    $("ul").append(
      $("<li>", {
        text: `${title.val()}, Rating: ${rating.val()} `,
      }).append($("<button>", { text: "X" }))
    );
  }
});

$("ul").on("click", "button", function () {
  $(this).closest("li").remove();
});
