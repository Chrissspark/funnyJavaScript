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

/*theFourFuncdamentalArithmeticOperations p.14~16
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

    var 나이 = 28;
    var 나이2 = 28;
    console.log(나이2);  // JS에서 부등호(=)는 x의 값이 xy이다가 아니라 부등호 우측의 값(28)을 변수(나이2)에 넣는다는 의미.
    console.log("-----------");  // 변수란, 변할 수 있는 값.
    
    var 사람수 = 1+3;
    var 사탕개수 = 8;
    console.log(사탕개수 / 사람수);
    console.log("-----------");

    var oneMin = 60;  //한시간 -> 초
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

    var increment = 0;
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