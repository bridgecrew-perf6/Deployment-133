import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import stop from '../../../assets/img/stop.png';
import go from '../../../assets/img/go.gif';
export default function PressEquip({ id, oper, punch }) {
    console.log("PressEquip");
    console.log(id +" " + oper + " " + punch);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const stylebackgroundColor = {
        width: 60,
        height: 60,
        // backgroundColor: oper === 0 ? 'red' : 'green'
    };
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
    const operStatus = (e) => {
        e === 0 ? '중지' : '가동 중'
    };
    console.log();

    return (
        <div>
            <Item sx={{ gridColumn: '1', gridRow: 'span 2' }}>
                <h1>{options[id-1].label}</h1>
                <br />
                <h1>{operStatus(oper)}</h1> <img style={stylebackgroundColor} src={oper === 0?stop:go} />

                <br />
                <h1>{punch}</h1>
            </Item>


        </div>
    )
}

// PressEquip.propTypes = {
//     name: PropTypes.string.isRequired
// }