function showFullName(){
   // DOM API Method to getElementById
   var firstName = document.getElementById("first");
   var lastName = document.getElementById("last");
   //console.log(firstName.value + " " + lastName.value);

   var first_name = firstName.value;
   var last_name = lastName.value;

   var fullName = document.getElementById("fullname");
   fullName.value = getFullName(first_name , last_name);
}

function getFullName(first, last){
  /* // DOM API Method to getElementById
   var firstName = document.getElementById("first");
   var lastName = document.getElementById("last");
   //console.log(firstName.value + " " + lastName.value);

   var first = firstName.value;
   var last = lastName.value;
   
   var fullName = document.getElementById("fullname");*/
   return first + " " + last;
   //console.log(firstName.value + " " + lastName.value);
}