// div要素を格納する配列
divs = [];

window.onload = function(){
    
    var parent = document.getElementById('parent');

    //div要素を追加
    for (i = 0; i < 5; i++){
        var div = document.createElement('div');
        div.index = i;
        div.textContent = 'No. ' + i;
        div.className = 'child';
        // click時
        div.onclick = myClick;
        parent.appendChild(div);
        // 配列に追加
        divs.push(div); 
    }
}

// クリック時の処理
function myClick(e){
    
    // クリックされた要素のindex
    var i = e.target.index;
    console.log(i);
    
    // 配列divsを利用してtextContentを取得
    var str = divs[i].textContent;
    console.log((str)); 
}