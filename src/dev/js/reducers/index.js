import{combineReducers} from 'redux';
import userReducer from './reducer.user';
import playerReducer from './reducer.players'
const allReducers=combineReducers({
    users:userReducer,
    players:playerReducer
})
export default allReducers; 