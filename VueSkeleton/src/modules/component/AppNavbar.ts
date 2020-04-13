import { Vue, Component } from 'vue-property-decorator';
import { AuthStorage } from '../../common/authStorage';
import eventBus from '@/common/plugins';

@Component
export default class AppNavbar extends Vue {
    isLogins: boolean;
    created(){
        AuthStorage.isUserAuthorized()?
            this.isLogins=true :
            this.isLogins=false;
    }
    async logOut(){
        await AuthStorage.LoginOff();
        this.isLogins = false;
        this.$router.push('login');
    }
    login(){
        this.isLogins =true;
        console.log(this.isLogins);
    }
    mounted() {
        this.$root.$on('appnavbar', () => {
            this.login();
        });
    }
  
}
