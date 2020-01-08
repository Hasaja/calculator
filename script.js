

var midResult = "0";
var windows = document.getElementsByClassName("result");
var midResultWindow= windows[0];
var answerWindow= windows[1];

function writeDown(value){
    console.log('결과는 ' + value);    
    if(value === 180){
        value = '김재원 ㅂㅅ';
    }
    else if(value === 100){
        value = '안재헌 발부';
    }
    else if(value === 1471){
        value = '이나기 게이';
    }
    else if(value === 183){
        value = '민규 키가 183이라고?';
    }
    else if(value <= 182 && value > 180){
        value = '대충 하승준 키';
    }
    answerWindow.innerHTML = "<p>"+ value +"</p>";

}

function codeNumber(number){
    if(number === '0' && midResult=== '0'){
        return;
    }
    //일단 문자를 모두 받아보자!
    midResult += number;
    //단순히 문자를 받아서 차곡차곡 쌓은 midResult를 만든 상황!
    console.log(midResult);
    midResultWindow.innerHTML = "<p>"+ midResult +"</p>";
}

function codeSign(sign){
    if(sign === 'AC'){
        reset();
        //AC버튼을 누른다면 초기화 시킴
    }
    else if(sign === '='){
        result = calculate(midResult);
        //이제 계산할 시간! midResult를 calculate 함수에 넣어보자
        console.log("중간 결과물은 " + midResult);
        writeDown(result);
        midResult = String(result);
    }
}

function reset(){
    console.log("Reset");
    midResult = "0";
    midResultWindow.innerHTML = "<p>0</p>";
    answerWindow.innerHTML = "<p>0</p>";
}

function calculate(something){
    result = Function('"use strict";return (' + something + ')')();
    return result;
}