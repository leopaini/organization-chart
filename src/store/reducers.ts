import Action from "./actions";
import { IState } from "../interfaces";

export function reducers(state: IState, action: Action) {
  switch (action.type) {
    case "EMPLOYEES_ADD":
      return { ...state, employeeTree: action.payload.employee };

    default:
      return state;
  }
}
