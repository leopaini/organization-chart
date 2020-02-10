import React from "react";
import Helpers from "../helpers";
import classNames from "classnames";
import { useDispatch } from "../store";
import { ICardProps } from "../interfaces";

// Material UI
import { AccountTree, Check } from "@material-ui/icons";
import { Tooltip, Fab, CircularProgress } from "@material-ui/core";

// Components
import IconPerson from "./IconPerson";

// Styles
import "../styles/card.css";

const Card: React.SFC<ICardProps> = ({ employee, topLevel }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const spinnerClass = classNames({ spinner: true, "-success": success });

  const handleClick = (): void => {
    setLoading(true);
    Helpers.getChildren(topLevel, employee, dispatch).then(() => {
      setSuccess(true);
      setLoading(false);
    });
  };

  return (
    <div className="employee-card">
      <div className="picture-container">
        <span className="picture">
          {employee.profileImg && <IconPerson src={employee.profileImg} />}
        </span>
        <span className="actions">
          <div className={spinnerClass}>
            <Tooltip
              title="Load dependencies"
              disableHoverListener={employee.children ? true : false}
            >
              <span>
                <Fab
                  aria-label="save"
                  color="primary"
                  className="fab-button"
                  onClick={handleClick}
                  disabled={employee.children ? true : false}
                >
                  {success ? <Check /> : <AccountTree />}
                </Fab>
              </span>
            </Tooltip>
            {loading && <CircularProgress size={59} className="fab-progress" />}
          </div>
        </span>
      </div>

      <div className="employee-data">
        <h3>
          {employee.first} {employee.last}
        </h3>
        <h4>Department: {employee.department}</h4>
        {employee.office && <h4>Office: {employee.office}</h4>}
      </div>

      <span className="id">{employee.id}</span>
    </div>
  );
};

export default Card;
