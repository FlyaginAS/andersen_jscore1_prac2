import logo from './logo.svg';
import './App.css';

import { foo, createCb } from './asynchronous-programming/task1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Вывод задач в консоле с ответами!</p>
      </header>
    </div>
  );
}

export default App;

/***********************TASKS********************************** */

/***********************TASK1********************************** */
console.log('********************TASK1**************************');
foo(5, createCb('cb'));
console.log('**correct x <= 10');
console.log('******************');
foo(20, createCb('cb'));
console.log('**correct x > 10 and "cb"');

/***********************TASK2********************************** */
console.log('********************TASK2**************************');
