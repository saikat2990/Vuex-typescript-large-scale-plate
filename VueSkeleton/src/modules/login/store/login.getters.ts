import { GetterTree } from 'vuex';

export const getters: GetterTree<any,any>  = {
    token: (state) => state.token,
}