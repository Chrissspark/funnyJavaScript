/* p.41
    배열 = 여러개의 데이터 값을 하나의 변수에 저장가능, 배열도 객체
    배열을 리터럴과 array 객체 생성자를 통해 이용할 수 있다.
    new 연산자를 이용해 생성할 수 있다.
    배열의 길이는 length property에 자동 갱신.  */
/*                              
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
*/                              
    const dinosaurTOP3 = ['티라노사우르스', '벨로키랍토르', '스테고사우루스'];

    //배열을 사용하지 않았을 경우 아래처럼 변수를 많이 선언해야한다. 
    //하나의 변수에 같은 부류의 것들을 관맇하는 것이 편리하며, 추후 변경이 있을때도 용이하다.
    const TOP1 = '티라노사우르스';
    const TOP2 = '벨로스키랍토르';
    const TOP3 = '스테고사우루스';

    const arr =[]; // empty arr creation
        arr[0] = 'a'; // put elements in array
        arr[1] = 'b';
        arr[2] = 'c';
        arr[3] = 'd';
    console.log(arr);
//p. 46
    const numAndDinousar = [3,'test',['tree','stego','3627.5'],10];
    console.log(numAndDinousar[0]); // can put num,array, string, obj, etc. in array`s
    console.log(numAndDinousar[1]);
    console.log(numAndDinousar[2]);
    console.log(numAndDinousar[3]);
    console.log(numAndDinousar[2][0]); // can call array in array
//p. 47
    const xman = ['beast', 'mistic','wolverrine'];
<<<<<<< HEAD
    console.log(xman.length); //3 배열의 개수가 나옴.
    console.log(xman[xman.length]);
    console.log(xman[xman.length-1]); //2
    console.log(xman[xman.length-2]);
    console.log(xman[xman.length-3]);
    console.log(xman[xman.length-4]);
=======
    console.log(xman.length); //3
    console.log(xman[xman.length-1]); //2
//책에서는 xman.length-1 하면 '울버린' 나온다는데 숫자가 줄어드는건 뭐징

>>>>>>> 8728f3c977cdba1763980841973b35a9f50268d4
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
<<<<<<< HEAD


const animal = ['cat','dog','human'];
      animal.push('humanDogs','HugeDogHuman`s');
      console.log(animal);

const animal2  = ['cats','dogs','humans'];
animal2.unshift('humanDog`s','withHugeHuman');
console.log(animal2);

const animal3  = ['cats','dogs','humans'];
animal3.concat(animal,[animal2,[animal3]]);
console.log(animal3);

const beforeSplice = [0, 1, 2, 3, 4, 5, 6];
const a = beforeSplice.splice(1,1,"bas");
console.log(beforeSplice);

const afterSplice = [0, 1, 2, 3, 4, 5, 6]
const b = afterSplice.splice(2,3);
console.log(afterSplice);

const otherSplice = [0, 1, 2, 3, 4, 5, 6];
const c = otherSplice.splice(2,0,'11');
console.log(otherSplice);
/* splice를 사용하기 위해서는 배열을 선언한 후에 다른 변수에 선언된 변수를 splice해야 함(?)
        let otherSplice = [0, 1, 2, 3, 4, 5, 6].splice(2,0,'11');
        console.log(otherSplice);
        VM77:1 Uncaught SyntaxError: Identifier 'otherSplice' has already been declared
        at <anonymous>:1:1
*/

=======
/*
const a = [];
a.push('s');
console.log(a);
a = {}

let b = [];
b.push('s');
console.log(b);
b = {}
*/
>>>>>>> 8728f3c977cdba1763980841973b35a9f50268d4
