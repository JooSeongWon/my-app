import './App.css';
import React, { useState } from 'react';
import Sub from './Sub';

//&& : true면 보여주고 false면 안보여줌
function App() {
  console.log('App 실행');
  const [users, setUsers] = useState([]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '장보고' },
      { id: 4, name: '코스' },
    ];
    setUsers(sample);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}.{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
