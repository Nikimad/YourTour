import { useReducer } from "react";
import { reducer, initialState, FORM_ACTIONS } from "./index";
import Form from "./Form";

const FormContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    return dispatch({
      type: FORM_ACTIONS.setValue,
      payload: {
        field: name,
        value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    return dispatch({ type: FORM_ACTIONS.submit });
  };

  const handleReset = (e) => {
    e.preventDefault();

    return dispatch({ type: FORM_ACTIONS.reset });
  };

  return (
    <Form
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
      {...state}
    />
  );
};

export default FormContainer;
