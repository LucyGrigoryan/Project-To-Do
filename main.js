let myNodeList=document.getElementsByTagName("LI");
let i;
for(i=0;i<myNodeList.length;i++){
    let span=document.createElement("SPAN");
    span.className="close"
    let text=document.createTextNode("\u00D7");
    span.appendChild(text);
    myNodeList[i].appendChild(span);    

}
let close=document.getElementsByClassName("close");
for(let i=0;i<close.length;i++){
    close[i].onclick=function(){
        let div=this.parentElement;
        div.style.display="none";
    }
}

function newElement(){
    debugger
    let li=document.createElement("LI");
    let inputValue=document.getElementById("myInput").value;
    let txt=document.createTextNode(inputValue);
    li.appendChild(txt);
    if(inputValue===""){
        alert("You must write smt")
    } else {
        document.getElementById("myUl").appendChild(li);
    }

document.getElementById("myInput").value="";

let span = document.createElement("SPAN");
let t = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(t);
li.appendChild(span);
let close=document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    }
}
}



