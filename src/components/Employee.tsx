import React from "react";
import { IEmployee, IEmployeeProps } from "../interfaces";

// Components
import Card from "./Card";

const Employee: React.SFC<IEmployeeProps> = props => {
  const { employee, topLevel } = props;

  return (
    <li>
      <Card employee={employee} topLevel={topLevel} />
      {employee.children && employee.children.length > 0 && (
        <ol>
          {employee.children.map((e: IEmployee) => (
            <Employee employee={e} topLevel={topLevel} key={e.id} />
          ))}
        </ol>
      )}
    </li>
  );
};

export default Employee;
