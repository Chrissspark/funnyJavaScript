/*
1. 함수를 사용해 계산하기

더하기와 곱하기라는 함수 선언
각각의 함수는 두개의 인수를 전달받음.
더하기 함수: 전달받은 인수 두개를 더한 결과를 반환
곱하기 함수: 전달받은 인수 두개를 곱한 결과를 반환




2. 같은 배열인지 비교하기

인수로 절달받은 숫자 배열 두개를 비교하는 '같은배열일까' 함수를 작성
두 배열이 같으면(똑같은 숫자가 똑같은 순서로 들어있다면) true, 아니면 false를 반환

result
같은배열일까([1,2,3],[4,5,6]);
false
같은배열일까([1,2,3],[1,2,3]);
true
같은배열일까([1,2,3],[1,2,3,4]);
false

hint1: for 반복문을 사용해 첫번째 배열의 각 원소를 훑어보며 두번째 배열의 원소와 같은지 확인. 
       for 반복문에서 서로 다른 값을 발견하고 false를 반환 할 수 있어야함.

hint2: 배열의 길이다 가르면 for 반복문을 실행하기 전에 함수를 빠르게 좋료시킬 수 있다.
*/

var a = 36325*9824;
var b = 36325*9824+777;
console.log("곱셈의 값은: "+ a);
console.log("덧셉의 값은: "+ b);

var times = function (times1,times2) {
  times1 = 36325;
  times2 = 9824;
  return times1*times2;
};
console.log(times());

var add = function (add1,add2){
  add1 = times();
  add2 = 777;
  return times()+add2;
};
console.log(add());

