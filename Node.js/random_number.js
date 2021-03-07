// goormIDE로 실행할 때는 꼭 저장하자
// commit 후 push 저장됐는지 확인
// 경로 잘 설정해서 실행시켜주고 
// cd Node.js 후 node random_number.js

// 인자로 주어진 설정에 따른 임의의 데이터 생성
const createData = ({xMin, xMax, weight, bias, count}) => {
  const xArray = []
  const yArray = []

  for (let i = 0; i < count; i++) {
    let yValue = 0
    const xValue = Math.round((xMin + Math.random() * (xMax - xMin)) * 10) / 10
    xArray.push(xValue)
    yValue += xValue * (weight * randomOffset(0.05));

    yValue += bias * randomOffset(0.005)
    yValue = Math.round(yValue * 10) / 10
    yArray.push(yValue)
  }

  return {
    xAry: xArray,
    yAry: yArray
  }
}

// 주어진 범위 이내의 오차값 적용
// 삼항 연산자( 조건 ? 참값 : 거짓값) 0.5보다 크면 1이고 0.5보다 작거나 같으면 -1
const randomOffset = (max) => {
  const offset = max * Math.random() * (Math.random() > 0.5 ? 1 : -1)
  return 1 + offset
}

// 여러 값을 넣기 위해 {}를 넣는다..
const resultData = createData({
  xMin: 0,      // x 최소값
  xMax: 25,     // x 최대값
  weight: 3.2,  // 기울기
  bias: 256,    // x = 0시 y좌표
  count: 100    // 생성할 점 갯수
})

// 주피터 노트북에 붙여넣을 것
console.log(`x = [${resultData.xAry}] \n\n y = [${resultData.yAry}]`)

// 플라스크 웹앱에 붙여넣을 것
console.log(resultData.xAry.toString())
console.log(resultData.yAry.toString())