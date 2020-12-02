import React from "react";
import PorpsTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => (
  <ButtonGroup>
    <Button color="danger" onClick={clearSelected}>
      Clear Selected
    </Button>
    <Button color="danger" onClick={clearCompleted}>
      Clear Completed
    </Button>
    <Button color="danger" onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);

BulkController.porpsTypes = {
  clearSelected: PorpsTypes.func.isRequired,
  clearCompleted: PorpsTypes.func.isRequired,
  reset: PorpsTypes.func.isRequired,
};

export default BulkController;
