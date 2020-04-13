import axios from 'axios'
import {EMPLOYEE_BASE_URL} from './employee.baseApi';
import { IEmployeeModel } from '../models/IEmployeeModel';
export async function createEmployee(employee: IEmployeeModel) {
    const response = await axios.post(EMPLOYEE_BASE_URL,employee);
    return response.data;
}
export async function showEmployeeList(){
    const response = await axios.get(EMPLOYEE_BASE_URL);
    return response.data;
}