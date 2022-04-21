import React, { useState } from "react";
import styles from '../../../assets/scss/component/TagTrend.scss';
import { Button } from "react-bootstrap";
import TagTrend from "./TagTrend";
import TagHistory from "./TagHistory";

const Plan = ({openTime}) => {
    const [historyModal, setHistory] = useState(false);
    const [LiveTrand, setLiveTrand] = useState(false);
    
    return (
        <div className={styles.Plan}>
            
            <Button className="btn btn-success" onClick={() => {setHistory(true);setLiveTrand(false);}}>
                history
            </Button>
             
            <Button className="btn btn-dark" onClick={()=>{setLiveTrand(true); setHistory(false);}}>
                실시간 트랜드 조회
            </Button>
            {historyModal ? <TagHistory/>:null}
            {LiveTrand ? <TagTrend openTime={openTime} ></TagTrend> : null}   

        </div>
    )
}

export default Plan