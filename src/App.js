import "./styles.css";
import Card from "./Card";
import { colorsArray } from "./color";

export default function App({ randomNumber }) {
  return (
    <div className="App" style={{ color: colorsArray[randomNumber].bgColor }}>
      <Card randomNumber={randomNumber} />
    </div>
  );
}
