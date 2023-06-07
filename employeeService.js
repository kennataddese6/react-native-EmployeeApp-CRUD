import AsyncStorage from '@react-native-async-storage/async-storage';

const createEmployee = async employeeData => {
  try {
    const registedEmployees = await AsyncStorage.getItem('Employees');
    if (registedEmployees !== null) {
      const employees = [JSON.parse(registedEmployees)];
      console.log('Step 3', employees, 'push', employeeData);
      employees.push(employeeData);
      console.log('Step 4 ', employees);
      await AsyncStorage.setItem('Employees', JSON.stringify(employees));
      console.log('registerd', employees);
    }
  } catch (error) {
    console.log('HERE IS the error', error);
  }
};

const getEmployee = async () => {
  try {
    const emps = await AsyncStorage.getItem('Employees');
    console.log('here is the getted item', emps);
    if (emps !== null) {
      console.log('here are the employees', JSON.parse(emps));
      return emps;
    }
  } catch (error) {
    console.log('here is error for getitem', error);
  }
};

const employeeService = {
  createEmployee,
  getEmployee,
};

export default employeeService;
