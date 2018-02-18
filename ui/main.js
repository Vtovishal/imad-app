console.log('Loaded!');
//text-changing
var element=document.getElementById("main-text");

element.innerHTML = 'New Value';

//image move
var img = document.getElementById("move");
function moveRight(){
    marginLeft=marginLeft+  10;
    img.style.marginLeft=marginLeft + 'px';
}

img.onclick = function () {
   var interval = setInterval(moveRight,100)
  //  img.style.marginLeft= '100px' ;
};
