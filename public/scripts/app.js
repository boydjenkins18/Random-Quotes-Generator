$(".getQuote").on("click", () => {
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", a => {
    let num = Math.floor(Math.random() * 79);
    $("#quote").text('"' + a[num].quote + '"');
    $("#author").text("- " + a[num].author);
    $(".getQuote").text("Generate");
    $("#tweet").show();
    $("#facebook").show();
  });
  //   Random Colors
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "rgba(" + r + "," + g + "," + b + ",0.5)";

  $("body").css("background", color);
});

// Social Media share
$("#tweet").on("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
    $("#quote").text() +
    " " +
    $("#author").text()
  );
});

$("#facebook").on("click", () => {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=https%3A//codepen.io/boydjenkins18/full/KvvNaR/"
  );
});
