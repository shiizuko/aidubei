import logo from '../ecology-bag.png';
import '../App.css';
import CustomButton from './CustomButton';


function Welcome() {

  return (
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <h1 className="titulo-boas-vindas">
            <span className="titulo-nutrindo">Nutrindo a</span> <br /> Sustentabilidade
         </h1>
      <CustomButton></CustomButton>
      </header>
      </div>
  );
}

export default Welcome;
