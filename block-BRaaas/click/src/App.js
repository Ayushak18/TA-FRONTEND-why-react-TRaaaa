import './App.css';

function handleClick() {
  alert('Hello React Event');
}

function handleSecondClick() {
  alert('To learn React use https://reactjs.org');
  alert('React and ReactDOM works together');
  alert('Babel helps in writing JSX');
}

function handleNameClick(event) {
  let name = event.target.innerText;
  alert(`Hello ` + name);
}

// function Class(){
//   return <button onClick={handleNameClick}></button>
// }

let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function handleFruit(event) {
  alert(event.target.innerText);
}

function Fruit(props) {
  return <button onClick={handleFruit}>{props.value}</button>;
}

function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleSecondClick}>How can I help you?</button>
      <button onClick={handleNameClick}>Arya</button>
      <button onClick={handleNameClick}>John</button>
      <button onClick={handleNameClick}>Bran</button>
      {fruits.map((fruit, index) => (
        <Fruit key={index} {...fruit} />
      ))}
    </div>
  );
}

export default App;
