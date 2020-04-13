import { Vue, Component } from 'vue-property-decorator';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'

import { AuthStorage } from '@/common/authStorage';


@Component
export default class Employee extends Vue {
  @Action getEmployeeList: void;
  @Getter employeeList: any;

  async created(){
    AuthStorage.isUserAuthorized()?
    this.$router.push('employee')
    :this.$router.push('login');
    await this.getEmployeeList();
  }
  
  renderElement(id: number){
    this.$router.push({ name: 'employeedetails', params: { id: `${id}` } });
  }
}