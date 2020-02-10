import React from "react";

export interface IEmployee {
  id: number;
  manager: number;
  first: string;
  last: string;
  department: number;
  office: number;
  gender?: string;
  profileImg?: string;
  children?: IEmployee[];
}

export interface IEmployeesChartProps {}

export interface IMain {
  children: React.ReactNode;
}

export interface IEmployeeProps {
  employee: IEmployee;
  topLevel: IEmployee;
}

export interface IChildrenProps {
  employees: IEmployee[];
  topLevel: IEmployee;
}

// Navbar
export interface INavbarProps {}

export interface IGlobalStyle {
  darkTheme: boolean;
}

// Home
export interface IHomeProps {}

// Card
export interface ICardProps {
  employee: IEmployee;
  topLevel: IEmployee;
}

// Store
export interface IState {
  employeeTree: IEmployee | undefined;
}

export interface IProviderProps {
  children: React.ReactNode;
}
