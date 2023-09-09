console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');

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

let ball_cnt = 0;
let strike_cnt = 0;

// 숫자 입력하기
let try_cnt = 1;
while (strike_cnt < 3) {
    ball_cnt = 0;
    strike_cnt = 0;
    var input = prompt('숫자를 입력해주세요.');
    
    let inputNum = [];
    for (var i = 0; i < 3; i++) {
        inputNum.push(input[i]);
    }

    // 숫자 판단하기

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

// 출력
    if (strike_cnt == 3) {
        console.log(`${try_cnt}번째 시도 : ${input}`);
        console.log(`${strike_cnt}S`);
        console.log(`${try_cnt}번만의 맞히셨습니다.`);
        console.log('게임을 종료합니다.');
    } else if (ball_cnt == 3) {
        console.log(`${try_cnt}번째 시도 : ${input}`);
        console.log(`${ball_cnt}B`);
        try_cnt++;
    } else {
        console.log(`${try_cnt}번째 시도 : ${input}`);
        console.log(`${ball_cnt}B${strike_cnt}S`);
        try_cnt++;
    }
}