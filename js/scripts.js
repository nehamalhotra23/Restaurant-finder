$(document).ready(function() {
  $("#submit").click(function() {
    var restrict = $("#que1").val();
    $(".card").hide();
    if (restrict === "veg") {
      $(".veg").show();
    } else if (restrict === "glut") {
      $(".glut").show();
    } else if (restrict === "omni") {
      $(".omni").show();
    } else {
      alert('please select dietery preference');
    }
  });
  $("#submit").click(function() {
    var continent = $("#que2").val();
    if (continent === "Eu") {
      $(".Eu").show();
    } else if (continent === "As") {
      $(".As").show();
    } else if (continent === "Af") {
      $(".Af").show();
    } else if (continent === "SA") {
      $(".SA").show();
    } else {
      alert('Please select one of our given options');
    }
  });

  $("#submit").click(function() {
    var expense = $("#que3").val();
    if (expense === "small") {
      $(".small").show();
    } else if (expense === "medium") {
      $(".medium").show();
    } else if (expense === "large") {
      $(".large").show();
    } else {
      alert('Please select one of our given options');
    }

  });
});
