console.log("working");

var ht = document.getElementsByClassName("helptext");
function displayht(i){
  ht[i].style.display="block";
}
function displayhtoff(i){
  ht[i].style.display="none";
}
const input_fields = {
  fname: /^([a-zA-Z]+)$/i,
  lname: /^([a-zA-Z]+)$/i,
  uname: /^([a-zA-Z\d-_\.]+)$/,
  phone: /^\d{10}$/,
  email: /^([a-zA-Z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  pword: /^[#\w@_-]{8}$/
}
const validate = (field, regex) => {
  regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}
const keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
  'keyup', e => {
  validate(e.target, input_fields[e.target.attributes.name.value])
  }
));

function check(){
  var count=0;
  keys.forEach(item => {
    if(item.className=="invalid"){
    count=count+1;
    item.focus();
  }
  });
  keys.forEach(item => {
    if(item.value==""){
    count=count+1;
    item.focus();
  }
  });
  if(count!=0){
    window.alert("invalid entry :(");
  }
  else{
    window.alert("You are a part of family now ;)")
  }
}
