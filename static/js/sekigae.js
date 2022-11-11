//定義
clicked = false;
tate = 0;
yoko = 0;
classMem = tate*yoko;
inputs_seki = [null];
names_list = [];
search_seki = [];
students_name = {
};
lists_num = 0;

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

    //説明文の追加
    document.getElementById("seki_dec").innerHTML = "名前を入力してください<br空欄の箇所は「空席」として、<br>表示されます。<br>";

    //入力欄の生成処理
    for(var i=1;i<=classMem;i++){
        //idとclassを振り分けたinput情報を配列に入力
        inputs_seki.push('<div id="sekis_'+i+'">'+String(i).padStart(3,'0')+'  :<input type="text" id="seki_'+i+'"maxlength="16" value=" "><br></div>');
    }
    //jonで一括展開
    document.getElementById("seki_list").innerHTML = inputs_seki.join('');
    clicked = true;

    //テーブルの生成
    let table = document.createElement('table');
    table.setAttribute('id','sekiTM');
    table.setAttribute('border','1');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id','seki_model_body');
    table.appendChild(thead);
    table.appendChild(tbody);

    //divに登録
    document.getElementById('seki_model').appendChild(table);
    
    var counter = 1;
    for(var r=1;r<=tate;r++){
        let nameis = document.createElement('tr');
        for(var j=1;j<=yoko;j++){
            let j_data = document.createElement('td');
            j_data.innerHTML = "&nbsp"+String(counter).padStart(3,'0')+"&nbsp";
            nameis.appendChild(j_data);
            counter++;
        }
        tbody.appendChild(nameis);
    }
}
else{
    alert('一度のみクリックができます。\n再設定したい場合は、\nページを再読み込みしてください。')
}
}

//シャッフルボタンの機能
function Shuffle(){
  if(clicked == true){
    if(document.getElementById("sekiTO") != null){
    document.getElementById("sekiTO").remove();
    }
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

    //テーブルの生成
    let table = document.createElement('table');
    table.setAttribute('id','sekiTO');
    table.setAttribute('border','1');
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
    //席替え後のテーブルを生成
    for(var k = 1; k<=tate; k++){
        let namei = document.createElement('tr');
        for(var i = 1; i <= yoko;i++){
            let i_data = document.createElement('td');
            i_data.innerHTML = "&nbsp&nbsp"+students_name[count]+"&nbsp&nbsp";
            namei.appendChild(i_data);
            count++;
        }
    tbody.appendChild(namei);
  }
}
else{
    //席モデルを生成していない場合。
    alert('座席モデルを生成してからクリックしてください。')
}
}

function search(){
    if(clicked == true){
    document.getElementById("search_result").innerHTML = "検索結果：";
    if(document.getElementById("search_result") != null){
        for(var k=1;k<=classMem;k++){
        $(document.getElementById("sekis_"+lists_num)).appendTo("#seki_list");
        }
    }

    var search_target = document.getElementById("search-text").value;
    //検索対象を取得
    var counters=0;
    lists_num = 0;
    for(var i=1;i<=search_target;i++){
        counters++
        lists_num++
        if(counters == search_target){
            $(document.getElementById("sekis_"+counters)).appendTo("#search_result");
        }else if(classMem < search_target){
            document.getElementById("search_result").innerHTML = "<span>検索結果：無し</span>"
            break;
        }
    }
}else{
    //席モデルを生成していない場合。
    alert('座席モデルを生成してからクリックしてください。')}
}