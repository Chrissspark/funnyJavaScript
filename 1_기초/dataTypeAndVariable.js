/*주석 사용

변수, 함수 사용 전의 다중 주석 => 파트별 설명 요약
변수명 우측 => 예측된 값 || 페이지 
콘솔 => 고민한 후 해결함 || 못함
*/

/*자료형과 변수 p.13~14

javaScript의 기본형
숫자 = num
문자열 = strting
불리언 = boolean (true & false)

*/
    var num= 5;  //p.13
    console.log(num);
    console.log("-----------");

    var string = "안녕하세요. 저는 문자열입니다."; // p.14
    console.log(string);
    console.log("-----------");

    var boolean = true && false;
    console.log(boolean);
    console.log("-----------");

    var multiplication = 99*123;
    console.log(multiplication);
    console.log("-----------");

    var slice = "이 문자열은 참 깁니다.";
    console.log(slice.slice(2,5)); //2,5 -> 2번째 문자열까지 자르고 3번부터 보여주며 5번째를 마지막으로 보여준다. (공백 포함)
    console.log("-----------");

/*
theFourFuncdamentalArithmeticOperations p.14~16
addition = +
subtraction = -
multiplication = *
division = /
_remainder = %
*/

    var addition = 12345+56789;  //69134
    console.log(addition);
    console.log("-----------");

    var triAddition = 22+33+44;  //99
    console.log(triAddition);
    console.log("-----------");

    var subtraction = 1000-17;  //983
    console.log(subtraction);
    console.log("-----------");

    var multiplication2 = 123*456;  //56088
    console.log(multiplication2);
    console.log("-----------");

    var division = 12345/250;  //49.38
    console.log(division);
    console.log("-----------");

    var theFourFuncdamentalArithmeticOperations = 1234+57*3-31/4;  // 1397.25
    console.log(theFourFuncdamentalArithmeticOperations);  // JS의 계산순서는 * > / > + > -  순이다.
    console.log("-----------");

    var calcAdditionFirst = 8/(1+3);  //2 p.15
    console.log(calcAdditionFirst);
    console.log("-----------");

    var practiceOne = (15+9)*2 ;  //24명에게 2개씩 준다. p.17
    console.log(practiceOne);
    console.log("-----------");

/*
variable = var (변수)
변수는 한가지 물건을 넣을 수 있는 상자. 
다른 물건을 넣기위해서는 들어있는 내용물을 빼야한다.
*/

    var 별명;
    console.log(별명);  // 반환할 값이 지정되지 않았다.
    console.log("-----------");

    var 나이 = 28;                  //p. 18
    var 나이2 = 28;
    console.log(나이2);  // JS에서 부등호(=)는 x의 값이 xy이다가 아니라 부등호 우측의 값(28)을 변수(나이2)에 넣는다는 의미.
    console.log("-----------");  // 변수란, 변할 수 있는 값.
    
    var 사람수 = 1+3;
    var 사탕개수 = 8;
    console.log(사탕개수 / 사람수);
    console.log("-----------");

    //계산하며 변수 만들기
    var oneMin = 60;  //한시간 -> 초            p.20
    var oneHour = 60;
    var aHourSec = oneMin * oneHour;
    console.log(aHourSec);
    console.log("-----------");

    var aDayHour = 24; // 하루 -> 초
    var aDaySec = aHourSec * aDayHour;
    console.log(aDaySec);
    console.log("-----------");

    var aYearDay = 365; //1년 -> 초
    var aYearSec = aDaySec * aYearDay;
    console.log(aYearSec);
    console.log("-----------");

    var age = 28; // 28년 -> 초 
    var myAgeSec = aYearSec * age;
    console.log(myAgeSec);  //883,008,000 하............ 김태곤님이 이 책을 번역할때 난 이 책을 본다....
    console.log("-----------");

    // 부등호 (--, ++)
    var increment = 0;              //p. 21
    console.log(++increment);
    console.log(++increment);
    console.log(++increment);
    console.log(++increment);
    console.log("-----------");

    var increment2=0;
    console.log(increment++);
    console.log(increment++);
    console.log(increment++);
    console.log(increment++);
    console.log("-----------");


    var decrement = 5;
    console.log(--decrement);
    console.log(--decrement);
    console.log(--decrement);
    console.log(--decrement);
    console.log(--decrement);
    console.log("-----------");
    
    var decrement2 = 5;
    console.log(decrement2--);
    console.log(decrement2--);
    console.log(decrement2--);
    console.log(decrement2--);
    console.log(decrement2--);
    console.log("-----------");

/* 부등호 (-=, +=) p.22
시작 값에 (+=) 더하거나, 빼(-=)는 방법
마지막으로 온 값에 지속적으로 뺄수도, 더할 수도 있다.
*/
    var x = 10;
    x = x+5;
    console.log(x);
    console.log("-----------");

    var 점수 = 10;      //p.23
    점수 += 7;
    console.log(점수);
    console.log("-----------");
    점수 -= 3;
    console.log(점수);      // 점수에 17을 할당했기 때문에 17에서 3을 뺀 값을 출력.
    console.log("-----------");

//*= , /= 연습문제 p.23
//200,25
    var 풍선 = 100;
    풍선 *= 2;
    console.log(풍선);
    console.log("-----------");

    var 사탕 = 100;
    사탕 /= 4;
    console.log(사탕);
    console.log("-----------");

/* 문자열 (String)  p.24
문자는 글자, 숫자, 구두점, 공백 모두 포함된다.
"" 쌍따옴표도 가능하고 '' 홑따옴표도 가능하다. 같은것으로 열고 닫는것이 좋다.
*/

    var awesome = "진짜 멋지다!!!";
    console.log(awesome);
    console.log("-----------");

    var asMyLikes = 5;  //  asMyLikes에 초기 값 숫자를 입력
    var asMyLikes = "문자열입니다.";  //asMyLikes에 문자열을 입력
    console.log(asMyLikes);     //asMyLikse에 마지막으로 입력한 문자열이 출력
    console.log("-----------");

    var numNine = 9;
    var stringNine = "9";
    console.log(numNine + stringNine); // 숫자 9와 문자9를 더해도 99라고 표기됨.
    console.log("-----------");

    //문자열 연결하기  p.25
    var hello = "안녕하세요, "; // 공백과 구두점 모두 문자열에 할당 가능. 넣지 않으면 띄어쓰기 하지 않음. 멍청함.
    var myName = "닉.";
    console.log(hello + myName);
    console.log("-----------");

    //문자열 길이 구하기.   p.26
    var stringLength = "동해물과백두산이마르고닳도록";
    console.log(stringLength.length);
    console.log("-----------");

    var java = "java";
    console.log(java.length);   //4
    console.log("-----------");

    var script = "script";
    console.log(script.length); //6
    console.log("-----------");

    var javaScript = java + script;
    console.log(javaScript.length); //10
    console.log("-----------");

    var java2 = "j a v a";
    var script2 ="s c r i p t";
    var javaScript2 = java2 + script2;
    console.log(javaScript2.length);    //띄어쓰기도 포함됨. 
    console.log("-----------");

    //문자열에서 한 글자만 가져오기 p.27
    var greeting = "HELLO"; //배열의 기초. 배열에 각 문자열이 저장된다.
    console.log(greeting[0]);
    console.log(greeting[1]);
    console.log(greeting[2]);
    console.log(greeting[3]);
    console.log(greeting[4]);
    console.log("-----------");

    var pwd1 = "지도 속";
    var pwd2 = "희망을";
    var pwd3 = "훔쳐본다.";
    var pwd4 = "?!";
    console.log(pwd1[1] + pwd2[1] + pwd3[1] + pwd4[1] + pwd4[1] + pwd4[1]);
    console.log("-----------");

/*문자열 잘라내기 p.28
문자열의 일부를 잘라낼때는 slice를 사용함. 
slice(2,5) 2번까지 짜르고 3~5번까지 보여줌.  앞의2는 어디까지 자를지, 뒤의 5는 어디까지 보여줄지.
(2)만 입력하면 "문자열은 참 깁니다."라고 출력.
(5)만 읻력하면 " 참 김니다." 라고 출력.
    ----------
이   | 문 자 열 |은     참    깁 니  다  . 이 문자열은 참 깁니다.
0  1 | 2  3  4 | 5  6  7  8  9  10 11  12
    ----------
*/
    var longString = "이 문자열은 참 깁니다.";
    console.log(longString.slice(2,5));
    console.log(longString.slice(3));
    console.log("-----------");

    

/*문자열 전체를 대문자나 소문자로 바꾸기 p.29 
.toUpperCase()를 이용해 대문자로 변경가능.
.toLowerCCase()를 이용해 소문자로 변경가능. 
*/
   var toUpperCase = "hello there, how are you doing?";
   console.log(toUpperCase.toUpperCase());
   console.log("-----------");

   var toLowerCase = "HELLO THERE, HOW ARE YOU DOING?"
   console.log(toLowerCase.toLowerCase());
   console.log("-----------");

   var note = "hellO TherE, HoW ArE YoU DoinG?";    //아직 내거 만들지 못함.
   var toLowerCase2 = note.toLowerCase();
   var firstString = toLowerCase2[0].toUpperCase();
   var theRest = toLowerCase2.slice(1);
   var noteAnswer = firstString + theRest;
   console.log(noteAnswer);
   console.log("-----------");

/*
    //알파벳 대소문자 판별 후 원하는 대문자 앞을 띄어쓰기 한다.
    //띄어쓰기 한 후 문법에 맞게 "hellOTherE,HoWArEYoUDoinG?"를 출력한다.
  
    var upper = "hellOTherE,HoWArEYoUDoinG??"; // => Hello there, how are you doing?
   var toLowCase = upper.toLowerCase();
   var replace = (upper.replace(/([A-Z])/g, ' $1'));
   var replace2 = (replace.replace(/([\s])/g, ''));
   console.log(replace);
   console.log(replace2);
   //console.log(replace3);
   console.log("------try_01------");
*/

    var upper = "hellOTherE,HoWArEYoUDoinG??"; //아 답답해 -_-
    var length2 = upper.length;
    var lowCase = upper.toLowerCase();
    var first = lowCase[0].toUpperCase();
    var rests = lowCase.slice(1);
    var print = first + rests;
    console.log("------try_02------");

    var syntax = upper.replace("hellOTherE,HoWArEYoUDoinG??", "Hello there, how are you doing??");
    console.log(length2);
    console.log(print+ "  R");
    console.log(syntax + "    야매야매");
    console.log("-----try_03------");

    var some = 'hellOTherE,HoWArEYoUDoinG??';
    var answer = some.replace(/([A-Z])/g, ' $1').replace(/\s([A-Z])\s/g, '$1 ').replace(/\s([A-Z][?,])/g, '$1');
    var regExp = answer.toLowerCase().replace(/^./, function (match) {
      return match.toUpperCase();
    })
    console.log(regExp);
    console.log("------try_04------");
    /* 
불리언 p.30~39
참과 거짓 구분
*/
    var javaScriptIsCool = true;
    console.log(javaScriptIsCool);
    console.log("-----------");

/*
논리 연산자 p.31~33
AND && , 
OR || , 
NOT  !
*/


