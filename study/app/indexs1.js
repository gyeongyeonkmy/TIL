import fs from "fs";    //File system 모듈: 파일 읽기/쓰기
import promptSync from "prompt-sync"; // 콘솔에서 사용자 입력 받기

const prompt = promptSync();
let me;   // 변수 선언만. undefined
while (me === undefined) {
  const choiceStr = prompt("[1]. 로그인, [2]. 회원가입, [3]. 종료: ");  //prompt() :문자열 입력을 받는 함수. 반환도 문자열로
  const choice = Number(choiceStr);   //숫자로 변환
  // 변수에 값 지정하기 전까진 무한루프
}
  if (choice === 1) {
    const inputEmail = prompt("이메일을 입력해주세요: ");
    const inputPassword = prompt("비밀번호를 입력해주세요: ");

    const readContent = fs.readFileSync("users.csv");   //users 파일의 로그인정보(원본 데이터)를 가져옴 ..(Buffer 타입으로)
    const content = String(readContent);  //buffer를 문자열로 변환   //  *buffer(택배상자) : node.js에서 이진 데이터(바이너리 데이터)를 다루기 위해 제공하는 특수한 자료구조

    const parsedContent = content.trim().split("\n");   //앞뒤 공백, 불필요한 줄바꿈 제거
    for (let i = 0; i < parsedContent.length; i = i + 1) {    //for문: users 파일의 정보탐색. 맞는거 있나?
      const [storedEmail, storedPassword, storedNickname] = parsedContent[i].split(",");    // 바보라 나눠줌 뭐가 이메일인지 몰라
      if (inputEmail === storedEmail && inputPassword === storedPassword) {     //로그인 정보 검증
        console.log("로그인에 성공했어요!");
          me = {
          email: storedEmail,
          password: storedPassword,
          nickname: storedNickname,
        } //객체저장 me에 뭉탱이겠지?
        break;
      }
    }
  }
  if (me === undefined) {
        console.log("일치하는 이메일 또는 비밀번호가 없습니다.");
      }
      else if (choice === 2) { 
      const inputEmail = prompt("이메일을 입력해주세요: ");
      const inputPassword = prompt("비밀번호를 입력해주세요: ");
      const inputNickname = prompt("닉네임을 입력해주세요: ");
  
      const readContent = fs.readFileSync("users.csv");
      const content = String(readContent);
      
      let isEmailDuplicated = false;    //중복이면 실패
      const parsedContent = content.trim().split("\n");
      for (let i = 0; i < parsedContent.length; i = i + 1) {
        const storeEmail = parsedContent[i].split(",")[0];
        if (inputEmail === storeEmail) {
          isEmailDuplicated = true;
          console.log("이미 존재하는 계정입니다");
          break;
        }
      }
  
      if (isEmailDuplicated === false) {
        fs.appendFileSync("users.csv", `${inputEmail},${inputPassword},${inputNickname}\n`);
      }
    } else if (choice === 3) {
      console.log("프로그램을 종료합니다.");
      process.exit(0);
    } else {
      console.log("입력이 잘못되었습니다.");
    }
  
  
  console.log(`${me.nickname}님 안녕하세요.`);
  console.log("[1]. 메모 작성하기, [2]. 메모 불러오기, [3]. 로그아웃: ");