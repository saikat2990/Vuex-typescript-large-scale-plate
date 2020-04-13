import Employee from "./employee.vue";
import EmployeeCreate from './pages/employeeCreate.vue';
import EmployeeDetails from './pages/employeeDetails.vue';

const employeeRoutes = [
    {
        path: '/employee',
        name: 'employee',
        component: Employee,
    },
    {
        path: '/employeeCreate',
        name: 'employeeCreate',
        component: EmployeeCreate
    },
    {
        path: '/employeedetails/:id',
        name: 'employeedetails',
        props: true,
        component: EmployeeDetails
    },
]

export default employeeRoutes;