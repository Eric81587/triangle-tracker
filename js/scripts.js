
$(document).ready(function(){
  $("form#form-1").submit(function(event){
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      if (side1 === side2 && side2 == side3) {
        $("#equilateral").show();
      } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        $("#isosceles").show();
      } else {
        $("#scalene").show();
      }
    } else alert("Not a triangle!");
      
    

    
      
      event.preventDefault();

  });
});



