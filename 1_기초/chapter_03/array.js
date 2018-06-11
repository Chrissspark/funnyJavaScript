			   
//////////////////////////////////
//   let & const`s diffrence    //
//    const a = [];             //
//    a.push('s');              //
//    console.log(a);           //
//    a = {}                    //
//                              //
//    let b = [];               //
//    b.push('s');              //
//    console.log(b);           //
//    b = {}                    //
//////////////////////////////////

/* p.41
배열 = 여러개의 데이터 값을 하나의 변수에 저장가능, 배열도 객체
배열을 리터럴과 array 객체 생성자를 통해 이용할 수 있다.
new 연산자를 이용해 생성할 수 있다.
배열의 길이는 length property에 자동 갱신.  */
/*   
*/
const dinosaurTOP3 = ['티라노사우르스', '벨로키랍토르', '스테고사우루스'];

//배열을 사용하지 않았을 경우 아래처럼 변수를 많이 선언해야한다. 
//하나의 변수에 같은 부류의 것들을 관맇하는 것이 편리하며, 추후 변경이 있을때도 용이하다.
const TOP1 = '티라노사우르스';
const TOP2 = '벨로스키랍토르';
const TOP3 = '스테고사우루스';

const arr = []; // empty arr creation
arr[0] = 'a'; // put elements in array
arr[1] = 'b';
arr[2] = 'c';
arr[3] = 'd';
console.log(arr);
//p. 46
const numAndDinousar = [3, 'test', ['tree', 'stego', '3627.5'], 10];
console.log(numAndDinousar[0]); // can put num,array, string, obj, etc. in array`s
console.log(numAndDinousar[1]);
console.log(numAndDinousar[2]);
console.log(numAndDinousar[3]);
console.log(numAndDinousar[2][0]); // can call array in array
//p. 47
const xman = ['beast', 'mistic', 'wolverrine'];
console.log(xman.length); //3 배열의 개수가 나옴.
console.log(xman[xman.length]);
console.log(xman[xman.length - 1]); //2
console.log(xman[xman.length - 2]);
console.log(xman[xman.length - 3]);
console.log(xman[xman.length - 4]);
/*
책에서는 xman[xman.length-1]; 하면 '울버린' 이 왜 나오지...
프로그래밍은 숫자 카운트를 0부터함. length 속성은 1부터함.
0,1,2,3,4,5,6 => 프로그래밍의 기본 카운팅
1,2,3,4,5,6,7 => length 속성의 카운팅
*/
/* p. 48~49
element addition in array 
.push();  // single,plural element at back
.concat();  // ??
.unshift(); // single,plural element at front
.spilce(0,0,'n');  (location,  remove the number of factor`s, add 'factor')
*/
const animal = ['cat', 'dog', 'human'];
animal.push('humanDogs', 'HugeDogHuman`s');
console.log(animal);

const animal2 = ['cats', 'dogs', 'humans'];
animal2.unshift('humanDog`s', 'withHugeHuman');
console.log(animal2);

const animal3 = ['cats', 'dogs', 'humans'];
animal3.concat(animal, [animal2, [animal3]]);
console.log(animal3);

const beforeSplice = [0, 1, 2, 3, 4, 5, 6];
const a = beforeSplice.splice(1, 1, "bas");
console.log(beforeSplice);

const afterSplice = [0, 1, 2, 3, 4, 5, 6]
const b = afterSplice.splice(2, 3);
console.log(afterSplice);

const otherSplice = [0, 1, 2, 3, 4, 5, 6];
const c = otherSplice.splice(2, 0, '11');
console.log(otherSplice);
/* splice를 사용하기 위해서는 배열을 선언한 후에 다른 변수에 선언된 변수를 splice해야 함(?)
	let otherSplice = [0, 1, 2, 3, 4, 5, 6].splice(2,0,'11');
	console.log(otherSplice);
	VM77:1 Uncaught SyntaxError: Identifier 'otherSplice' has already been declared
	at <anonymous>:1:1
*/

/*p.50~51 
배열에서 원소 제거하기
.pop();  //마지막 원소 제거
.shift();  //첫번째 원소 제거 || 반환
*/
var pop = ["북극곰", "원숭이", "고양이", "라마"];
var popLast = pop.pop();
console.log(pop);
console.log(popLast);

var unshift = pop.unshift(popLast);
console.log(unshift);
console.log(pop);

/*p.52
배열 결합하기 (Concatenate)
.concat(secondArray);
*/ 
var 포 = ["알파카", "알락꼬리원숭기", "설인"];
var 파 = ["보아뱀", "고질라"];
var 포파 = 포.concat(파);
console.log(포);
console.log(파);
console.log(포파);
//여러배열 결합
var a2 = ["a", "b", "c"];
var d2 = ["d", "e", "f"];
var g2 = ["g", "h", "i"];
var adg2 = a2.concat(d2,g2);
console.log(a2);
console.log(d2);
console.log(g2);
console.log(adg2);


/*p.53
배열 원소 찾기
.indexOf(el);
*/

var col = ["red", "green", "blue"];
console.log(col.indexOf("blue"));
console.log(col.indexOf("red"));
console.log(col.indexOf("seablue")); ///return -1 => 배열에 포함되지 않음.

//배열을 문자열로 만들기
//.join();
var goodAnimal = ["monkey", "cat", "dog", "domabeam!!"];
console.log(goodAnimal.join(" "));
console.log(goodAnimal[0]+" "+goodAnimal[2]+ " "+ goodAnimal[3]+" "+ goodAnimal[2]); // 개고생

/*p.58 
  의사결정기
  Math.random();  //0, 1 사이의 숫자 하나를 무작위로 선택해서 반환
  Math.floor();   //소수점 이하 버리기
*/

console.log(Math.random()); //새로 고칠때마다 값이 변함
console.log(Math.floor(Math.random()*10)+"  random + floor");  //0부터 10미만의 정수 반환
console.log(Math.random());

var randomWords = ["pen", "pan", "fan", "fen", "pean"];
var randomWordsMath = Math.floor(Math.random()* 5);
console.log(randomWords[randomWordsMath]); //똥피하기 게임에서 똥 떨어지는 위치에 이용??

/* 
 var randomWordsMath = Math.floor(Math.random()* 5);
 에서 *5를 변수.length 로 변환해주면 배열에 원소가 추가되거나, 제거될때 일일히 변환해주지 않아도 
 알아서 변환할 수 있다.
*/

/*
객체 p.63~76
배열과 매우 비슷하지만, 배열에서는 '숫자'와 '문자열'을 이용하지만
문자열을 key, 또는 property라 부르고 
이를 가르키는 원소를 값 value라고 부른다.
*/

var 고양이 = {//중괄호 안에 있는 키값을 객체 리터럴이라고 부름.
  "다리" : 4,   
  "이름" : "똘낑이",
  색깔 : "삼색얼룩무늬"  //객체 안의 키값은 이미 문자열이란걸 알기에 "", ''를 넣지 않아도 됨.
};

console.log(고양이.이름); //따옴표를 붙이지 않고 호출할 수 있다.
console.log(고양이.다리); //조금 더 편한듯..?
console.log(고양이.색깔);

//객체에 값 추가하기.
var 강아지 = {};  //  변수명["key"] = value;
강아지["다리"] = 4; 
강아지.색깔 = "거무스름"; //=> 이렇게 추가 가능. 훨편함.
강아지["이름"] = "똥개";
console.log(강아지);
console.log(강아지.성별); // => 성별을 정의하지 않아 undefined

/*p.68
배열 + 객체
*/
var 공룡 = [
  {이름: "티라노사우루스 렉스", 연대: "백안기 후기"},
  {이름: "스테고사우르스", 연대: "쥐라구 후기"},
  {이름: "플라테오사우루스", 연대: "트라이아스기"}
];
console.log(공룡[0]);
console.log(공룡[2]);
console.log(공룡[0]["이름"]); //배열로 부를 수 있고
console.log(공룡[0].이름); //키로 부를 수 있고

var 민지 = {이름: "민지", 나이: 32,  헹운의숫자: [2,13,6,8,10,12,14,16] };
var 지훈 = {이름: "지훈", 나이: 29,  헹운의숫자: [3,6,9,12] };
var 서연 = {이름: "서연", 나이: 345, 헹운의숫자: [4,8,12,16] };
var 친구 = [민지, 지훈, 서연]; //배열이 각 객체를 참조.
console.log(친구[1]); //배열 2번의 지훈을 참조해 객체를 불러옴.
//Node에선 [3,6,9,12] //Chrome 개발툴에선 Array(4)
console.log(친구[2]);
console.log(친구[2].헹운의숫자[3]);
console.log(친구[0].헹운의숫자[7]);
console.log(친구[0].이름+"의 나이는 "+친구[0].나이);

//객체를 이용해 목록을 만들 수도있다.
// form을 이용해서 웹에서 작성한 페이지를 객체에 추가할 수도 있을거 같은느낌...

