console.log('Loaded!');
//text-changing
var element=document.getElementById('main-text');

element.innerHTML = 'New Value';

//image move
var img = document.getElementById('move');
img.onclick = function () {
    img.style.marginLeft= '100px' ;
};
