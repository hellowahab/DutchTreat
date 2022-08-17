$(document).ready(function () {
    console.log("First log in Console");
    var theForm = $("#theForm");
    //theForm.hide();
    /*
    var button = document.getElementById("buyButton");
    button.addEventListener("click", function () {
        console.log("Buying Item");
    });
    */

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("Click on the item " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");
    $loginToggle.on("click", function () {
        $popupForm.slideToggle(1000);
    });
});

