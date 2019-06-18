var form = document.getElementById('product-sub-form');


// localStorage.clear();

form.onsubmit = function(event){
  event.preventDefault();

  var name = form.productname.value;
  var namesplit = name.split(" ")
  var namejoin = namesplit.join('-')
  var date = new Date(form.enddate.value);
  console.log(date);

  var correcteddate = new Date(date.getTime() - date.getTimezoneOffset()* -60000);
  console.log(correcteddate);

  localStorage.setItem(namejoin, namejoin + " " + correcteddate)
};

// var erasebutton = document.getElementById('eraseall');

// erasebutton.onclick = function(event){
//   event.preventDefault();

//   localStorage.clear();

//   console.log(localStorage);
// };

var removeform = document.getElementById('removeform');

removeform.onsubmit = function(event){
  event.preventDefault;

  var name = removeform.nameremove.value;
  var namesplit = name.split(" ")
  var namejoin = namesplit.join('-')

  localStorage.removeItem(namejoin);
  console.log(namejoin)
};

var len = localStorage.length;
var list = [];

for (i=0; i <len; i++){
  list.push(localStorage.getItem(localStorage.key(i)).split(" "));
};

for (i=0; i<len; i++){
  document.getElementById('product').innerHTML += ' <div class="container inner"> <div class="row"> \n <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="logo">' + list[i][0] + ' </div>' + '\n' +
  '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="date">' + list[i][3] + "-" + list[i][2] + "-" + list[i][4] + '</div>' + '\n' + 
  '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="alert">' + '<img src="images/white (20x20).jpg" alt="white=alert">' + '</div></div></div>'
};

console.log(localStorage);

// for (i=0; i<len; i++){

// };

