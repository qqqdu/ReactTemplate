import React from 'react';
import './App.css';
import logo from 'logo.jpeg'
import Table from 'container/table'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          嗨，我是小R，你选择了React-Hook，太棒了，让我们开始吧
        </p>
        <Table/>
        <a
          className="App-link"
          href="https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Hook
        </a>
      </header>
    </div>
  );
}

export default App;
