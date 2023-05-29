import { useNavigate } from 'react-router-dom';


function CustomButton() {

const navigate = useNavigate();

function handleClickSignup() {
    console.log("the link was clicked")
    navigate('/signup');
}
    return (
        <div>
             <button onClick={handleClickSignup} className="button-getstarted">
                Começar
            </button>
        </div>
    );
}

export default CustomButton