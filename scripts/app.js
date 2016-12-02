console.log("app sourced");
$(document).ready(function(){
console.log("jquery is here");

//start buy Apple button
$("#buyApple").on("click", function apple(){
    console.log("The buy apple button was clicked.");
  // var quantity = $("#quantityApple").val();
  // console.log("This is quantity:", quantity);
  var price = $("#applePrice").html();
  console.log("This is the Apple Price:", price);
  var calcPrice = quantity * price;
  console.log("Total Price: ",calcPrice);
  $("#totalPriceApple").text(calcPrice);
//end calc function
});//end buy Apple button

console.log("Apple function:", apple());
//start buy Orange button
$("#buyOrange").on("click", function orange(){
    console.log("The buy orange button was clicked.");
  var quantity = $("#quantityOrange").val();
  console.log("This is quantity:", quantity);
  var price = $("#orangePrice").html();
  console.log("This is the Orange Price:", price);
  var calcPrice = quantity * price;
  console.log("Total Price: ",calcPrice);
  $("#totalPriceOrange").text(calcPrice);
//end calc function
});//end buy Orange button

//start buy Banana button
$("#buyBanana").on("click", function banana(){
    console.log("The buy bananas button was clicked.");
  var quantity = $("#quantityBanana").val();
  console.log("This is quantity:", quantity);
  var price = $("#bananaPrice").html();
  console.log("This is the Banana Price:", price);
  var calcPrice = quantity * price;
  console.log("Total Price: ",calcPrice);
  $("#totalPriceBanana").text(calcPrice);
//end calc function
});//end buy Banana button

//start buy Grape button
$("#buyGrape").on("click", function grape(){
    console.log("The buy grape button was clicked.");
  var quantity = $("#quantityGrape").val();
  console.log("This is quantity:", quantity);
  var price = $("#grapePrice").html();
  console.log("This is the Grape Price:", price);
  var calcPrice = quantity * price;
  console.log("Total Price: ",calcPrice);
  $("#totalPriceGrape").text(calcPrice);
//end calc function
});//end buy Grape button

//add results  for Total Category:

// var calcTotal= apple + orange + banana + grape;
// var calTotal = function() {
//     var total = 0;
//     $(".subtotal").each(function () {
//         total += parseFloat($(this).val() || 0);
//     });
//     $("#totalPriceAll").val(total);
//   };

  // var calcTotal= apple() + orange() + banana() + grape();
  // console.log(calcTotal);

// $("#checkout").on("click", function(){
//     console.log("The checkout button was clicked");
//   var apple=  apple();
//   var orange= orange();
//   var banana= banana();
//   var grape= grape();
//   var calcTotal= apple + orange + banana + grape;
//   console.log("Total Price: ",calcTotal);
//   $("#totalPriceAll").text(calcTotal);
// });

});//end jquery


// Need to display to outputBasket can hard code fruits, but need to output quantity
