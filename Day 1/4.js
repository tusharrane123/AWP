var counter=1;
var likecounter=1;

function commenthere() {
    let tush= document.createElement("div");
    tush.textContent="comment" + counter;
     
    tush.style.background="royalblue";
    tush.style.color="black";
    tush.style.margin="8px";
    tush.style.padding="5px";

    let commmentbox=document.querySelector('#commentbox');
    commmentbox.appendChild(tush);
    counter++;

}
function Likehere() {
    likecounter++;
document.querySelector('#likeid').innerHTML="Like" + likecounter;
}