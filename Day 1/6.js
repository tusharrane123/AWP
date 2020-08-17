var likecounter=1;

function commenthere() {
    let tush=document.querySelector('#id1').value;

    const newEle= document.querySelector('#refid').cloneNode(true);

    newEle.removeAttribute("id");
    newEle.style.visibility = "visible";
  newEle.children[0].innerHTML = tush;

  const commentbox=document.querySelector('#commentbox');
  commentbox.insertBefore(newEle,commentbox.firstChild);

  document.querySelector('#id1').value=" ";

}

function deleteComment(btnElement) {
  btnElement.parentElement.remove();
}

function Likehere() {
    likecounter++;
document.querySelector('#likeid').innerHTML="Like" + likecounter;
}