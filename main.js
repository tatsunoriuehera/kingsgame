function kingsSaid(){
  var orders=[
    'panch',
    'kick',
    'dance',
    'drink',
    'eat',
    'sleep'
  ];

  var order=orders[Math.floor(Math.random()*orders.length)];

  var num=document.getElementById('num').value;
  if(num<2){
    alert('not liking!more members!');
    document.getElementById('num').focus();
  }else{
    var p1=Math.floor(Math.random()*(num))+1;
    var p2;

  //重複を避ける
    do{
      p2=Math.floor(Math.random()*(num))+1;
    }while(p1==p2);
    document.getElementById('result').innerHTML =p1+'from'+p2+'to'+order;
  }
}
