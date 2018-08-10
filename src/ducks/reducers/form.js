
initialState = {
  title:'',
  image_URL:'',
  content:''
};

const FORM='FORM';

export function form(title, image_URL, content) {
  return {
    type: FORM,
    payload: {title,image_URL,content }
  };
}

export default function reducer(state = initialState, action) {
  switch (action) {
    case FORM:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function updateForm(title,image_URL,content){
return{ 
  type: FORM,
payload: {title,image_URL,content}
}
}