import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Field from './components/Field';
import {fields} from './data';

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Cards">
        {fields.map(field => 
          <Card 
            key={field.name}
            field={field}
          ></Card>
        )}
      </div>
      <footer className="footer"></footer>
      {/* <div>
        {fields.map(field => 
          <Field 
            key={field.name}
            field={field}
          ></Field>
        )}
      </div> */}
    </div>
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
  );
}