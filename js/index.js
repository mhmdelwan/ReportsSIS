// let post = document.getElementById('post');
// let morning = document.getElementById('morning');
// let date = document.getElementById('date');
// let dateTo = document.getElementById('dateTo');
// let customer = document.getElementById('customer');
// let btn1 = document.getElementById('btn1');
// let output1 = document.getElementById('output1');
// let output2 = document.getElementById('output2');
// let output3 = document.getElementById('output3');
// let output4 = document.getElementById('output4');
// let output5 = document.getElementById('output5');


// function fun1(){
//     output1.innerHTML = post.value;
//     output2.innerHTML = morning.value;
//     output3.innerHTML = date.value;
//     output4.innerHTML = dateTo.value;
//     output5.innerHTML = customer.value;
// }

// btn1.addEventListener('click', fun1);







let btn = document.getElementById('btn');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let fromDate = document.getElementById('fromDate');
let toDate = document.getElementById('toDate');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
let output4 = document.getElementById('output4');
let output5 = document.getElementById('output5');
let output6 = document.getElementById('output6');
let output7 = document.getElementById('output7');



function fun1(){
    output1.innerHTML = input1.value;
    output2.innerHTML = input2.value;
    output3.innerHTML = input3.value;
    output4.innerHTML = fromDate.value;
    output5.innerHTML = toDate.value;
    output6.innerHTML = input4.value;
    output7.innerHTML = input5.value;
}

btn.addEventListener('click', fun1);