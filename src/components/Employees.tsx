import React from "react";
import Helpers from "../helpers";
import { useStore } from "../store";
import { IEmployeesChartProps } from "../interfaces";

// Components
import Employee from "./Employee";

// Styles
import "../styles/employees.css";

const EmployeesChart: React.SFC<IEmployeesChartProps> = () => {
  const [state, dispatch] = useStore();
  const employee = state.employeeTree;

  React.useEffect(() => {
    if (!state.employeeTree) Helpers.getInitialSearch(dispatch);
  }, [dispatch, state.employeeTree]);

  if (!employee) return null;

  return (
    <div className="employees">
      <h2>Employees Chart</h2>

      <ul className="structure-chart">
        <Employee employee={employee} topLevel={employee} />
      </ul>
    </div>
  );
};

export default EmployeesChart;
