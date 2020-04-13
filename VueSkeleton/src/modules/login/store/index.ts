import {state} from './login.state';
import {mutations} from './login.mutations';
import {getters} from './login.getters';
import {actions} from './login.actions';

export const logInStore = {
    state,
    mutations,
    getters,
    actions
}