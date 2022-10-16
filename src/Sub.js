import React from 'react';
//rsc 자동완성

let num = 10;
const Sub = () => {
  return (
    <div>
      <h1>Sub입니다.</h1>
    </div>
  );
};

export { num };
export default Sub;

//export default -> 하나만 가능

//num 변수를 export로 보내고
//부모가 그 변수를 import해서 사용
