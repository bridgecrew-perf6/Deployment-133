import React, { Fragment, useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import FormData from "./FormData";
function inputForm(props) {
  const [Jobname, setJobname] = useState("");
  const [Weight, setWeight] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [EstTime, setEstTime] = useState("");
  const [Line, setLine] = useState("");
  const [Width, setWidth] = useState("");
  const [Worker, setWorker] = useState("");
  //const [Workplace, setWorkplace] = useState("");

  const Warehouse = [
    { label: "창고1", value: "1" },
    { label: "창고2", value: "2" },
    { label: "창고3", value: "3" },
    { label: "창고4", value: "4" },
  ];
  const [WarehouseSelected, setWarehouseSelected] = useState([]);
  const [WarehouseSelectCheck, WarehousesetSelectCheck] = useState(false);



  const [WorkplaceSelected, setWorkplaceSelected] = useState([]);
  const [WorkplaceSelectCheck, WorkplacesetSelectCheck] = useState(false);
  const workplace = [
    { label: "포항", value: "포항" },
    { label: "광양", value: "광양" },

  ];


  const [MeterialSelected, setMeterialSelected] = useState([]);
  const [MeterialSelectCheck, MeterialsetSelectCheck] = useState(false);
  const material = [
    { label: "재료1", value: "1" },
    { label: "재료2", value: "2" },
    { label: "재료3", value: "3" },
    { label: "재료4", value: "4" },
  ];

  const emergency = [
    { label: "일반", value: "0" },
    { label: "긴급", value: "1" },
  ];

  const customer = [
    { label: "현대중공업", value: "현대중공업" },
    { label: "LS", value: "LS" },
    
  ];

  const [emergencySelected, setemergencySelected] = useState([]);
  const [emregencySelectCheck, emregencysetSelectCheck] = useState(false);

  const slitter = [
    { label: "PR14", value: "1" },
    { label: "PR16", value: "2" },
    { label: "PR19", value: "3" },
    { label: "PR33", value: "4" },
  ];
  const [slitterSelected, setslitterSelected] = useState([]);
  const [slitterSelectCheck, slittersetSelectCheck] = useState(false);

  //const [Customer, setCustomer] = useState("");
  const [customerSelected, setCustomerSelected] = useState([]);
  const [customerSelectCheck, CustomersetSelectCheck] = useState(false);



  const [Note, setNote] = useState("");
  const [submitCheck, setSubmitcheck] = useState(false);
  // handleChange
  const handleJobnameChange = (e) => {
    setJobname(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  const handleEstTimeChange = (e) => {
    setEstTime(e.target.value);
  };
  const handleLineChange = (e) => {
    setLine(e.target.value);
  };
  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };
  //const handleWorkplaceChange = (e) => {
  //  setWorkplace(e.target.value);
  //};
  const handleWorkerChange = (e) => {
    setWorker(e.target.value);
  };
 // const handleCustomerChange = (e) => {
 //   setCustomer(e.target.value);
 // };
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // const emergencyNoteChange = e => {
  //     setEmregencySelected(e.target.value);
  // };

  // handleSubmit
  const handleSubmit = (e) => {
    setSubmitcheck(true);
    e.preventDefault();
    alert("등록되었습니다.");
    /*
        setJobname("");
        setWeight("");
        setEndDate("");
        setEstTime("");
        setLine("");
        setWidth("");
        setWorkplace("");
        setWorker("");
        setCustomer("");
        setNote("");
        */
  };
  const onChangeWarehouseSelected = function (event) {
    event !== WarehouseSelected
      ? WarehousesetSelectCheck(true)
      : WarehousesetSelectCheck(false);
    setWarehouseSelected(event);
  };
  const onChangeWorklaceSelected = function (event) {
    event !== WorkplaceSelected
      ? WorkplacesetSelectCheck(true)
      : WorkplacesetSelectCheck(false);
      setWorkplaceSelected(event);
  };
  const onChangeCustomerSelected = function (event) {
    event !== CustomerSelected
      ? CustomersetSelectCheck(true)
      : CustomersetSelectCheck(false);
      setCustomerSelected(event);
  };
  const onChangeMeterialSelected = function (event) {
    event !== MeterialSelected
      ? MeterialsetSelectCheck(true)
      : MeterialsetSelectCheck(false);
    setMeterialSelected(event);
  };
  const onChangeSlitterSelected = function (event) {
    event !== slitterSelected
      ? slittersetSelectCheck(true)
      : slittersetSelectCheck(false);
    setslitterSelected(event);
  };

  const onChangeEmergencySelected = function (event) {
    event !== emergencySelected
      ? emregencysetSelectCheck(true)
      : emregencysetSelectCheck(false);
    setemergencySelected(event);
  };

  const { show, hide } = props;
  return (
    <Fragment>
      <Modal
        style={{ margin: 100 }}
        size="xl"
        show={show}
        onHide={hide}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">생산계획 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="show-grid">
            {/* <Col xs={12} md={6}>
                            <span>작업명</span>
                            <input
                                name="Jobname"
                                type="text"
                                size="xl"
                                className="form-control"
                                onChange={handleJobnameChange}
                                value={Jobname}
                            />
                        </Col> */}
            <Col xs={12} md={6}>
              <span>생산중량</span>
              <input
                name="Weight"
                type="number"
                size="xl"
                className="form-control"
                onChange={handleWeightChange}
                value={Weight}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>납기일</span>
              <input
                name="EndDate"
                type="date"
                size="xl"
                className="form-control"
                onChange={handleEndDateChange}
                value={EndDate}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>예상 시간</span>
              <input
                name="EstTime"
                type="datetime"
                size="xl"
                className="form-control"
                onChange={handleEstTimeChange}
                value={EstTime}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>줄 수</span>
              <input
                name="Line"
                type="number"
                size="xl"
                className="form-control"
                onChange={handleLineChange}
                value={Line}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>폭</span>
              <input
                name="Width"
                type="number"
                size="xl"
                className="form-control"
                onChange={handleWidthChange}
                value={Width}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>사업장</span>
               <Select
                value={WorkplaceSelected}
                onChange={onChangeWorklaceSelected}
                options={workplace}
              />
           
            </Col>

            <Col xs={12} md={6}>
              <span>원자재</span>
              <Select
                value={MeterialSelected}
                onChange={onChangeMeterialSelected}
                options={material}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>설비번호</span>
              <Select
                value={slitterSelected}
                onChange={onChangeSlitterSelected}
                options={slitter}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>작업 인원</span>
              <input
                name="Worker"
                type="number"
                size="xl"
                className="form-control"
                onChange={handleWorkerChange}
                value={Worker}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>고객사</span>
              <Select
                value={customerSelected}
                onChange={onChangeCustomerSelected}
                options={customer}
              />

            </Col>
            <Col xs={12} md={6}>
              <span>창고번호</span>
              <Select
                value={WarehouseSelected}
                onChange={onChangeWarehouseSelected}
                options={Warehouse}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>긴급 여부</span>
              <Select
                value={emergencySelected}
                onChange={onChangeEmergencySelected}
                options={emergency}
              />
            </Col>
            <Col xs={12} md={6}>
              <span>비고</span>
              <input
                name="Note"
                type="text"
                size="xl"
                className="form-control"
                onClick={handleNoteChange}
                value={Note}
              />
            </Col>
          </Row>
          <Button
            onClick={handleSubmit}
            style={{ margin: "5px", width: "100%" }}
          >
            {" "}
            생산계획 등록{" "}
          </Button>
        </Modal.Body>
      </Modal>

      <FormData
        // Jobname={Jobname}
        Weight={Weight}
        EndDate={EndDate}
        EstTime={EstTime}
        Line={Line}
        Width={Width}
        Workplace={workplace}
        Worker={Worker}
        Customer={customer}
        Note={Note}
        M_Selected={MeterialSelected}
        s_Selected={slitterSelected}
        submitCheck={submitCheck}
        W_Selected={WarehouseSelected}
        E_Selected={emergencySelected}
      ></FormData>
    </Fragment>
  );
}

export default inputForm;
