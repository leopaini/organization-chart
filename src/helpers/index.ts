import Axios from "axios";
import { Dispatch } from "../store";
import { Services } from "../services";
import { IEmployee } from "../interfaces";

class Helpers {
  public static async getInitialSearch(dispatch: Dispatch) {
    const employees: IEmployee[] = await Services.getTopLevel();
    if (employees.length) {
      // Load the top level employee in the tree.
      const employee = employees[0];
      const genderize = await Services.getGenderByName(employee.first);
      employee.gender = genderize.gender;
      employee.profileImg = this.getProfilePicture(genderize.gender);
      dispatch({ type: "EMPLOYEES_ADD", payload: { employee } });

      // Load the children and the genders and update the store after that.
      const children = await Services.getChildren(employee.id);
      employee.children = children;
      await this.getAllGenders(employee, children, dispatch);

      dispatch({ type: "EMPLOYEES_ADD", payload: { employee } });
    }
  }

  public static async getChildren(
    top: IEmployee,
    employee: IEmployee,
    dispatch: Dispatch
  ) {
    const children = await Services.getChildren(employee.id);
    employee.children = children;
    this.getAllGenders(top, children, dispatch);

    dispatch({ type: "EMPLOYEES_ADD", payload: { employee: top } });
  }

  public static async getAllGenders(
    employee: IEmployee,
    employees: IEmployee[],
    dispatch: Dispatch
  ) {
    let promises = [];

    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      promises.push(Services.getGenderByName(employee.first));
    }

    Axios.all(promises).then(responses => {
      for (let i = 0; i < responses.length; i++) {
        const employee = employees[i];
        employee.gender = responses[i].gender;
        employee.profileImg = this.getProfilePicture(responses[i].gender);
      }

      dispatch({ type: "EMPLOYEES_ADD", payload: { employee } });
    });
  }

  public static getProfilePicture(gender: string): string {
    const min = 1;
    const max = 4;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return gender + random;
  }
}

export default Helpers;
