import { useReducer } from "react";
import { reducer, initialState, FORM_ACTIONS } from "./index";
import Form from "./Form";

const FormContainer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    const { name, value } = e.target;

    return dispatch({
      type: FORM_ACTIONS.setValue,
      payload: {
        field: name,
        value,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    return dispatch({ type: FORM_ACTIONS.submit });
  };

  const onReset = (e) => {
    e.preventDefault();

    return dispatch({ type: FORM_ACTIONS.reset });
  };

  return (
    <>
      <Form
        onChange={onChange}
        onSubmit={onSubmit}
        onReset={onReset}
        {...state}
      ></Form>
    </>
  );
};

export default FormContainer;
