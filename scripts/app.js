console.log("app sourced");
$(document).ready(function(){
console.log("jquery is here");

var quantity=0;
// //start buy Apple button
$("#buyApple").click(function() {
    quantity++;
  console.log("This is quantity/number of clicks:", quantity);  //(need to make quantity = to number of clicks)
  var price = $("#applePrice").html();
  console.log("This is the Apple Price:", price);
  // var calcPrice = quantity * price;
  // console.log("Sub-Total Price: ",calcPrice);
  // $("#totalPriceApple").text(calcPrice);
  $("#totalPriceApple").html(quantity);
//end calc function
});//end buy Apple button

//start buy Orange button
$("#buyOrange").click(function() {
    quantity++;
  console.log("This is quantity/number of clicks:", quantity);  //(need to make quantity = to number of clicks)
  var price = $("#orangePrice").html();
  console.log("This is the Orange Price:", price);
  // var calcPrice = quantity * price;
  // console.log("Sub-Total Price: ",calcPrice);
  // $("#totalPriceOrange").text(calcPrice);
  $("#totalPriceOrange").html(quantity);
//end calc function
});//end buy Orange button

//start buy Banana button
$("#buyBanana").click(function() {
    quantity++;
  console.log(quantity);  //(need to make quantity = to number of clicks)
  var price = $("#bananaPrice").html();
  console.log("This is the Banana Price:", price);
  // var calcPrice = quantity * price;
  // console.log("Sub-Total Price: ",calcPrice);
  // $("#totalPriceBanana").text(calcPrice);
  $("#totalPriceBanana").html(quantity);
//end calc function
});//end buy Banana button

//start buy Grape button
$("#buyGrape").click(function() {
    quantity++;
  console.log("This is quantity/number of clicks:", quantity);  //(need to make quantity = to number of clicks)
  var price = $("#grapePrice").html();
  console.log("This is the Apple Price:", price);
  // var calcPrice = quantity * price;
  // console.log("Sub-Total Price: ",calcPrice);
  // $("#totalPriceGrape").text(calcPrice);
  $("#totalPriceGrape").html("My current count is: "+quantity);
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

});//end jquery
