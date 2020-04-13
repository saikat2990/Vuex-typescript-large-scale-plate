import { Vue, Component } from 'vue-property-decorator';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'
@Component
export default class EmployeeDetails extends Vue {
    employeeId: string;
    employeeName: string;
    @Getter employeeList: any[];
    async created(){
        this.employeeId= Number(this. $route.params.id).toString();
        for(let i=0;i<this.employeeList.length;i++){
            if(this.employeeList[i].id===this.employeeId){
                this.employeeName= this.employeeList[i].name;
            }
        }
    }
    
}