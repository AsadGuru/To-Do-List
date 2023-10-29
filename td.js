function $(x){
    switch (x[0]){
        case "#":
            var k=x.substr(1);
            return document.getElementById(k);
        case ".":
            var k=x.substr(1);
            return document.getElementsByClassName(k);
        default:
           return document.getElementsByTagName(x);
    }
}

alert("You can find some settings in the bottom-right corner.");

function copy(){
    if ($("#inp").value != ""){
        $("#messages").innerHTML+=`<div><p class="message">${$("#inp").value}</p> <span onclick="this.parentNode.remove()">x<span> </div>`;
        $("#inp").value="";
    }
    else{
        $("#inp").placeholder="Write something";
        setTimeout(function(){
            $("#inp").placeholder="Enter your text";
        }, 1500);
    }
}

function hue(){
    $("#all").style.filter=`hue-rotate(${$("#inp2").value}deg)`;
    for(k=0; k<$("span").length; k++){
        $("span")[k].style.filter=`hue-rotate(${-$("#inp2").value}deg)`;
    }
}

function hue2(){
    if ($("#inp2").value < 330){
        $("#inp2").value++;
        hue();
    }
    else{
        $("#inp2").value= 0;
    }
}

var an = 1;
var how;

function anim(){
    if (an == 1){
        how = setInterval(hue2,25);
        an = 0;
    }
    else{
        clearInterval(how);
        an = 1;
    }
}
