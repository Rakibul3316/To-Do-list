import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import SearchPanel from "./search-panel";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";
import FillterController from "./filter-controller";

const Controller = ({ term, handleSearch, toggleForm }) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FillterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }}></Col>
    </Row>
  </div>
);

Controller.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Controller;
