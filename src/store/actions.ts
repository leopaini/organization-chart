import { IEmployee } from "../interfaces";

type Action = { type: "EMPLOYEES_ADD"; payload: { employee: IEmployee } };

export default Action;
