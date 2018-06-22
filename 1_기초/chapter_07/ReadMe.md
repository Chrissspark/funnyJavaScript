# Alert을 이용한 행맨게임 제작  

## Request  
1. 입력할 수 있는 횟수를 넣어라.  
2. 입력가능 횟수를 초과하면 성공하지 못함을 출력.
3. 게임 내 버그가 있으므로 고쳐라.

## Fix  
1. 유저의 상태 업데이트 화면에 남은 횟수를 출력해줌.
2. 입력가능 횟수가 초과되면 게임이 종료됨.
3. 게임 내 버그는 잡았으나, 똑같은 키를 입력했을 때에 "이미 입력된 키 입니다." 라고 화면에 출력해주지는 못함.  


### 사용된 메서드
1. join();
2. length;
3. indexOf();  

#### indexOf(); 알아보기
```javascript
//배열에서 맨 처음 나오는 값의 인덱스를 반환한다.
array.indexOf(searchElement[, fromIndex])
```  
   
  - searchElement : array에서 찾을 값.
  - fromindex: 선택사항이며, 검색을 시작할 배열 인덱스. fromindex가 생략되면 0부터 시작
  
#### 반환 값
배열에서 searchElement의 처음에 나타나는 인덱스 또는 searchElement가 없는 경우 -1이다.

#### 설명   
indexOf 메서드는 지정한 값에 대한 배열을 검색한다. 메서드는 첫 번째 나타나는 인덱스를 반환하거나 지정된 값이 없는 경우 -1을 반환한다.

검색은 오름차순 인덱스 순서로 수행된다.

배열 요소는 === 연산자와 비슷한 완전 같음으로 발생한 searchElement 값과 비교된다.자세한 내용은 [비교 연산자(JavaScript)](https://msdn.microsoft.com/ko-kr/library/ky6fyhws(v=vs.94).aspx)를 참조요.

선택적 fromIndex 인수는 검색을 시작할 배열 인덱스를 지정. fromIndex가 배열 길이보다 크거나 같으면 -1이 반환. fromIndex가 음수이면 검색이 배열 길이 및 fromIndex에서 시작.

```javascript
// Create an array. (The elements start at index 0.)
var ar = ["ab", "cd", "ef", "ab", "cd"];

// Determine the first location of "cd".
document.write(ar.indexOf("cd") + "<br/>");

// Output: 1

// Find "cd" starting at index 2.
document.write(ar.indexOf("cd", 2) + "<br/>");

// Output: 4

// Find "gh" (which is not found).
document.write (ar.indexOf("gh")+ "<br/>");

// Output: -1

// Find "ab" with a fromIndex argument of -2.
// The search starts at index 3, which is the array length plus -2.
document.write (ar.indexOf("ab", -2) + "<br/>");
// Output: 3
```   
   
> 출처: [Microsoft Developer Network`s MSDN Libray(-Javascript-)](https://msdn.microsoft.com/ko-kr/library/d1et7k7c(v=vs.94).aspx)
     
