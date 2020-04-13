import { MutationTree } from "vuex";

import { AuthStorage } from '../../../common/authStorage';

export const mutations: MutationTree<any> = {
    loginMutation(state,token: string){
        console.log(token);
        AuthStorage.setAuthToken(token);
    }
}