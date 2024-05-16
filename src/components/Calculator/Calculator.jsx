import BtnPanel from "../BtnPanel/BtnPanel.jsx";
import Display from "../Display/Display.jsx";

const Calculator = () => {

    const btnHandler = (code) =>{
        console.log(code);
    }
    return (
        <div>
            <Display />
            <BtnPanel btnHandler={btnHandler}/>
        </div>
    );
};

export default Calculator;
