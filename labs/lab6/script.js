$(document).ready(function() {
    var button = $("#button_change");
  
    $(button).click(function() {
      var inputValue = $("#input_color").val();
      var elements = $(".cow_color");
  
      $(elements).each(function() {
        $(this).text(inputValue);
      });
    });
  });
  