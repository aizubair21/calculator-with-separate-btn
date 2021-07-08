
var inp1 = $("#input1").val();
var inp2 = $("#input2").val();
var minus = inp1-inp2;
var plus = parseInt(inp1)+parseInt(inp2);
var mult = inp1*inp2;
var div = inp1/inp2;


$("#result").text();

$(".btn2").click(function(){
    $("#result").text(inp1 + " - " + inp2 + " = " + minus);
});

$(".btn1").click(function(){
    $("#result").text(inp1 + " + " + inp2 + " = " + plus);
});

$(".btn3").click(function(){
    $("#result").text(inp1 + " X " + inp2 + " = " + mult);
});

$(".btn4").click(function(){
    $("#result").text(inp1 + " / " + inp2 + " = " + div);
});