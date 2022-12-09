
//検索機能
function search(){
  Resets()
  search_hit =document.getElementById("search-text").value
  hitter = document.getElementById("Toi_"+search_hit)
  if(hitter != null ){
    hitter.style.display ='block'
  }else{
    alert("検索結果はありません。")
  }
}

function Resets(){
  Totals = document.querySelectorAll('.Total');
  for(var i=1;i<=Totals[9].value;i++){
      document.getElementById("Toi_"+i).style.display = 'none'; 
  }
}
