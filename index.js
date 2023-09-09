// 임의의 숫자 3개 받기
let createNum = [];
for (var i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    if (createNum.indexOf(randomNum) === -1) {
        createNum.push(randomNum);
    } else {
        i--;
    }
}

// 숫자 입력하기
var input = prompt('숫자를 입력해주세요.');

let inputNum = [];
for (var i = 0; i < 3; i++) {
    inputNum.push(input[i]);
}

// 숫자 비교하기
let try_cnt = 1;
let ball_cnt = 0;
let strike_cnt = 0;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (createNum[i] == inputNum[j]) {
            if (i == j) {
                strike_cnt++;
            } else {
                ball_cnt++;
            }
        }
    }
}

console.log(`${ball_cnt}B${strike_cnt}S`)

let a = [1,2,3];
let b = [1,2,3];
console.log(JSON.stringify(a) === JSON.stringify(b));