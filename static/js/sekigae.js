//定義
var classMem = 0;

//データ配列
const app = newVue({
    el:'#app',
    data:{
        name:[
        ]
    }
})

const Mess = {
    data(){
    return{
        message:0
    }
    },
    mounted(){
        setInterval(() =>{
            this.counter++
        },1000)
    },
    delimiters:['[[',']]']
}

Vue.createApp(Mess).mount("#two-way-binding")

function MasGene(){
    classMem = "tate"+"yoko"
    for(const i = 1;i<=classMem;i++){
        var div = document.createElement('div');
        div.className = 'sek';
        document.getElementsById('wrapper').appendChild(div);
    }
}