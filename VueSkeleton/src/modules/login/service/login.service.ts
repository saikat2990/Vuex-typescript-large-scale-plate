import axios from 'axios'
import {LOGIN_BASE_URL} from './login.baseApi';
import { ILoginModel } from '../models/ILoginModel';

export async function userlogin(user: ILoginModel) {
    const response = await axios.post(LOGIN_BASE_URL,user);
    return response.data;
}
