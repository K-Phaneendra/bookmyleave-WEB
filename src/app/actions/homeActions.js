import axios from 'axios';
import { CompaniesUrls, EmployeesUrls } from './actionURLs';
import { Configs } from './actionConfigs';
// import { ErrorType } from './actionTypes';
import { CompanyActions, EmployeeActions } from './actionTypes';

// fetching companies DB
export function fetchCompany(id) {
  return function (dispatch) {
    axios
      .get(`${CompaniesUrls.COMPANIES_API}/${id}`, Configs.CONFIG)
      .then((response) => {
        dispatch({ type: CompanyActions.FETCH_COMPANY, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
// fetching employees data from DB
export function fetchEmployees(id) {
  const compid = {
    companyid: id,
  };
  return function (dispatch) {
    axios
      .post(EmployeesUrls.FETCH_EMPLOYEES, JSON.stringify(compid), Configs.CONFIG)
      .then((response) => {
        dispatch({ type: EmployeeActions.FETCH_EPLOYEES, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}