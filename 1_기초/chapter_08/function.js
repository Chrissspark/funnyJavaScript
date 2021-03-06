/*
1. 함수를 사용해 계산하기

더하기와 곱하기라는 함수 선언
각각의 함수는 두개의 인수를 전달받음.
더하기 함수: 전달받은 인수 두개를 더한 결과를 반환
곱하기 함수: 전달받은 인수 두개를 곱한 결과를 반환
*/

// 1-1번
var times = function (times1,times2) {
  times1 = 36325;
  times2 = 9824;
  return times1*times2;
};

var add = function (add1,add2){
  add1 = times();
  add2 = 777;
  return times()+add2;
};
console.log("1번 풀이: "+add());
add();


//1-2번
var add2 = function (a,b){
  return a+b;
};

var times2 = function(a,b){
  return a*b;
};
add2(times2(36325, 9824), 777);
console.log("2번 풀이: "+add2(times2(36325, 9824), 777));
console.log('-----------------------');

/*
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

var 같은배열일까 = function(arr1,arr2){
  if(arr1.length !== arr2.length){  //힌트2번 배열의 길이가 다르면 false
    return false;
  }
  for(var i= 0; i<arr1.length; i++){
    if(arr1[i] !== arr2[i]){ //힌트1번 배열의 원소가 완전히 같은지 확인 후 다르면 false
      return false;
    }
  }
  return true; // 그 외에 참
};
같은배열일까([1,2,3],[4,5,6]);
같은배열일까([1,2,3],[1,2,3]);
같은배열일까([1,2,3],[1,2,3,4]);
console.log(같은배열일까([1,2,3],[4,5,6])); //배열의 원소가 다름 2번 return
console.log(같은배열일까([1,2,3],[1,2,3])); //배열의 원소가 같음 3번 return
console.log(같은배열일까([1,2,3],[1,2,3,4])); //배열의 길이가 다름 1번 return