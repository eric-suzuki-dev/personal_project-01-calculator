import { useState } from 'react';
import calculate from '../../logic/calculate/calculate.js';
import BtnPanel from '../BtnPanel/BtnPanel.jsx';
import Display from '../Display/Display.jsx';
import Wrapper from "../Wrapper/Wrapper.jsx"

const Calculator = () => {
    const [state, setState] = useState({
        current: '0',
        operand: 0,
        operator: null,
        isNextClear: false,
    });

    const btnHandler = (code) => {
        const nextState = calculate(code, state);
        setState(nextState);
    };
    return (
        <div>
            <Wrapper>
                <Display value={state.current} />
                <BtnPanel btnHandler={btnHandler} />
            </Wrapper>
        </div>
    );
};

export default Calculator;
