import './App.css';
import React, { useEffect, useState } from 'react';
//&& : true면 보여주고 false면 안보여줌
function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState();
  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5; //가정
    setData(downloadData);
  };

  //실행시점 :
  //(1)App() 그림이 최초 그려질 때
  //(2)상태 변수가 변경될 때( 그게 dependencyList에 등록되어 있어야함)
  //상태 변수를 변경하되, 변경 전과 동일한 값으로 변경할 경우 set함수를 호출하였다 하더라도 useEffect는 작동하지 않습니다.

  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
