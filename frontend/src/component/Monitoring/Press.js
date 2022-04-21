import React, { useState, useEffect, useRef } from 'react'
import styles from '../../../assets/scss/component/Press.scss';
import PressEquipList from './PressEquipList';

const Press = ({ openTime }) => {
  const [equip, setEquip] = useState([]);
  const savedCallback = useRef();
  const RoutineTime = 10;
  async function fetchData(startRow) {
    console.log(startRow);
    try {
      const response = await fetch('/api/monitoring', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: `row=${startRow}`
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEquip(json.data);
    } catch (err) {
      console.log(err)
    }
  }
  const [clickTime, setClickTime] = useState("");
  useEffect(() => {
    savedCallback.current = time;
  }, [fetchData]);
  useEffect(() => {
    setClickTime(new Date());
    function getValue() {
      savedCallback.current();
    }
    let id = setInterval(getValue, 1000);
    return () => clearInterval(id);
  }, []);
  function time() {
    console.log("**********time**********")
    var now = new Date();
  
    var click_sec = parseInt(now - clickTime) / 1000;
    var click_day = parseInt(click_sec / 60 / 60 / 24);
    var sec = parseInt(now - openTime) / 1000;
    var day = parseInt(sec / 60 / 60 / 24);

    click_sec = (click_sec - (click_day * 60 * 60 * 24));
    var click_hour = parseInt(click_sec / 60 / 60);
    sec = (sec - (day * 60 * 60 * 24));
    var hour = parseInt(sec / 60 / 60);

    click_sec = (click_sec - (click_hour * 60 * 60));
    var click_min = parseInt(click_sec / 60);
    sec = (sec - (hour * 60 * 60));
    var min = parseInt(sec / 60);

    click_sec = parseInt(click_sec - (click_min * 60));
    sec = parseInt(sec - (min * 60));
    console.log(min + "분 " + sec + "초 ");
    console.log(click_hour + "시 " + click_min + "분 " + click_sec + "초 ");


    if (((min % RoutineTime) == 0 && sec == 0) || (click_min == 0 && click_sec == 1 && click_hour == 0)) {
      console.log("******" + min + "분 " + sec + "초 ");
      fetchData(parseInt(min / RoutineTime), now);
    }
  }
  return (
    <div className={styles.Press}>
          < PressEquipList equiplist={equip} />
    </div>
  );

}

export default Press