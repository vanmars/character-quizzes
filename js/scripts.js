
//  Business Logic
  // Hogwarts 
function harry (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3) === 1) {
    return true
  }
}
function hermione (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3) === 2) {
    return true
  };
};
function ron (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3) === 3) {
    return true
  };
};

  // Marvel
  function spiderman (num1, num2, num3) {
    if (Math.round((num1 + num2 + num3)/3) === 1) {
      return true
    };
  };
  function thor (num1, num2, num3) {
    if (Math.round((num1 + num2 + num3)/3) === 2) {
      return true
    };
  };
  function hulk (num1, num2, num3) {
    if (Math.round((num1 + num2 + num3)/3) === 3) {
      return true
    };
  };


// User Interface Logic
$(document).ready(function () {
  // Franchise Click Event
  $("#franchiseForm").submit(function(event){
    event.preventDefault();
    const franchiseInput = $("input:radio[name=franchise]:checked").val();

    if(franchiseInput === "Marvel"){
      $("#marvelForm").show()
      $("#franchiseForm").hide()
    } else {
      $("#hogwartsForm").show()
      $("#franchiseForm").hide()
    };
  });

  
  // Hogwarts Click Event
  $("#hogwartsForm").submit(function (event) {
    event.preventDefault();
    const pastimesInput = parseInt($("#pastimes").val()); 
    const adjectiveInput = parseInt($("#adjective").val()); 
    const subjectInput = parseInt($("#subject").val()); 

    if (harry(pastimesInput, adjectiveInput, subjectInput)) {
      $("#result").html("<p>You are Harry!</p><br><img src='img/harry.jpg'>");
    } else if (hermione(pastimesInput, adjectiveInput, subjectInput)) {
      $("#result").html("<p>You are Hermione!</p><br><img src='img/hermione.jpg'>");
    } else if (ron(pastimesInput, adjectiveInput, subjectInput)) {
      $("#result").html("<p>You are Ron!</p><br><img src='img/ron.jpg'>");
    } else {
      $("#result").html("<p>You are Draco!</p><br><img src='img/draco.png'>");
    };
  });

  // Marvel Click Event
});



