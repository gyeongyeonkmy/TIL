//trim() 문자열 양 끝의 공백을 제거한 새로운 문자열 반환
const greeting = "  HELLO WORLD  "
console.log(greeting.trim());


//split() 지정한 구분자를 이용하여 객체를 여러개의 문자열로 나눈다
const address = "대한민국-인천시-서구"
console.log(address.split("-"))   //[ '대한민국', '인천시', '서구' ] 반환

// object
const user = {
  userName: "Tim",
  age: 23
};

console.log(user.age);
console.log(user["userName"]);
let key = "age";
console.log(user[key]);


//spread '...' 
const copyUser = {...user};
console.log(copyUser);
//console.log(copyuser === user); false. 값은 같지만 서로 다른객체임

  //한쪽을 수정해도 영향받지 않지만, 중첩 객체가 있을 경우 안쪽 객체는 여전히 공유됨
  // const user = { name: "Alice", address: { city: "Seoul" } };
  //const copyUser = { ...user };
  //copyUser.address.city = "Busan";
  //console.log(user.address.city);   "Busan" (내부 객체는 여전히 참조 공유)

//병합
  const User = { name: "Alice", age: 25 };
  const extra = { city: "Seoul", job: "Developer" };

  const merged = { ...User, ...extra };
  console.log(merged); // { name: "Alice", age: 25, city: "Seoul", job: "Developer" }

  //덮어쓰기
  const User1 = { name: "Alice", age: 25 };
  const updatedUser = { ...User1, age: 30 }; // age 덮어쓰기
  console.log(updatedUser); // { name: 'Alice', age: 30 }
  
  //제거
  const user2 = { name: "Alice", age: 25, city1: "Seoul" };
  const { city1, ...withoutCity } = user;

  console.log(withoutCity); // { name: 'Alice', age: 25 }


// dsetruting
  //변수명변경
  const user4 = { name: "Alice", age: 25 };
  const { name: userName } = user4; 

  console.log(userName); // "Alice" 

  //기본값 설정
  const user5 = { name4: "Alice" };
  const { name4, city3 = "Seoul" } = user5;

  console.log(city3); // "Seoul" user에 city가 없으므로 기본값 사용

  //중첩 구조 분해
  const user6 = {name: "Alice",
  address: { city: "Seoul", zip: "12345" }
  };

  const { address: { city } } = user6;
  console.log(city); // "Seoul"

  //나머지 속성 모으기
  const user7 = { name: "Alice", age: 25, city: "Seoul" };
  const { name, ...rest } = user7;

  console.log(name); // "Alice"
  console.log(rest); // { age: 25, city: "Seoul" }



  // 문제 1
// 0부터 9까지의 숫자 중에서 짝수만 출력하세요
let i = 0;
while (i < 10){
  console.log(i)
  i = i + 2;
}

// 문제 2
// 0부터 9까지 짝수를 for 반복문으로 출력하세요
for (let i = 2; i < 10; i = i+2){
  console.log(i);
}

    // 증가 패턴이 단순하고 반복범위가 명확할 때는 for
    // 증가 방식이나 종료조건이 복잡할 땐 while 많이 쓰임


// 문제 3
// break를 사용해서
// 0부터 9까지의 숫자 중에서 홀수만 출력하세요

let j = 1
while (true){   //무한루프 시작, 종료조건 무조건 안에 있어야 함
  console.log(j);
  if (j === 9){
    break;
  }
  j = j + 2  //출력식 먼저, 이후 증가식이 거의 디폴트
}


// 문제 4
// 2 이상 9 이하의 자연수 n이 주어지면 구구단 중 n단을 출력하는 함수를 작성하세요.
// 예를 들어 n이 3인 경우 3단이 출력되면 됩니다.
// 출력 예시
// 3 X 1 = 3
// 3 X 2 = 6
// ...
// 3 X 9 = 27
// 결과값이 아니라 문자열을 출력해야하기 때문에
function printGugudan(n){
  for (let i = 1; i < 10; i++){
    console.log(`${n} X ${i} = ${n * i}`)
  }
}
printGugudan(4)


// 문제 5
// 양의 정수 n이 주어지면 1부터 n까지 합을 리턴하는 함수를 작성하세요.
function makeSum(n){
  let sum = 0
  for (let i = 0; i <= n; i++){
    sum += i;
  }
  return sum; // 리턴은 결과값 재활용 가능, 콘솔은 그냥 값만 보여줌. 
  }             // 실무에서는 주로 리턴

console.log(makeSum(6))

// 문제 6
// 양의 정수 n과 k가 주어지면
// 1 이상 n 이하의 자연수중에서
// k의 배수의 합을 리턴하는 함수를 작성하세요.

function Q6 (n,k){
  let sum = 0
  for (let i = 1; i <= n; i++){
    if (i % k === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(Q6(10,3))


function Q6a(n,k){
  let sum = 0; 
  for (let i = k; i <= n; i = i + k){
    sum += i
  }
  return sum;
}

console.log(Q6a(10,3))



// 문제 7
// 2 이상의 양의 정수 n이 주어지면
// n이 소수인지 아닌지 참 또는 거짓을 리턴하는 함수를 작성하세요.
// 소수란? 3은 소수입니다. 3의 약수는 1, 3
// 소수란? 7은 소수입니다. 7의 약수는 1, 7
// 소수란? 8은 소수가 아닙니다. 8의 약수는 1, 2, 4, 8

function makeSum7(n){ // 여러개의 수로 나눠봐야할 거 아냐
  if (n % n === 0 && n % 1 === 0){
    console.log("true")
  }else {
    console.log("false")
  }
}

function checkPrimeNumber(n){
  let divideNumbers = [];
  for (let i = 1; i <= n; i++){ // 2부터 시작하면 약수 2개가 나올 수가 없음
    if (n % i === 0){
      divideNumbers.push(i);
    }
  }
  if (divideNumbers.length === 2){
    return true;
  }
  return false;
}

console.log(checkPrimeNumber(10))
console.log(checkPrimeNumber(7))

// 문제 8
// 2 이상의 양의 정수 n이 주어지면
// 2 이상 n 이하의 숫자 중에서
// 소수의 개수를 리턴하는 함수를 작성하세요.

function Q8(n){
  const divideNumbers = [];
  for (let i = 1; i <= n; i++){
    if(n % i === 0){
      divideNumbers.push(i);
    }
  }
  console.log(divideNumbers.length)
}
Q8(10) // n의 소수의 개수 구하기가 됨.


function getPrimeNumberCount(n){
  let count = 0
  for (let i = 1; i <= n; i++){
    if(checkPrimeNumber(i) === true){
      count++; // 소수를 발견하면 카운트 1개 증가
    }
  }
  return count;
}
console.log(getPrimeNumberCount(10))

// 문제 9
// n이 주어지는 경우, 1 이상 n 이하의 양의 정수 5개를 뽑아서 배열에 담아 리턴하는 함수를 작성하세요.
// n은 5보다 크거나 같습니다.
// 참고!
// Math.random(): 이 함수는 0 이상 1 미만의 소수를 무작위로 반환합니다
// Math.floor(): 이 함수는 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환합니다.
// ????



