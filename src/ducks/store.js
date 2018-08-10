import { createStore } from 'redux';
import auth from './reducers/auth';
import form from './reducers/form'

export default createStore(reducer);