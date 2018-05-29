# 완전하게 파악하지 못한 문제

### p.29 정규식과 매치함수를 이용한 함수구문

```javascript
    var some = 'hellOTherE,HoWArEYoUDoinG??';
    var answer = some.replace(/([A-Z])/g, ' $1').replace(/\s([A-Z])\s/g, '$1 ').replace(/\s([A-Z][?,])/g, '$1');
    var regExp = answer.toLowerCase().replace(/^./, function (match) {
      return match.toUpperCase();
    });
    console.log(regExp);
```
 regular Expression   
1. still don`t know: 
  * \s[A-Z]\s ,  
  * \s([A-Z][?,]),  
  * $1~9 : 조건식  
  * '$1' ,        
  * ' $1',   
  * '$1 '  
  * [?,]    : (,) 하나만 색인.?    

---------------------

2. know:
  * \s : 공백문자  
  * [A-Z] : 대문자 A~Z,   
  * /g : 전역 검색,   
  * [^.] : 괄호안에 들어있지 않은 첫번째 글짜 색인  

----------------------

### <가정>  

some에   'hellOTherE,HoWArEYoUDoinG??' 넣는다.   
answer에 some의 대문자의 전역을 색인 한 후에 대문자 앞에 띄어쓰기를하여 replace(변환) 한다.   
변환한것을 다시 공백문자와 대문자와 공백문자로 전역색인 후 뒤에 띄어쓰기한 후 replace 한다.  
또 변환한 것을 모든 공백문자와 대문자중에 하나만 찾아 단어 뒤에 붙인다.  
regExp에 answer를 소문자로 변경한 후에 첫번째 글씨를 매치함수로 찾아 첫 단어만 대문자로 변경한다.??  

