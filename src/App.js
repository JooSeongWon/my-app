import './App.css';
import React, { useState } from 'react';

//&& : true면 보여주고 false면 안보여줌
function App() {
  let sample = [
    /////asdsads
    { id: 1, name: '활' },
    { id: 2, name: '칼' },
    { id: 3, name: '총' },
    { id: 4, name: '창' },
  ];

  console.log('APP 실행됨');
  const [users, setUsers] = useState(sample);
  const [num, setNum] = useState(5);

  const download = () => {
    setUsers([...sample, { id: num, name: '조자룡' }]); //깊은복사로 레퍼런스 변경 -> 한번 더 그림
    setNum(num + 1);
  };
  return (
    <div>
      <button onClick={download}>다운로드</button>
      <h1>
        {users.map((u) => (
          <h1>
            {u.id}. {u.name}
          </h1>
        ))}
      </h1>
    </div>
  );
}

export default App;
