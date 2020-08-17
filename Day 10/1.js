let counter=0;

let likeMe= function (btnElement){
    console.log(btnElement);
counter++;
btnElement.innerHTML= "Like " + counter;
};