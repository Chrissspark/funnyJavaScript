### 선형프로그램에 대한 이해가 잘 안됨.  
#### 스코프, 호이스팅, 네스팅, 클로저
1. 스코프(Scope)  
 - 어떤 변수들에 접근 할 수 있는지 정의.
   - 전역 스코프
     - 변수가 함수 바깥이나 중괄호 바깥에 선언되었다면 전역.
     ```javascript
     const globalVariable = 'some value'
     ```
     ```javascript
     const hello = 'Hello CSS-Tricks Reader!'
      function sayHello () {
        console.log(hello)
      }
      console.log(hello) // 'Hello CSS-Tricks Reader!'
      sayHello() // 'Hello CSS-Tricks Reader!'
     ```

   - 지역 스코프
     - 특정 부분에서만 사용할 수 있는 변수
      - 함수 스코프
        - 함수 내부에서만 접근 가능.
        ```javascript
        function sayHello () {
          const hello = 'Hello CSS-Tricks Reader!'
          console.log(hello);
        }
        sayHello(); // 'Hello CSS-Tricks Reader!'
        console.log(hello) // Error, hello is not defined
        ```
      - 블록 스코프
        - 중괄호 내부에서 var, const, let 변수를 선언하면 이 변수들은 블록 내부에서만 접근 가능.
          ```javascript
          {
            const hello = 'Hello CSS-Tricks Reader!'
            console.log(hello) // 'Hello CSS-Tricks Reader!'
          }
          console.log(hello) // Error, hello is not defined
          ```
        - 블록 스코프는 대개 함수 스코프의 서브셋

2. 함수 호이스팅과 스코프  
  - 함수가 선언식으로 선언되면, 현재 스코프의 최상단으로 호이스팅된다.
   ```javascript
   // This is the same as the one below
  sayHello() //함수가 먼저 호출
  function sayHello () {
    console.log('Hello CSS-Tricks Reader!')
  }
  // This is the same as the code above
  function sayHello () {
    console.log('Hello CSS-Tricks Reader!')
  }
  sayHello() // 함수가 나중에 호출
  ```  
  - 함수 표현식으로 선언되면, 함수는 현재 스코프의 최상단으로 호이스팅되지 않는다.
  ```javascript
  sayHello() // Error, sayHello is not defined
  const sayHello = function () {
    onsole.log(aFunction)
  }
  ```
3. 함수는 서로의 스코프에 접근할 수 없다.  
 ```javascript
 function first () {
  const firstFunctionVariable = 'I’m part of first'
}
function second () {
  first()
  console.log(firstFunctionVariable) // Error, firstFunctionVariable is not defined
}
```
4. 네스팅된 스코프
 - 함수가 다른 함수 내부에서 정의되었다면, 내부 함수는 외부 함수의 변수에 접근 할 수 있다.  
   이런걸 __렉시컬 스코핑__ 이라고 부른다. 하지만, 외부 함수는 내부 함수의 변수에 접근 할 수 없다.
   ```javascript
   function outerFunction () {
  const outer = 'I’m the outer function!'
    
  function innerFunction() {
     const inner = 'I’m the inner function!'
     console.log(outer) // I’m the outer function!
  }
    
  console.log(inner) // Error, inner is not defined
}
   ```
   > **안에서 밖으로 나갈 순 있지만, 밖에서 안으로는 들어올 수 없다.**

   
   ---------    ↑(o)   ↓(x)    
   global

   ----------   ↑(o)   ↓(x)    
   outermost
   
   ----------   ↑(o)   ↓(x)    
   inner

   ----------   ↑(o)   ↓(x)    
   innermost

5. 클로저
 - 함수 내부에 함수를 작성 할 때마다, 클로저를 생성한 것.  
 - 클로저는 차후에 외부 함수의 변수를 사용할 수 있기 때문에 대개 반환하여 사용.
 ```javascript
 function outerFunction () {
  const outer = 'I see the outer variable!'
  function innerFunction() {
    console.log(outer)
  }
  return innerFunction
}
outerFunction()() // I see the outer variable!
 ```
 - 클로저는 외부 함수의 변수에 접근할 수 있기 때문에, 일반적으로 __사이드 이펙크 제어__ 와 __private변수 생성__ 에 사용한다.
  