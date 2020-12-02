import React from "react";
import PorpsTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FillterController = ({ handleFilter }) => {
  <ButtonGroup>
    <Button onClick={() => handleFilter("all")}>All</Button>
    <Button onClick={() => handleFilter("running")}>Running</Button>
    <Button onClick={() => handleFilter("completed")}>Completed</Button>
  </ButtonGroup>;
};

FillterController.porpsTypes = {
  handleFilter: PorpsTypes.func.isRequired,
};

export default FillterController;
