import PropTypes from 'prop-types';
<<<<<<< HEAD
import './BtnPanel.css';

const BtnPanel = ({ btnHandler }) => {
    return (
        <div className='btnPanel'>
            <div>
                <button onClick={() => btnHandler('AC')}>AC</button>
                <button onClick={() => btnHandler('D')}>Delete</button>
                <button onClick={() => btnHandler('%')}>%</button>
                <button onClick={() => btnHandler('/')}>/</button>
            </div>
=======
import "./BtnPanel.css";

const BtnPanel = ({ btnHandler }) => {
  return (
    <div className='btnPanel'>
      <div>
        <button onClick={() => btnHandler("7")}>7</button>
        <button onClick={() => btnHandler("8")}>8</button>
        <button onClick={() => btnHandler("9")}>9</button>
        <button onClick={() => btnHandler("AC")}>AC</button>
      </div>
>>>>>>> 26f34cb4b228b21da625fcabaf6f9e60f8a4f7dc

            <div>
                <button onClick={() => btnHandler('7')}>7</button>
                <button onClick={() => btnHandler('8')}>8</button>
                <button onClick={() => btnHandler('9')}>9</button>
                <button onClick={() => btnHandler('*')}>*</button>
            </div>

            <div>
                <button onClick={() => btnHandler('4')}>4</button>
                <button onClick={() => btnHandler('5')}>5</button>
                <button onClick={() => btnHandler('6')}>6</button>
                <button onClick={() => btnHandler('-')}>-</button>
            </div>

            <div>
                <button onClick={() => btnHandler('1')}>1</button>
                <button onClick={() => btnHandler('2')}>2</button>
                <button onClick={() => btnHandler('3')}>3</button>
                <button onClick={() => btnHandler('+')}>+</button>
            </div>

            <div>
                <button className='zero' onClick={() => btnHandler('0')}>0</button>
                <button onClick={() => btnHandler('.')}>.</button>
                <button onClick={() => btnHandler('=')}>=</button>
            </div>
        </div>
    );
};

BtnPanel.propTypes = {
    btnHandler: PropTypes.func.isRequired,
};

export default BtnPanel;
