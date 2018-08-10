initialState = {
username:'',
password:''
};

const AUTH = "AUTH";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function auth(username,password) {
  return {
    type: AUTH,
    payload: { username,password }
  };
}