import React, { Fragment, useState } from 'react'
import styles from '../../../assets/scss/component/TagTrend.scss';
import Tag from './Tag';
import { MultiSelect } from "react-multi-select-component";

const TagTrend = ({openTime}) => {
    const options = [
        { label: "PR14", value: "1" },
        { label: "PR16", value: "2" },
        { label: "PR19", value: "3" },
        { label: "PR33", value: "4" },
        { label: "PR20", value: "5" },
        { label: "PR23", value: "6" },
        { label: "PR34", value: "7" },
        { label: "PR35", value: "8" },
        { label: "PR36", value: "9" },
        { label: "PR37", value: "10" },
        { label: "PR38", value: "11" },
        { label: "PR39", value: "12" },
        { label: "PR40", value: "13" },
        { label: "PR41", value: "14" },
        { label: "PR43", value: "15" },
        
    ];
    const [selected, setSelected] = useState([]);
    const [selectCheck, setSelectCheck] = useState(false);
    const onChangeSelected = function(event) {
        event !== selected ? setSelectCheck(true) : setSelectCheck(false);
        setSelected(event);
    }
    return (
        <Fragment>

            <div className={styles.TagTrend}>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={onChangeSelected}
                    labelledBy={"설비 선택"}
                />

                <Tag selected={selected} openTime={openTime} selectCheck={selectCheck} setSelectCheck={setSelectCheck} selectoptions={options}/>
            

            </div>
        </Fragment>

    )

}

export default TagTrend