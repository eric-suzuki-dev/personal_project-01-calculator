const calculate = (button, state) => {
    if (isNumberBtn(button)) {
      return handleNumberBtn(button, state);
    }
  
    if (isOperatorBtn(button)) {
      return handleOperatorBtn(button, state);
    }
  
    if (isDotBtn(button)) {
      return handleDotBtn(state);
    }
  
    if (isDeleteBtn(button)) {
      return handleDeleteBtn(state);
    }
  
    if (isAllClearBtn(button)) {
      return handleAllClearBtn();
    }
  
    if (isEqualBtn(button)) {
      return handleEqualBtn(state);
    }
  
    return state;
  };
  
  export default calculate;
  
  export const State = {
    current: '0',
    operand: 0,
    operator: null,
    isNextClear: false,
  };
  
  function isNumberBtn(button) {
    return (
      button === '0' ||
      button === '1' ||
      button === '2' ||
      button === '3' ||
      button === '4' ||
      button === '5' ||
      button === '6' ||
      button === '7' ||
      button === '8' ||
      button === '9'
    );
  }
  
  function handleNumberBtn(button, state) {
    if (state.current === '0' || state.isNextClear) {
      return {
        current: button,
        operand: state.operand,
        operator: state.operator,
        isNextClear: false,
      };
    }
    return {
      current: state.current + button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }
  
  function isOperatorBtn(button) {
    return button === '+' || button === '-' || button === '*' || button === '/' || button === '%';
  }
  
  function handleOperatorBtn(button, state) {
    if (state.operator === null) {
      return {
        current: state.current,
        operand: parseFloat(state.current),
        operator: button,
        isNextClear: true
      };
    }
  
    const nextValue = operate(state);
    return {
      current: `${nextValue}`,
      operand: nextValue,
      operator: button,
      isNextClear: true
    };
  }
  
  function isDotBtn(button) {
    return button === '.';
  }
  
  function handleDotBtn(state) {
    if (state.current.indexOf('.') !== -1) {
      return state;
    }
  
    return {
      current: state.current + '.',
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }
  
  function isDeleteBtn(button) {
    return button === 'D';
  }
  
  function handleDeleteBtn(state) {
    if (state.current.length === 1) {
      return {
        current: '0',
        operand: state.operand,
        operator: state.operator,
        isNextClear: false
      };
    }
    return {
      current: state.current.substring(0, state.current.length - 1),
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    };
  }
  
  function isAllClearBtn(button) {
    return button === 'AC';
  }
  
  function handleAllClearBtn() {
    return {
      current: '0',
      operand: 0,
      operator: null,
      isNextClear: false
    };
  }
  
  function isEqualBtn(button) {
    return button === '=';
  }
  
  function handleEqualBtn(state) {
    if (state.operator === null) {
      return state;
    }
    const nextValue = operate(state);
    return {
      current: `${nextValue}`,
      operand: 0,
      operator: null,
      isNextClear: true
    };
  }
  
  function operate(state) {
    const current = parseFloat(state.current);
    switch (state.operator) {
      case '+':
        return state.operand + current;
      case '-':
        return state.operand - current;
      case '*':
        return state.operand * current;
      case '/':
        return state.operand / current;
      case '%':
        return state.operand * (current / 100);
      default:
        return current;
    }
  }
  