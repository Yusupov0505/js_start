function checkForm(el) {

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var mail = el.mail.value;

    var fail = "";

  if(name == "" || mail == "" || pass == "" || repass == "")
   fail = "Заполните все поля!";
  else if(name.length <= 1 || name.length > 20)
   fail = "Введите корректное имя";
  else if(pass != repass)
   fail = "Пароли не совападають";
  else if(pass.split(".").length > 1)
   fail = "Некорректный пароль";

  if(fail != "") {
   document.getElementById('error').innerHTML = fail;

   return false;
 } 
  else {
   alert("Все данные корректно заполнены")
   return true;
 } 
}