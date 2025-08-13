// for..in

for (변수 in 객체){  //객체의 프로퍼티 네임이 변수에 할당, 프로퍼티 개수 만큼 반복
  동작부분
}






// for..of 
for (변수 in 객체){  //배열의 요소가 변수에 할당 
  동작부분;
}

let month = [1,2,3,4,5,6,7,8,9,10,11,12]
for (let i = 0; i < month.length; i++){
  console.log(month[i]);
}

for (let element of month){
  console.log(element);
}