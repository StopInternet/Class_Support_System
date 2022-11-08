//定義
var classMem = 0;
const div = document.createElement('div');
const sizes = document.getElement('sizes');
const sekidiv = document.getElementById("sekigae");

//連想配列
var name={
}
function addInput(counts){
    
    if(!sekidiv.hasChildNodes()){
        const sek = document.createElement("div");
        sek.setAttribute("class",counts);
        sekidiv.appendChild(sek);
    }
}

function MasGene(){
    const tate = document.getElementById("tate").value;
    const yoko = document.getElementById("yoko").value;
    classMem = tate*yoko;

    count = prompt("何名分を入力しますか？");
    for(var i=1;i<=count;i++){
        name = 
    }
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    //divに登録
    document.getElementById('lists').appendChild(table);
    //生成(最上位)
    let song_name = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "譜面一覧";
    song_name.appendChild(heading_1);
    thead.appendChild(song_name);

    
    //二段目以降
    for(var i = 1; i <= Object.keys(songs).length;i++){
    let namei = document.createElement('tr');
    let i_data = document.createElement('td');
    i_data.innerHTML = i+" : "+songs[i];
    namei.appendChild(i_data);
    tbody.appendChild(namei);
    }
}