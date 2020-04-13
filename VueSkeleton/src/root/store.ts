import Vue from 'vue';
import Vuex from 'vuex';
import { employeeStore} from '../modules/employee/store/index';
import { logInStore } from '../modules/login/store/index'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: ({
        employeeStore,
        logInStore
    }),
});