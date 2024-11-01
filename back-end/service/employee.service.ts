import employeeDb from "../repository/employee.db";
import { Employee } from "../model/employee";

const getAllEmployees = (): Employee[] => employeeDb.getAllEmployees();

export default {  getAllEmployees };