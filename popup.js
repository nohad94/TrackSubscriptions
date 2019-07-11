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
  location.reload();
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
  '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="alert">' + ' <div class="alert" id="'+ list[i][0] + 'alert"> <img src="images/white (20x20).jpg" alt="whitealert">' + '</div></div></div></div>'
};

console.log(localStorage); 

for (i=0; i<len; i++){
  const _MS_PER_DAY = 1000*60*60*24;

  var a = new Date(); // current date
  var b = new Date(list[i][4] + "-" + list[i][2] + "-" +  list[i][3]); // end of sub date

  var timediff = (b-a)/_MS_PER_DAY;
  console.log(timediff + " " + list[i][0] + " " + a + " " + b);

  if (timediff > 14) {
    document.getElementById(list[i][0] + 'alert').innerHTML = '<img src="images/white (20x20).jpg" alt="whitealert">'
  };
  
  if (timediff <= 14 && timediff > 7) {
    document.getElementById(list[i][0] + 'alert').innerHTML = '<img src="images/yellow (20x20).jpg" alt="whitealert">'
  };
  
  if (timediff <= 7 && timediff >=3) {
    document.getElementById(list[i][0] + 'alert').innerHTML = '<img src="images/orange (20x20).jpg" alt="whitealert">'
  }; 

  if (timediff < 3 && timediff > -1) {
    document.getElementById(list[i][0] + 'alert').innerHTML = '<img src="images/red (20x20).jpg" alt="whitealert">'
  };

  if (timediff <= -1){
    var name = list[i][0]

    if (list[i][2] == 'Jan'){
      list[i][2] = 'Feb';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Feb'){
      list[i][2] = 'Mar';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Mar'){
      list[i][2] = 'Apr';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Apr'){
      list[i][2] = 'May';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'May'){
      list[i][2] = 'Jun';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Jun'){
      list[i][2] = 'Jul';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Jul'){
      list[i][2] = 'Aug';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Aug'){
      list[i][2] = 'Sep';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Sep'){
      list[i][2] = 'Oct';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Oct'){
      list[i][2] = 'Nov';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Nov'){
      list[i][2] = 'Dec';
      localStorage.setItem(name, list[i].join(" "));
    }
    else if (list[i][2] == 'Dec'){
      list[i][2] = 'Jan';
      localStorage.setItem(name, list[i].join(" "));
    };
  }

};


