export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  operationValue: "0",
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { 
      currentValue: `${value}`,
      operationValue: `${value}`,
   };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    operationValue: `${state.operationValue}${value}`,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        operationValue: `${previous} + ${current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        operationValue: `${previous} - ${current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        operationValue: `${previous} * ${current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        operationValue: `${previous} / ${current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

// calculator function
const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return initialState;
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;