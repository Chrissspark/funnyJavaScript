var drawCats = function (howManyTimes){ // 변수명 drawCats 함수명 howManyTimes 선언
	for (var i = 0; i < howManyTimes; i++) { // 반복문 : i를 0으로 초기화, i가 howManyTimes 보다 작을때까지, i를 추가
		console.log(i + "=^.^="); // i와 문자열"=^.^="을 찍어낸다.
    }
};

drawCats(10); //drawCats 을 10번 찍어낸다.

// result
/*
    0=^.^=
    1=^.^=
    2=^.^=
    3=^.^=
    4=^.^=
    5=^.^=
    6=^.^=
    7=^.^=
    8=^.^=
    9=^.^=

프로그래밍은 0부터 시작하여 0~9를 찍어냄.
*/