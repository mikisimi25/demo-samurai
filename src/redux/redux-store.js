import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

const { createStore, combineReducers, applyMiddleware,compose} = require("redux");

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer, 
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;