import Item from "./components/item";

const App = () => {
  return(
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item />
        <Item />
        <Item />
      </ul>
    </div>    
  )
}

export default App;

// function app() {
//   return(
//     <h1>Hello World!</h1>
//   )
// }