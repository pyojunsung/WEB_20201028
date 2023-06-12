/*document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수

function search_message(){
   let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
       alert("검색을 수행합니다!");
       search_array.push(search_str.value); // 배열에 검색어 추가
       if(search_array.length > 10){ // 검색어 목록이 10개 이상인 경우 첫 번째 요소 제거
           search_array.shift();
       }
       let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }
} */

document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수
const restrictedWords = ["단어1", "단어2", "단어3"]; // 검색 제한 단어

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
    let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
    document.querySelector("#form_main").submit();
  }
}