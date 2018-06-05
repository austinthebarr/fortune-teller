$(function(){
  $("form#fortune-survey").submit(function(event){
    event.preventDefault()

     var userUnLucky = [];
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unLuckyThings = $(this).val();
      userUnLucky.push(unLuckyThings);
    });

    // $("#fun-responses").show();
    var userLucky = [];
     $("input:checkbox[name=lucky]:checked").each(function(){
      var luckyThings = $(this).val();
      userLucky.push(luckyThings);
    });

    if (userLucky.length > userUnLucky.length) {
      $("#response").text("You are: LUCKY, but you will still die one day.");
    }
    else {
      $("#response").text("You are: UNLUCKY, and you will die one day.")
       }

    $('#fortune-survey').hide();
  });
});
