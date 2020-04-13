import { GetterTree } from 'vuex';
import { state } from './employee.state';

export const getters: GetterTree<any,any> = {
    employeeList: (state) => state.employeeList,
    employee: (state)=> state.employee,
}