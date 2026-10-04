export const FORM_ACTIONS = {
  setValue: "SET_VALUE",
  submit: "SUBMIT",
  reset: "RESET",
};

export const initialState = {
  name: "",
  destination: "",
  email: "",
  tel: "",
  dateFrom: "",
  dateTo: "",
  comment: "",
  ageAgreement: "",
  rulesAgreement: "",
  status: "idle",
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case FORM_ACTIONS.setValue:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        status: "idle",
      };
    case FORM_ACTIONS.submit:
      return { ...initialState, status: "success" };
    case FORM_ACTIONS.reset:
      return { ...initialState };
    default:
      return state;
  }
};