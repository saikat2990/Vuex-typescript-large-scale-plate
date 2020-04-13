import { Vue, Component } from 'vue-property-decorator';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class';
import { ILoginModel } from './models/ILoginModel';
import { AuthStorage } from '../../common/authStorage';

@Component
export default class LogIn extends Vue {
    @Action loginAction: void;

    async submit(user: any){
        await this.loginAction(user);
        this.$root.$emit('appnavbar');
        
        AuthStorage.isUserAuthorized()?
            this.$router.push('/employee').catch(error => {
                if (error.name != "NavigationDuplicated") {
                  throw error;
                }
              })
            :this.$router.push('/login').catch(error => {
                if (error.name != "NavigationDuplicated") {
                  throw error;
                }
              });
    }

    user: ILoginModel={
        email: '',
        password: ''
    }
}