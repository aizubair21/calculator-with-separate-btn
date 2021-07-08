
var inp1 = document.getElementById('input1').value;
var inp2 = document.getElementById('input2').value;
var minus = inp1-inp2;
var plus = parseInt(inp1)+parseInt(inp2);
var mult = inp1*inp2;
var div = inp1/inp2;



function toPuls(){
    document.getElementById('result').innerHTML = inp1 + " + " + inp2 + " = " + plus;
};

function toMinus(){
    document.getElementById('result').innerHTML = inp1 + " - " + inp2 + " = " + minus;
};

function toMult(){
    document.getElementById('result').innerHTML = inp1 + " X " + inp2 + " = " + mult;
};

function toDiv(){
    document.getElementById('result').innerHTML = inp1 + " / " + inp2 + " = " + div;
};

$(".btn1").click(function(){
    $("#result").text(inp1 + " + " + inp2 + " = " + plus);
});

$(".btn3").click(function(){
    $("#result").text(inp1 + " X " + inp2 + " = " + mult);
});

$(".btn4").click(function(){
    $("#result").text(inp1 + " / " + inp2 + " = " + div);
});
