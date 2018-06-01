/* p.41
    배열 = 여러개의 데이터 값을 하나의 변수에 저장가능, 배열도 객체
    배열을 리터럴과 array 객체 생성자를 통해 이용할 수 있다.
    new 연산자를 이용해 생성할 수 있다.
    배열의 길이는 length property에 자동 갱신.
*/
    const dinosaurTOP3 = ['티라노사우르스', '벨로키랍토르', '스테고사우루스'];

    //배열을 사용하지 않았을 경우 아래처럼 변수를 많이 선언해야한다. 
    //하나의 변수에 같은 부류의 것들을 관맇하는 것이 편리하며, 추후 변경이 있을때도 용이하다.
    const TOP1 = '티라노사우르스';
    const TOP2 = '벨로스키랍토르';
    const TOP3 = '스테고사우루스';

    const arr =[]; //empty arr creation
        arr[0] = 'a'; // input elements in array
        arr[1] = 'b';
        arr[2] = 'c';
        arr[3] = 'd';
    console.log(arr);

    const numAndDinousar = [3,'test',['tree','stego','3627.5'],10];
    console.log(numAndDinousar[0]); // can put num,array, string, obj, etc. in array`s
    console.log(numAndDinousar[1]);
    console.log(numAndDinousar[2]);
    console.log(numAndDinousar[3]);
    console.log(numAndDinousar[2][0]); // can call array in array

    const xman = ['beast', 'mistic','wolverrine'];
    console.log(xman.length); //3
    console.log(xman[xman.length-1]); //2
//책에서는 xman.length-1 하면 '울버린' 나온다는데 숫자가 줄어드는건 뭐징

/*
element addition in array 
    .push();
    .concat();
    .unshift();
    .spilce(0,0,'n');
*/
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
