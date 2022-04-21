import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SignModal from "./inputForm";

import styles from "../../../assets/css/Plan.css";
import PlanTable from "./PlanTable";
const Plan = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.Plan}>
      <PlanTable />
      <Button className="btn btn-success" onClick={() => setShowModal(true)}>
        등록
      </Button>
      <SignModal show={showModal} hide={() => setShowModal(false)} />
    </div>
  );
};

export default Plan;
