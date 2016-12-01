console.log("app sourced");
$(document).ready(function(){
console.log("jquery is here");

//start buy button
$("#buyApple").on("click", function(apple){
    console.log("The buy apple button was clicked.");
  var quantity = $("#quantityApple").val();
  console.log("This is quantity:", quantity);
  var price = $("#applePrice").html();
  console.log("This is the Apple Price:", price);
  var calcPrice = quantity * price;
  console.log("Total Price: ", calcPrice);
  $("#totalPriceApple").text(calcPrice);
//end calc function
});//end buy button
});//end jquery


// Need to display to outputBasket can hard code fruits, but need to output quantity  
