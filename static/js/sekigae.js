//定義
var clicked;

class sekigae_app{
    constructor(name) {
        this.name = name;
    }
    static getNames(){
        return this.name;
    }
}
function MasGene(){
    if(clicked!=true){
    //一度のみの入力を許可。
    //縦と横の取得
    tate = document.getElementById("tate").value;
    yoko = document.getElementById("yoko").value;
    classMem = tate*yoko;
    
    //配列の生成、席を生成。
    inputs_seki = new Array(classMem);
    for(var i=0;i<classMem;i++){
        //idとclassを振り分けたinput情報を配列に入力
        inputs_seki.push(
    '<input type="text" id="seki_'+i+'" class ="sekis_'+i+'"maxlength="16" value="null">');
    }
    //joinで一括展開
    document.getElementById("seki_list").innerHTML = inputs_seki.join('');
    clicked = true;
}
}

function Shuffle(){
    names_list = new Array(classMem);
    for(var i=0;i<classMem;i++){
        //names_list.push(document.getElementById("seki_"+i).value);
        const i = new sekigae_app(document.getElementById("seki_"+i).value);
    }
    c1.getNames();
}