import Item from "./components/item";

const App = () => {
  return(
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
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