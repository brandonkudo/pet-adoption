//back-end
function PetList() {
  this.list = [];
}
function Pet(name, type, breed, age, bio) {
  this.petname = name;
  this.petType = type;
  this.petBreed = breed;
  this.petAge = age;
  this.petBio = bio;
  this.petAdopted = false;
}


//front-end
$(document).ready(function(){

  $(function() {
    $(".adopted-yes, .adopted-no").click(function() {
      $("h4", this).toggleClass("hide");
      $("ul", this).toggleClass("hide");

  var newList = new PetList();
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var inputName = $("#input_name").val();
    var inputType = $("input:radio[name=input_type]:checked").val();
    var inputBreed = $("#input_breed").val();
    var inputAge = parseInt($("#input_age").val());
    var inputBio = $("#input_bio").val();

    var newPet = new Pet(inputName, inputType, inputBreed, inputAge, inputBio);
    console.log(newPet);

  });
});
