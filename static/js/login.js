function login_targets(){
  //select boxから値を取得
  const lt = document.form1.login_target;
	const num = lt.selectedIndex;
	const str = lt.options[num].value;

  //既に入力画面がある場合初期化
  document.getElementById('login_menu').innerHTML = " ";

  //値で分岐
  if(str == "student"){
    document.getElementById('login_menu').innerHTML = '<br>クラスID:<input type="text">'
  }else if(str == "teacher"){

  }
}