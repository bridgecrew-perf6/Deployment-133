import React, { useEffect } from "react";

const FormData = ({
  Weight,
  EndDate,
  EstTime,
  Line,
  Width,
  Workplace,
  Worker,
  Customer,
  Note,
  M_Selected,
  s_Selected,
  submitCheck,
  W_Selected,
  E_Selected,
}) => {
  console.log("Ggg");

  const selectItem = {
    // joborderJobname: Jobname,
    joborderWeight: Weight,
    joborderEndDate: EndDate,
    joborderEstTime: EstTime,
    joborderLine: Line,
    joborderWidth: Width,
    joborderWorkplace: Workplace,
    joborderWorkerNum: Worker,
    joborderCustomer: Customer,
    joborderEmg: Note,
    joborderMaterialId: M_Selected.value,
    joborderSlitterNo: s_Selected.value,
    joborderWarehouseId: W_Selected.value,
    joborderEmg: E_Selected.value,
    joborderEmg : E_Selected.value
  };
  useEffect(() => {
    console.log("useEffect");
    console.log(submitCheck);
    console.log(selectItem);
    
    if (submitCheck) {
      (async () => {
        try {
          const response = await fetch(`/api/registration`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(selectItem),
          });

          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }

          const json = await response.json();
          if (json.result !== "success") {

            console.log(json.result)

            throw new Error(`${json.result} ${json.message}`);
          }
          console.log(json.data);
        } catch (err) {
          console.error(err);
        }
        
        try {
          const response1 = await
          fetch(`/api/qr`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: null
          });
          
          if (!response1.ok) {
            throw new Error(`${response1.status} ${response1.statusText}`);
          }

          const json = await response1.json();
          if (json.result !== 'success') {

            console.log(json.result)

            throw new Error(`${json.result} ${json.message}`);
          }
          console.log(json.data);
        } catch (err) {
          console.error(err);
        }

      })();
    }
  }, [selectItem]);
  return <div>{/* FormData */}</div>;
};

export default FormData;