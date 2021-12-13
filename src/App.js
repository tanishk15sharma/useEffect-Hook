import "./App.css";
import InputCounter from "./components/CounteConditonally";
import Counter from "./components/Counterone";
import CountAuto from "./components/CountInterval";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <CountAuto />

      {/* <InputCounter /> */}
    </div>
  );
}

export default App;
