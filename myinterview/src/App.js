import logo from './logo.svg';
import First from './Compoundfirst';
import './App.css';
import UseSecondCompoundState from './secondcompoundusestate';
import UseThirdCompoundUseEffect from './Thirdcompounduseffect';
import Useeffectpresimple from './Useeffectpresimple';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>  <First>

         </First>
         <UseSecondCompoundState></UseSecondCompoundState>
         
        </p>
        <UseThirdCompoundUseEffect></UseThirdCompoundUseEffect>
<Useeffectpresimple></Useeffectpresimple>

        {/* <Thirdcompounduseffect></Thirdcompounduseffect> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        
      </header>
    </div>
  );
}

export default App;
