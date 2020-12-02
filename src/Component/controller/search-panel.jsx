import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "reactstrap";

const SeacrPanel = ({ term, handleSearch, toggleForm }) => (
  <div className="d-flex">
    <Input
      type="text"
      placeholder="Search your term"
      valure={term}
      onChange={(e) => handleSearch(e.target.value)}
    />
    <Button color="success" onClick={toggleForm}>
      New
    </Button>
  </div>
);

SeacrPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SeacrPanel;
