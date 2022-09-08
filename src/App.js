import PersonCard from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={"45"} hairColor={"Black"}/>
      <PersonCard lastName={"Smith"} firstName={"John"} age={"88"} hairColor={"Brown"}/>
      <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={"50"} hairColor={"Brown"}/>
      <PersonCard lastName={"Roh"} firstName={"Alex"} age={"33"} hairColor={"Black"}/>
    </div>
  );
}

export default App;
