var counter=1;
var likecounter=1;
function commenthere() {
    let tush = document.querySelector('#id1').value;
    const newEle= document.createElement('div');
    newEle.textContent= tush;

    newEle.style.background = "royalblue"; 
  newEle.style.color = "white";
  newEle.style.margin = "4px";

  const commentbox= document.querySelector('#commentbox');
  commentbox.insertBefore(newEle, commentbox.firstChild);

  document.querySelector('#id1').value=" ";
}

function Likehere() {
    likecounter++;
document.querySelector('#likeid').innerHTML="Like" + likecounter;
}