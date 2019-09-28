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
          嗨，我是小R，你选择了Redux，太棒了，让我们开始吧
        </p>
        <Table/>
        <a
          className="App-link"
          href="https://www.redux.org.cn/docs/basics/UsageWithReact.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux
        </a>
      </header>
    </div>
  );
}

export default App;
