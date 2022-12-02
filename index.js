$(".number").click(function(event){
  $("#result").text("You selected " + this.textContent + " out of 5");
  console.log(this.textContent);
})

$(".submit-btn").click(function(event){
  $(".rating").fadeOut(100);
  $(".thank-you-state").fadeIn(100);
})
