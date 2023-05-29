import '../App.css';
import {Container, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MultipleSelectChip from './Chip';
function Signup() {
    
const navigate = useNavigate();
function handleClickHome() {
    console.log("the link was clicked")
    navigate('/home');
}
    return (
        <div className='App-signup'>
        <Container>
        <h1 className='title-signup'>Registrar</h1>
        <p className='subtitle-signup'> Crie uma conta para começar a fazer a diferença!</p>
        <TextField fullWidth label="Nome" margin="normal" id="fullWidth" color='success'/>
        <TextField fullWidth label="Email" margin="normal" id="fullWidth" color='success'/>
        <TextField fullWidth label="Telefone" margin="normal" id="fullWidth" color='success'/>
        <MultipleSelectChip margin="normal" />
        <button className='button-signup' onClick={handleClickHome}>Registrar</button>
        </Container>
        </div>
    );
}

export default Signup;