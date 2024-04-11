function reseta() {
    document.getElementById('red').style.background = '';
    document.getElementById('green').style.background = '';
    document.getElementById('yellow').style.background = '';
    document.getElementById('rbt').style.background = '';
    document.getElementById('ybt').style.background = '';
    document.getElementById('gbt').style.background = '';
    document.getElementById('abt').style.background = '';
    document.getElementById('albt').style.background = '';

}
function r(el) {
    reseta();
    document.getElementById('red').style.background = 'red';
    el.style.background = 'red';
}
function g(el) {
    reseta();
    document.getElementById('green').style.background = 'green';
    el.style.background = 'green';
}
function y(el) {
    reseta();
    document.getElementById('yellow').style.background = 'yellow';
    el.style.background = 'yellow';
}
function a(el) {
    reseta();
    document.getElementById('red').style.background = 'red';
    document.getElementById('green').style.background = 'green';
    document.getElementById('yellow').style.background = 'yellow';
    el.style.background = 'linear-gradient(to right,red,green,yellow)';
}

document.getElementById('albt').addEventListener('click', () => {
    reseta();
    var p = setInterval(() => {
        document.getElementById('red').style.background = 'red';
        document.getElementById('green').style.background = '';
        document.getElementById('yellow').style.background = '';
        document.getElementById('albt').style.background = 'red';
        clearInterval(p);
    }, 0);
    var q = setInterval(() => {
        document.getElementById('red').style.background = '';
        document.getElementById('green').style.background = 'green';
        document.getElementById('yellow').style.background = '';
        document.getElementById('albt').style.background = 'green';
        clearInterval(q);
    }, 500);
    var r = setInterval(() => {
        document.getElementById('red').style.background = '';
        document.getElementById('green').style.background = '';
        document.getElementById('yellow').style.background = 'yellow';
        document.getElementById('albt').style.background = 'yellow';
        clearInterval(r);
    }, 1000);
    var s = setInterval(() => {
        document.getElementById('red').style.background = '';
        document.getElementById('green').style.background = '';
        document.getElementById('yellow').style.background = '';
        document.getElementById('albt').style.background = '';
        clearInterval(s);
    }, 1500);

});
