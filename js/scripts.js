//back-end
function PetList() {
  this.list = [];
}
function Pet(name, type, breed, age, bio) {
  this.petName = name;
  this.petType = type;
  this.petBreed = breed;
  this.petAge = age;
  this.petBio = bio;
  this.petAdopted = false;
}

Pet.prototype.displayNewPet = function() {
                       return '<div class="well adopted-no">' +
                                '<h4>' + this.petName + '</h4>' +
                                '<ul class="hide" style="list-style-type:none">' +
                                  '<li>Name: ' + this.petName + '</li>' +
                                  '<li>Animal:' + this.petType + '</li>' +
                                  '<li>Breed: ' + this.petBreed + '</li>' +
                                  '<li>Age: ' + this.petAge + '</li>' +
                                  '<li>Bio: ' + this.petBio + '</li>' +
                                  '<li><b>This animal is available for adoption!</b></li>' +
                                '</ul>' +
                              '</div>'
}


//front-end
$(document).ready(function(){

  $(".adopted-yes, .adopted-no").click(function() {
    $("h4", this).toggleClass("hide");
    $("ul", this).toggleClass("hide");
  });

  var newList = new PetList();
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var inputName = $("#input_name").val();
    var inputType = $("input:radio[name=input_type]:checked").val();
    var inputBreed = $("#input_breed").val();
    var inputAge = parseInt($("#input_age").val());
    var inputBio = $("#input_bio").val();

    var newPet = new Pet(inputName, inputType, inputBreed, inputAge, inputBio);
    $(".no-pets").append(newPet.displayNewPet());

    $(".adopted-no").last().click(function() {
      $("h4", this).toggleClass("hide");
      $("ul", this).toggleClass("hide");
    });


  });
});
