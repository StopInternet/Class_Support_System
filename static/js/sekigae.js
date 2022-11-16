//定義
clicked = false;//クリック判定
tate = 0; //縦の列の取得
yoko = 0; //横の列の取得
classMem = tate*yoko;//席数の取得
inputs_seki = [null];//席数を挿入
names_list = [];
search_seki = [];
no_shuffle_student = {
}
students_name = {
};
no_shuffle_target ={
}//シャフル対象外の多次元配列
lock_targets = 0;
lists_num = 0;
counters = 0;
count_tag = 0;
nametxt_input = [

]
/**
 * 連想配列に挿入
 * 連想配列をランダムに入れ替える。
 * それをtableに出力させる。
 * マスもきちんと設定する
 * エクセルファイルを読み込めるようにする。
 */
function MasGene(){
    if(clicked!=true){
    tate = document.getElementById("tate").value;
    yoko = document.getElementById("yoko").value;
    classMem = tate*yoko;

    //説明文の追加
    document.getElementById("seki_dec").innerHTML = "名前を入力してください<br>空欄の箇所は「空席」として、<br>表示されます。<br>最大席数："+classMem+"席";

    //入力欄の生成処理
    for(var i=1;i<=classMem;i++){
        //idとclassを振り分けたinput情報を配列に入力
        inputs_seki.push('<div id="sekis_'+i+'">'+String(i).padStart(3,'0')+'  :'+
        '<input type="text" id="seki_'+i+'"maxlength="16" size="12" value=" ">'+
        '</div>');
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
    //二回クリックしたとき
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
            no_shuffle_student[i] = "空席"
        }else{
            //入力済みの場合、生徒名を挿入
            students_name[i] = document.getElementById("seki_"+i).value;
            no_shuffle_student[i] = document.getElementById("seki_"+i).value;
        }
    }

    //シャッフル処理
    function random_apps(classMem2){
        count_tag = 0;
        for(var i = classMem2; 1 <= i; i--){
            count_tag++;
            var the_target = document.getElementById("seki_"+i);
            // 0〜(i+1)の範囲で値を取得
            var r = 1 + Math.floor(Math.random()*i);
            if(no_shuffle_target[r] != null){
                continue;
            }
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
                i_data.innerHTML = "&nbsp&nbsp"+students_name[count]+"&nbsp"
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
    //席を生成済みかどうかを検知
    try{
        if(clicked == true){
            document.getElementById("the_result").innerHTML = " "
            for(var i=1;i<=classMem;i++){
                document.getElementById("sekis_"+i).style.display = 'block'; 
            }
            //検索対象を取得
            var search_target = document.getElementById("search-text").value;
            counters = 0;
            if(search_target == String){
                alert("文字型で入力を行ってください。")
            }
            //検索処理
            for(var i=1;i<=search_target;i++){
                counters++;
                sekis_other = search_target + i;
                if(counters == search_target){
            //検索結果を表示
            document.getElementById("the_result").innerHTML = "検索結果：";
            break;
        }else if(classMem < search_target){
            document.getElementById("the_result").innerHTML = "<span>検索結果：<br>その座席番号はありません。</span>"
            break;
        }
        document.getElementById("sekis_"+i).style.display = 'none';
    }
}else{
    //席モデルを生成していない場合。
    alert('座席モデルを生成してからクリックしてください。')}}
    catch(e){
        alert(e+"エラーが発生しました。\n不具合として報告をお願いします。");
    }
}

//検索履歴のリセット処理
function Resets(){
    for(var i=1;i<=classMem;i++){
        document.getElementById("sekis_"+i).style.display = 'block'; 
    }
    document.getElementById("search-text").value = " ";
    document.getElementById("the_result").innerHTML = " ";
}

//ファイル出力処理
function out_put(){
    if(clicked == true){
    namelists = [];
    //入力値を配列に出力
    //namelists.push("id")
    for(var i=1;i<=classMem;i++){
        namelists.push(document.getElementById('seki_'+i).value);
    }
    //csvに展開
    var content  = namelists.join('\n');
    //csvの生成
    var mimeType = 'text/plain';
    var name     = 'name_list.text';
    var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
    var blob = new Blob([bom, content], {type : mimeType});
    var named = document.createElement('named');
    named.download = name;
    named.target   = '_blank';
    
    //ダウンロード処理（ブラウザごとに違う）
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, name)
    }else if (window.URL && window.URL.createObjectURL) {
        named.href = window.URL.createObjectURL(blob);
        document.body.appendChild(a);
        named.click();
        document.body.removeChild(a);
    }else if (window.webkitURL && window.webkitURL.createObject) {
        named.href = window.webkitURL.createObjectURL(blob);
        named.click();
    }else {
        window.open('data:' + mimeType + ';base64,' + window.Base64.encode(content), '_blank');
    }
}else{
    alert('座席モデルを生成してからクリックしてください。')
}
}

function change_csv(){
    var obj1 = document.getElementById("file_input");
    counter_txt = 0;
    list_num = 1;
    str_m = -1;
    obj1.addEventListener("change",function(evt){
        var file = evt.target.files;
        var reader = new FileReader();
        reader.readAsText(file[0]);
        reader.onload = function(ev){
            for(var g=0;g<=reader.result.length;g++){
                if(reader.result[g] != ' '){
                    counter_txt++
                }else{
                    if(counter_txt != 0){
                        for(var y=1;y<=counter_txt;y++){
                            nametxt_input[list_num] = reader.result[str_m];
                            str_m++
                    }
                    counter_txt = 0;
                }
                str_m++;
            }
        }
            for(var h=1;h<=classMem;h++){
            document.getElementById("seki_"+h).value = nametxt_input[h]
            }
  }
},false);

}