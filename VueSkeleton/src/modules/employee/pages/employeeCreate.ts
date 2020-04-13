import { Vue, Component } from 'vue-property-decorator';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'
import { IEmployeeModel } from '../models/IEmployeeModel';
@Component
export default class EmployeeCreate extends Vue {
    @Action action1: any;
    @Action  addNewEmployee: void;
    newEmployee: IEmployeeModel ={
        name: "",
        job: "",
    }
    async addemp(){
        await this.addNewEmployee(this.newEmployee);
        this.$router.push('employee');
    }
}