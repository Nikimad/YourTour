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
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case "SET_VALUE":
      return { ...state, [action.payload.field]: action.payload.value };
    case "SUBMIT":
      return { ...initialState };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
