# WEB_20201028
웹프로그래밍(1) 소스코드
## 2023년 3월 22일 깃 허브 테스트 완료

3주차 응용문제
<td bgcolor="green" width="50"><b>영화</b></td><td width="80" bgcolor="blue">아저씨</td>
<td width="80" bgcolor="blue">아저씨</td>
<td>어머니</td><td width="50">할머니</td><td>할아버지</td></tr><! 1행추가>
<tr bgcolor="red"><td width="50">음악</td>
	<td bgcolor="red">KPOP</td><td bgcolor="red">JPOP</td><td bgcolor="red">ROCK</td>
	<td bgcolor="red">ROCK2</td><td rowspan="2">EUROBEAT</td></tr><! 2행추가>
<tr bgcolor="red"><td colspan="2" width="50">게임</td><td>LOL</td><td>WOW</td><td>SUDDEN</td></tr><!3행 추가>
<tr><td colspan = "6" width="100">외부 사이트 링크</td></tr>
<tr><td colspan="2"><a href="https://www.naver.com/">네이버</a></td>
	<td colspan="2" bgcolor="yellow"><a href="https://www.daum.net/">다음</a></td>
	<td colspan="2" bgcolor="purple"><a href="https://www.nate.com/">네이트</a></td></tr>
	
6주차 응용문제
var search_array = []; // 빈 배열 – 전역 변수
const restrictedWords = ["단어1", "단어2", "단어3"]; // 검색 제한 단어

7주차 응용문제-1
function search_message() {
  let search_str = document.querySelector("#search_txt");
  if (search_str.value.length === 0) {
    alert("검색어가 비었습니다. 입력해주세요");
  } else if (restrictedWords.includes(search_str.value)) {
    alert("검색이 제한되었습니다!");
  } else {
    alert("검색을 수행합니다!");
    search_array.push(search_str.value); // 배열에 검색어 추가
    if (search_array.length > 10) {
      search_array.shift(); // 검색어 목록이 10개 이상인 경우 첫 번째 요소 제거
    }

7주차 응용문제-2
function show_time(){
        let divClock = document.getElementById('Time');
        divClock.innerText = "남은 시간은" + close_time2 + "초입니다."; // 10초 삽입 시작
        close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000);  //1초마다 갱신
}

9주차 응용문제
function login_check() {
  let emailRegex = /^[\w.-]+@[A-Za-z_-]+(?:\.[A-Za-z]+)+$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (!emailRegex.test(email)) {
    alert("올바른 이메일 형식이 아닙니다.");
    return false; // 로그인이 되지 않도록 함
  }

  if (!passwordRegex.test(password)) {
    alert("올바른 패스워드 형식이 아닙니다.");
    return false; // 로그인이 되지 않도록 함
  }

  login();
}

10주차 응용문제
function login_count() {
  let count = getCookie("login_cnt");
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }
  setCookie("login_cnt", count, 1); // 1일 동안 쿠키에 카운트 저장
}

function logout_count() {
  let count = getCookie("logout_cnt");
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }
  setCookie("logout_cnt", count, 1); // 1일 동안 쿠키에 카운트 저장
}

11주차 응용문제
 if (login_fail_count() >= 3) {
    alert("로그인이 제한되었습니다. 잠시 후 다시 시도해주세요.");
    return false; // 로그인이 되지 않도록 함
  }

12주차 응용문제
function session_join_set(){ //세션 저장(객체)    
    let f_name = document.querySelector("#firstName").value;
    let l_name = document.querySelector("#lastName").value;
    let b_day = document.querySelector("#birthdayDate").value;
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress").value;
    let p_number = document.querySelector("#phoneNumber").value;
    let class_check = document.querySelector(".select form-control-lg");
    let random = new Date(); // 랜덤 타임스탬프
    
    const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
    console.log(newSignUp.fullName); // John Doe
    console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890
    
    if (sessionStorage) {
        const objString = JSON.stringify(newSignUp); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encryted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}

13주차 응용문제
 <img src="img/2017042000056_0.jpg"
                  alt="Generic placeholder image" class="img-fluid rounded-circle border border-dark border-3"
                  style="width: 70px;">
				  
