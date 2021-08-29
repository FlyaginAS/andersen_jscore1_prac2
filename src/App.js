import logo from './logo.svg';
import './App.css';

import { foo, createCb } from './asynchronous-programming/task1';
import {
  parseJSON,
  successCb,
  failureCb,
} from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';

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
parseJSON('{"x":10}', successCb, failureCb);
console.log('**correct Success parse and {x:10}');
console.log('******************');
parseJSON('{x}', successCb, failureCb);
console.log('**correct "Failure Parse" \n Syntax error bla-bla...');
console.log('******************');

/***********************TASK3********************************** */
console.log('********************TASK3**************************');
delay(1000).then((value) =>
  console.log(`Done with ${value}`, '**correct "Done with 100"')
);
