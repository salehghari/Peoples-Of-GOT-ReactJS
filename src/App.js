import './styles.css'
import { useState } from 'react';
import Header from './components/Header'
import Card from './components/Cards'
import Data from './data'

export default function App() {
  const [active, setActive] = useState(0)

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const houses = ["Starks", "Lannisters", "Baratheons", "Targaryens", "Greyjoys", "Tyrells", "Tullys", "Redwyne", "Freys", "Arryns", "Dothrakis"]
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="buttons-holder">
          {houses.map((house, i) => (
            <button className="button" key={i} onClick={() => setActive(i)}>{house}</button>
          ))}
        </div>
        <div>
          {array.map((number) => (
            active === number && <Card key={number} data={Data} index={number} />
          ))}
        </div>
      </div>
    </div>
  );
}