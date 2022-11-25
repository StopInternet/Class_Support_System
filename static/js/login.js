function login_students(){
    document.getElementById('login_menu').innerHTML = 
    '<br>クラスID:<br><input type="text">'+
    '<br>生徒番号:<br><input type="text">'+
    '<br><hr><input type="button" id="jump_login" value="ログイン" onclick="login_student()">'
}

function login_teachers(){
  document.getElementById('login_menu').innerHTML = 
  '<br>教員ID:<br><input type="text">'+
  '<br>パスワード:<br><input type="text">'+
  '<br><hr><input type="button" id="jump_login" value="ログイン" onclick="login_teacher()">'
}

