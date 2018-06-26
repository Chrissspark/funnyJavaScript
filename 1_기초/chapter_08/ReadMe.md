# 함수
자바스크립트의 변수범위와 호이스팅이 작동하는 원리를 이해하는 것은 필수이다.  
이 두가지는 직관적이면서도 이해하기가 쉽지 않고, 미묘한 차이가 있다.  
     
### 1.변수범위(Variable Scope)
변수범위는 변수가 존재하는 컨텍스트이다. 어디에서 변수에 접근할 수 있는지, 그 컨텍스트에서 변수에 접근할 수 있는지를 명시적으로 나타냄.
변수는 **지역범위(local scope)**와 **전역범위(global scope)** 둘 중 하나를 가진다.     
        
#### 1. 지역변수(함수수준 범위)  




### .호이스팅  
호이스팅이란?  
```
hoist: 1. (흔히 밧줄이나 장비를 이용하여) 들어올리다.   
       2. (화물・장애인을 들어올리기 위한) 승강 장치.  
```
무엇을 끌어올리는가?  
  1. 변수'선언'  
  2. 함수'선언'  
```javascript
console.log(a());   
console.log(b());   
console.log(c());   
                    
function a() {      
    return 'a';        
}               
var b = function bb(){
    return 'bb';
}
var c = function (){
    return 'c';
}
```


### .함수선언문과 함수표현식  

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

### .함수스코프, 실행컨텍스트  
  
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

![hoistiong_01](img/1.PNG)  
![hoistiong_02](img/2.PNG)  
![hoistiong_03](img/3.PNG)  
![hoistiong_04](img/4.PNG)  
![hoistiong_05](img/5.PNG)  
![hoistiong_06](img/6.PNG)  
![hoistiong_07](img/7.PNG)  
![hoistiong_08](img/8.PNG)  
![hoistiong_09](img/9.PNG)  
![hoistiong_10](img/10.PNG)  
![hoistiong_11](img/11.PNG)  
![hoistiong_12](img/12.PNG)  
![hoistiong_13](img/13.PNG)  
![hoistiong_14](img/14.PNG)  
![hoistiong_15](img/15.PNG)  
![hoistiong_16](img/16.PNG)  

### .메서드

출처 및 참고: [인프런_javaScriptFlow](https://www.inflearn.com/course-status-2/),  
[자바스크립트의 변수범위와 호이스팅](http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/)