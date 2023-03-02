/* function sleep(repeatCount = 1) {
  console.log('자고 싶어요!');
}
 */
// sleep 함수 선언을 함수 표현식으로 바꿔보세요.

const sleep1 = function (repeatCount = 1) {
  console.log("졸려요~~~");
};

// sleep 화살표 함수 식으로 작성합니다.

const sleep = (repeatCount = 1) => {
  for (let i; i < repeatCount; i++) {
    console.log("졸려요!");
  }
};

sleep(10);
