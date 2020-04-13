import { ActionTree } from 'vuex';
import { ILoginModel } from '../models/ILoginModel';
import * as api from '../service/login.service';

export const actions: ActionTree<any,any> ={

    async loginAction(context, user: ILoginModel){
        const response = await api.userlogin(user);
        console.log(response.token);
        context.commit('loginMutation',response.token);
        console.log(user);
    },
}