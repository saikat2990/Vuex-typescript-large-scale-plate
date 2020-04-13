import { Vue, Component } from 'vue-property-decorator';
import { AuthStorage } from '@/common/authStorage';

@Component
export default class Home extends Vue {
    created(){
        AuthStorage.isUserAuthorized()?
            this.$router.push('employee')
            :this.$router.push('login');
    }
}