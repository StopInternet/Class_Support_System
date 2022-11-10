//定義
clicked = false;
tate = 0;
yoko = 0;
classMem = tate*yoko;
inputs_seki = new Array(classMem);
names_list = new Array(classMem);
students_name = {

}

/**
 * 連想配列に挿入
 * 連想配列をランダムに入れ替える。
 * それをtableに出力させる。
 * マスもきちんと設定する
 */
function MasGene(){
    if(clicked!=true){
    tate = document.getElementById("tate").value;
    yoko = document.getElementById("yoko").value;
    classMem = tate*yoko;

    for(var i=1;i<=classMem;i++){
        //idとclassを振り分けたinput情報を配列に入力
        inputs_seki.push(i+'人目:<input type="text" id="seki_'+i+'"maxlength="16" value=" "><br>');
    }
    //joinで一括展開
    document.getElementById("seki_list").innerHTML = inputs_seki.join('');
    clicked = true;

    //テーブルの生成
    let table = document.createElement('table');
    table.setAttribute('border','2')
    table.setAttribute('id','seki_model');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id','seki_model_body');
    table.appendChild(thead);
    table.appendChild(tbody);

    //divに登録
    document.getElementById('seki_out').appendChild(table);
    
    var counter = 1;
    for(var r=1;r<=tate;r++){
        let nameis = document.createElement('tr');
        for(var j=1;j<=yoko;j++){
            let j_data = document.createElement('td');
            j_data.innerHTML = counter;
            nameis.appendChild(j_data);
            counter++;
        }
        tbody.appendChild(nameis);
    }
}
}


function Shuffle(){
    for(var i=1;i<=classMem;i++){
        //生徒名を連想配列に挿入
        if(document.getElementById("seki_"+i).value == " "){
            //空欄だった場合、空席を挿入
            students_name[i] = "空席"
        }else{
            //入力済みの場合、生徒名を挿入
            students_name[i] = document.getElementById("seki_"+i).value;
        }
    }

    //シャッフル処理
    function random_apps(classMem2){
        for(var i = classMem2; 1 <= i; i--){
            // 0〜(i+1)の範囲で値を取得
            var r = 1 + Math.floor(Math.random()*i);
            // 要素の並び替えを実行
            var tmp = students_name[i];
            students_name[i] = students_name[r];
            students_name[r] = tmp;
          }
          return students_name;
    }

    //tbodyの初期化
    function clearTbody(){
        var tbodies = document.getElementsByTagName("tbody");
        for(var i = 0; i<tbodies.length;i++){
            while(tbodies){
                tbodies[i].deleteRow(0);
            }
        }
    }
    //テーブルの生成
    let table = document.createElement('table');
    table.setAttribute('border','2')
    table.setAttribute('id','seki_table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id','seki_body');
    table.appendChild(thead);
    table.appendChild(tbody);

    //divに登録
    document.getElementById('seki_out').appendChild(table);
    var count = 1;
    //ランダムを起動
    random_apps(classMem);
    for(var k = 1; k<=tate; k++){
        let namei = document.createElement('tr');
        for(var i = 1; i <= yoko;i++){
            let i_data = document.createElement('td');
            i_data.innerHTML = students_name[count];
            namei.appendChild(i_data);
            count++;
        }
    tbody.appendChild(namei);
  }
}