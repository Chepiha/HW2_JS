// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
var a = +prompt('Введите значение');
var b = +prompt('Введите значение');
var c = +prompt('Введите значение');

    if (a==b) {
        alert ("Ошибка");}  
    else if (b==c) {
        alert ("Ошибка");}
    else if (a==c) {
        alert ("Ошибка");}
    if (a<b<c) {
        alert ('sum=' +(a + b + c)/3);} 

// // 2. Построить прямоугольный треугольник состоящий из символа "*".
var i = 1, j = 0;
var max = 20;

while (i < max) {
    a = "";
    for (j = 0; j < i; j++) a += "*" + ' ';
    document.write(a);
    document.write("<br/>");
    i++;
}

// // 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
var a = +prompt('Введите число')
var b = +prompt('Введите число')
var c = +prompt("Введите число");
if(a>=b) {
    if(a>=c) {
        alert ("Это"+ ' ' + a );}
    else {
        alert ("Это"+ ' ' + c );}
}
    else {
        if(b>=c) {
                alert("Это"+ ' ' + b);}
        else {
            alert("Это"+ ' ' + c);}
}
    
// // 4. Дано два числа A и B где (A<B). 
// // Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 

var A = +prompt('Введите значение А')
var B = +prompt('Введите значение В')
var sum = 0;
 
while(A<=B){
    sum+=A; 
    A++;
}
alert(sum)

// // // Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. 

var A = +prompt('Введите значение А')
var B = +prompt('Введите значение В')

for (var i = 0; A <= B; A++) {

    if (A % 2) {
      alert( A );
    }
  }