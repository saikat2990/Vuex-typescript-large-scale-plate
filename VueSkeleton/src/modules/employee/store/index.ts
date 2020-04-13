import {state} from './employee.state';
import {mutations} from './employee.mutations';
import {getters} from './employee.getters';
import {actions} from './employee.actions';

export const employeeStore = {
    state,
    mutations,
    getters,
    actions
}