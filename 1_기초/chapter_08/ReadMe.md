# 함수
### 함수선언문과 함수표현식  

1. 함수선언문(function declaration)  
```javascript
function a(){
    return 'a';
}
```
  
2. 기명 함수표현식(named function expression)
```javascript
//최근 잘 쓰지 않음
var b = function bb(){
    return 'bb';
}  
```
3. (익명)함수표현식(unnamed/annnymous function expression)
```javascript
    //할당하지 않을경우 전역에 할당됨.   
    //호이스팅에 의해 위로 끌어올려지고 결과가 달라짐.   
    //캐스캐이팅에 의해 나중 함수가 이전의 함수를 덮어씜  
//변수c에 익명함수 할당.   
var c =  //변수 c선언
function(){ // 익명함수 선언
    return 'c';
}
```
- 함수선언문을 이용하면 변수,함수를 찾아야하며 어디 있는지 정확히   
 파악하는데 어려움이 있어, 함수선언문 보다 함수표현식 사용을 권장한다.

### 함수스코프, 실행컨텍스트  
  
실행 컨텍스트에는 호이스팅, this 바인딩 등의 정보가 담긴다.  
  
```javascript
//변수의 유효범위를 생각하며 아래의 코드실행을 예측해보시오.
var a = 1;
  function outer(){
    console.log(a); //1번 결과:1

    function inner (){
      console.log(a); //2번 결과:undefined
      var a =3;
    }
    inner();

    console.log(a); //3번 결과:1
}
outer();
console.log(a);  //4번 결과:1
```

![hoistiong_01](/img/1.png)
![hoistiong_02](/img/2.png)
![hoistiong_03](/img/3.png)
![hoistiong_04](/img/4.png)
![hoistiong_05](/img/5.png)
![hoistiong_06](/img/6.png)
![hoistiong_07](/img/7.png)
![hoistiong_08](/img/8.png)
![hoistiong_09](/img/9.png)
![hoistiong_10](/img/10.png)
![hoistiong_11](/img/11.png)
![hoistiong_12](/img/12.png)
![hoistiong_13](/img/13.png)
![hoistiong_14](/img/14.png)
![hoistiong_15](/img/15.png)
![hoistiong_16](/img/16.png)
