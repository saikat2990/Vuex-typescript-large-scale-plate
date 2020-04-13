import { MutationTree } from "vuex";
import { IEmployeeModel } from '../models/IEmployeeModel';
import { IEmployeeResponseModel } from '../models/IEmployeeResponseModel';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'
import { state } from './employee.state';

export const mutations: MutationTree<any> = {
    
    addEmployee(state,employee: any){
        console.log(state.employeeList);
        state.employeeList.push(employee);
        console.log(state.employeeList);
    },
   

    employeeList(state, employeeList: any){
       const tempEmployeeList: IEmployeeResponseModel[]=[];
       if(state.employeeList.length===0){
            for(let i=0;i<employeeList.length;i++){
                const tempEmployee: IEmployeeResponseModel={
                    id:'',name:'',job:'',createdAt:'',
                };
                tempEmployee.name = employeeList[i].first_name;
                tempEmployee.job= '';
                tempEmployee.id= employeeList[i].id.toString();
                state.employeeList.push(tempEmployee);
            }
       }
       
        console.log(state.employeeList);
    }

}