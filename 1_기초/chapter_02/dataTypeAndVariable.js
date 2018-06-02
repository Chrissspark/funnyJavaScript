/* p.13~14
자료형과 변수 
javaScript의 기본형
숫자 = num
문자열 = strting
불리언 = boolean (true & false)
*/
var num = 5;
console.log(num);
console.log("-----------");

var string = "안녕하세요. 저는 문자열입니다.";
    console.log(string);
console.log("-----------");

var boolean = true && false;
console.log(boolean);
console.log("-----------");

var multiplication = 99 * 123;
console.log(multiplication);
console.log("-----------");

var slice = "이 문자열은 참 깁니다.";
console.log(slice.slice(2, 5)); //2,5 -> 2번째 문자열까지 자르고 3번부터 보여주며 5번째를 마지막으로 보여준다. (공백 포함)
console.log("-----------");

/* p.14~16
theFourFuncdamentalArithmeticOperations
addition = +
subtraction = -
multiplication = *
division = /
_remainder = %
*/

var addition = 12345 + 56789; //69134
console.log(addition);
console.log("-----------");

var triAddition = 22 + 33 + 44; //99
console.log(triAddition);
console.log("-----------");

var subtraction = 1000 - 17; //983
console.log(subtraction);
console.log("-----------");

var multiplication2 = 123 * 456; //56088
console.log(multiplication2);
console.log("-----------");

var division = 12345 / 250; //49.38
console.log(division);
console.log("-----------");

var theFourFuncdamentalArithmeticOperations = 1234 + 57 * 3 - 31 / 4; // 1397.25
console.log(theFourFuncdamentalArithmeticOperations); // JS의 계산순서는 * > / > + > -  순이다.
console.log("-----------");
// p.15
var calcAdditionFirst = 8 / (1 + 3);
console.log(calcAdditionFirst);
console.log("-----------");
//p.17  
var practiceOne = (15 + 9) * 2; //24명에게 2개씩 준다 = 48 
console.log(practiceOne);
console.log("-----------");

/*
variable = var (변수)
변수는 한가지 물건을 넣을 수 있는 상자. 
다른 물건을 넣기위해서는 들어있는 내용물을 빼야한다.
*/

var 별명;
console.log(별명); // 반환할 값이 지정되지 않았다.
console.log("-----------");
//p. 18
var 나이 = 28;
var 나이2 = 28;
console.log(나이2); // JS에서 부등호(=)는 x의 값이 xy이다가 아니라 부등호 우측의 값(28)을 변수(나이2)에 넣는다는 의미.
console.log("-----------"); // 변수란, 변할 수 있는 값.

var 사람수 = 1 + 3;
var 사탕개수 = 8;
console.log(사탕개수 / 사람수);
console.log("-----------");

//p.20 계산하며 변수 만들기 
var oneMin = 60; //한시간 -> 초            
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
console.log(myAgeSec); //883,008,000
console.log("-----------");

//p.21 부등호 (--, ++)
var increment = 0;
console.log(++increment);
console.log(++increment);
console.log(++increment);
console.log(++increment);
console.log("-----------");

var increment2 = 0;
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

/* p.22
부등호 (-=, +=) 
시작 값에 (+=) 더하거나, 빼(-=)는 방법
마지막으로 온 값에 지속적으로 뺄수도, 더할 수도 있다.
*/
var x = 10;
x = x + 5;
console.log(x);
console.log("-----------");

var 점수 = 10; //p.23
점수 += 7;
console.log(점수);
console.log("-----------");
점수 -= 3;
console.log(점수); // 점수에 17을 할당했기 때문에 17에서 3을 뺀 값을 출력.
console.log("-----------");

/*p.23 
*= , /= 연습문제 
200,25
*/
var 풍선 = 100;
풍선 *= 2;
console.log(풍선);
console.log("-----------");

var 사탕 = 100;
사탕 /= 4;
console.log(사탕);
console.log("-----------");

/* p.24
문자열 (String) 
문자는 글자, 숫자, 구두점, 공백 모두 포함된다.
"" 쌍따옴표도 가능하고 '' 홑따옴표도 가능하다. 같은것으로 열고 닫는것이 좋다.
*/

var awesome = "진짜 멋지다!!!";
console.log(awesome);
console.log("-----------");

var asMyLikes = 5; //  asMyLikes에 초기 값 숫자를 입력
var asMyLikes = "문자열입니다."; //asMyLikes에 문자열을 입력
console.log(asMyLikes); //asMyLikse에 마지막으로 입력한 문자열이 출력
console.log("-----------");

var numNine = 9;
var stringNine = "9";
console.log(numNine + stringNine); // 숫자 9와 문자9를 더해도 99라고 표기됨.
console.log("-----------");

//p.25 문자열 연결하기  
var hello = "안녕하세요, "; // 공백과 구두점 모두 문자열에 할당 가능. 넣지 않으면 띄어쓰기 하지 않음. 멍청함.
var myName = "닉.";
console.log(hello + myName);
console.log("-----------");

//p.26 문자열 길이 구하기.   
var stringLength = "동해물과백두산이마르고닳도록";
console.log(stringLength.length);
console.log("-----------");

var java = "java";
console.log(java.length); //4
console.log("-----------");

var script = "script";
console.log(script.length); //6
console.log("-----------");

var javaScript = java + script;
console.log(javaScript.length); //10
console.log("-----------");

var java2 = "j a v a";
var script2 = "s c r i p t";
var javaScript2 = java2 + script2;
console.log(javaScript2.length); //띄어쓰기도 포함됨. 
console.log("-----------");

//p.27 문자열에서 한 글자만 가져오기 
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

/* p.28
문자열 잘라내기
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
console.log(longString.slice(2, 5));
console.log(longString.slice(3));
console.log("-----------");



/*  p.29 
문자열 전체를 대문자나 소문자로 바꾸기
.toUpperCase()를 이용해 대문자로 변경가능.
.toLowerCCase()를 이용해 소문자로 변경가능. 
*/
var toUpperCase = "hello there, how are you doing?";
console.log(toUpperCase.toUpperCase());
console.log("-----------");

var toLowerCase = "HELLO THERE, HOW ARE YOU DOING?"
console.log(toLowerCase.toLowerCase());
console.log("-----------");

var note = "hellO TherE, HoW ArE YoU DoinG?"; //아직 내거 만들지 못함.
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
   console.log("------try_01_FAIL------");
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
console.log(print + "  R");
console.log(syntax + "    야매로 replace");
console.log("-----try_03------");

/*
    regular Expression 
    still don`t know: \s[A-Z]\s , 
                      \s([A-Z][?,]),
                         $1~9 : 조건식
                      '$1' ,       
                      ' $1', 
                      '$1 '
                      [?,]    : (,) 하나만 색인.?

                know:      \s : 공백문자
                        [A-Z] : 대문자 A~Z, 
                           /g : 전역 검색, 
                         [^.] : 괄호안에 들어있지 않은 첫번째 글짜 색인
    <가정>
        some에   'hellOTherE,HoWArEYoUDoinG??' 넣는다.
        answer에 some의 대문자의 전역을 색인 한 후에 대문자 앞에 띄어쓰기를하여 replace(변환) 한다. 
            변환한것을 다시 공백문자와 대문자와 공백문자로 전역색인 후 뒤에 띄어쓰기한 후 replace 한다.
            또 변환한 것을 모든 공백문자와 대문자중에 하나만 찾아 단어 뒤에 붙인다.
        regExp에 answer를 소문자로 변경한 후에 첫번째 글씨를 매치함수로 찾아 첫 단어만 대문자로 변경한다.??
*/
var some = 'hellOTherE,HoWArEYoUDoinG??';
var answer = some.replace(/([A-Z])/g, ' $1').replace(/\s([A-Z])\s/g, '$1 ').replace(/\s([A-Z][?,])/g, '$1');
var regExp = answer.toLowerCase().replace(/^./, function (match) {
    return match.toUpperCase();
});
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
AND = && , 
OR = || , 
NOT = !
*/
var bath = true;
var bringBackPag = false;
console.log(bath && bringBackPag);
console.log(bath || bringBackPag);
console.log(bath != bringBackPag);
console.log(bath == bringBackPag);
console.log(bath === bringBackPag);
console.log(bath !== bringBackPag);
console.log("-----------");

var bath2 = true;
var bringBackPag2 = true;
console.log(bath2 && bringBackPag2);
console.log("-----------");

var isWeekend = true;
var needShower = !isWeekend; //주말을 false 로
console.log(needShower);
console.log(!needShower); //주말이 아니기 때문에 샤워하지 않아도 된다.
console.log("-----------");

//p.33
var 주말인가요 = false;
var 샤워하기 = true;
var 사과챙기기 = false;
var 오렌지챙기기 = true;
var 나가야하나요 = !주말인가요 && 샤워하기 && (사과챙기기 || 오렌지챙기기);
console.log(나가야하나요); //AND 연산자를 OR 연산자보다 먼저 계산하기때문에 OR 연산자를 먼저 계산할 수 있도록 ()해준다.
console.log("-----------");

/*  p.34
    불리언으로 숫자 비교하기
    > , >= , > , <=  (초과,이상,이하,미만)
*/
var height = 165;
var limit = 165;
console.log(height > limit);
console.log(height >= limit);
console.log(height < limit);
console.log(height <= limit);
console.log("-----------");

/* 
    삼중등호 (===) 왼쪽 값과 오른쪽의 값이 완전하게(type,문자열 등) 같은지 비교
*/
var secret = 5;
var stringNum = "5";
var ironManGuess = 3;
var hulkGuess = 7;
var thorGuess = 5;
console.log(secret === ironManGuess); //전부 숫자이지만 다른 숫자이기 때문에 false
console.log(secret === hulkGuess);
console.log(secret === thorGuess);
console.log(secret === stringNum); // 숫자 5이긴 하지만 문자열이기 때문에 완벽하기 일치하지 않음
console.log("-----------");

/*
    이중등호 (==) 왼쪽 값과 오른쪽 값이 같은지 비교
*/
console.log(secret == stringNum);
console.log("-----------");
var zero = 0;
console.log(zero == true);
console.log("false" == false);
console.log(1 == true);
console.log("-----------");
//문자열과 숫자가 동일한 경우가 있을 수 있으므로 삼중부등호를 주로 사용하는 것이 죻다.

/*
12세 이상 관람가 영화이며, 12세 미만이면 입장 불가능, 12세 미만이여도 어른동반이면 입장 가능.
*/
var age = 1;
var withAdult = true;
var entry = 12 <= age || withAdult;
console.log(entry);
console.log("----↑easy way to entry↑----");
///////////////////////////////////////////////////////
function inOrNot() {
    var inAge = 11; //나이 변경해가며 설정.
    var inWithAdult = false; // 부모님 동반을 바꿔가며 설정.
    if (12 <= inAge) {
        console.log("highPass");
    } else {
        if (inWithAdult) {
            console.log("canGoInWithAdult")
        } else {
            console.log("noEnter")
        }
        console.log("can'tEnter");
    }
};
inOrNot();
console.log("↑↑↑↑myFunction↑↑↑↑");

/////////////////////////////////////////////////////////
/* p. 38~39
   undifined 와 null
   undifined = 값이 '아직' 지정되지 않음.
   null = 값이 없음. @값을 '일부러' 지정하지 않음.
*/
var newVar;
var newNull = null;
console.log(newVar);
console.log(newNull);