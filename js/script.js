// onclick
function textChange() {
    document.getElementById("h2").innerHTML = "I have changed";
}
// onload
function myFunction() {
    alert("page loaded")
}
// dblclick
function textDanger() {
    document.getElementById("p").innerHTML = "I am grey";
}
// onmouseover
function textChangeTwo() {
    document.getElementById("p1").innerHTML = "please mouse over";
}
// onmouseout
function textChangeThree() {
    document.getElementById("p1").innerHTML = "please mouse out";
}
// onkeydown
function hi() {
    alert(" you pressed a key inside the input field")
}
// onchange
function choose() {
    var a = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "you selected: " + a;
}