//var
//タイマー
 var timer;
 var finish_time;
 var start_time;
 var count_time;
//表示用
 var canvas = document.getElementById("canvas");
 var context = canvas.getContext("2d");
//設定値
 var min;
 var sec;

 //途中経過音の設定
 const KeikaSound = new Audio('../../../static/sounds/keika_sounds.mp3');
 
 //タイムアップサウンドの指定
 const FinishSound = new Audio('../../../static/sounds/finish_sounds.mp3')

//タイマー読み込み時に表示[00:00]
window.onload = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "200px 'ＭＳ ゴシック'";
  context.fillStyle = "#000000";
  context.fillText("40:00", 150, 275);
  
}


//分を秒に変換する機能
function sumSec(m1,m2){
  min = document.getElementById(m1).value;
  sec = document.getElementById(m2).value;
  min = checkstr(min);
  sec = checkstr(sec);
  sum = parseInt(min, 10) * 60 + parseInt(sec, 10);
  if(sum == 0){
    return -5;
  }
  return sum;
}

//開始処理
function setTime(){
 count_time = [

];
  finish_time = 2400;
  count_time.push(1800);
  count_time.push(1200);
  count_time.push(600);

  start_time = new Date();
    
  //タイマーが既に動いていた場合、ストップをする
  if(timer){
    stop();
  }
  
  timer = setInterval('countdown()', 1000);
}

//停止処理
function stop(){
  clearInterval(timer); 
}
  
//数値が0から9であるかのチェック
function checkstr(str){
  if(str.match(/[^0-9]/) || str === ""){
    return 0;
  }
  return str;
}
  
// カウントダウン
function countdown(){
  now = new Date();
  diff_time = now - start_time;
    
  count = parseInt(finish_time - diff_time / 1000);
  
  c_min = parseInt(count / 60, 10);
  c_sec = parseInt(count % 60, 10);
    
  showTime(c_min, c_sec);
    
  // タイムアップ
  if(count <= 0){
    FinishSound.play();
    stop();
  }

  //途中経過
  if(count == count_time[0]||
     count == count_time[1]||
     count == count_time[2]){
     KeikaSound.play();
  }
}

// 時刻表示
function showTime(min, sec){
  var text = ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "200px 'ＭＳ ゴシック'";
  context.fillStyle = "#000000";
  context.fillText(text, 150, 275);
}
