import { ActionTree } from 'vuex';
import { IEmployeeModel } from '../models/IEmployeeModel';
import * as api from '../service/employee.service';

export const actions: ActionTree<any,any> ={
  
  async addNewEmployee(context, newEmployee: IEmployeeModel){
    const response = await api.createEmployee(newEmployee);
    console.log(response);
    context.commit('addEmployee',response);
    console.log(newEmployee.job);
  },

  async getEmployeeList(context){
    const response = await api.showEmployeeList();
    context.commit('employeeList',response.data); 
  }

};

