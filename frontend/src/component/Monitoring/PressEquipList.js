import React, { useState, useEffect, useRef } from 'react'
import PressEquip from './PressEquip';
import Box from '@mui/material/Box';

export default function PressEquipList({ equiplist }) {
    console.log("PressEquipList");
    var index = 0;
    const [items, setItem] = useState([]);
    const press_count = 15;

    // const [index, setIndex] =useState(0); 
    const savedCallback = useRef();
    function box() {
        if (equiplist[index]) {
            var itemArray = [];
            for (let i = 0; i < press_count; i++) {
                itemArray.push({ id: equiplist[index + (i * 600)].pressLogPressId, oper: equiplist[index + (i * 600)].pressLogStatus, punch: equiplist[index + (i * 600)].pressLogPunch });
            }
            setItem(itemArray);

        }
        index++;
    }

    useEffect(() => {
        savedCallback.current = box;
    }, [equiplist]);
    useEffect(() => {
        function getValue() {
            savedCallback.current();
        }
        let id = setInterval(getValue, 1000);
        return () => clearInterval(id);
    }, []);
    console.log(items);
    return (
        <Box sx={{
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 1,
        }}>
            {
                items.map(item => {
                    return <PressEquip
                        id={item.id}
                        oper={item.oper}
                        punch={item.punch}
                    />
                })
            }

        </Box>
    );
}

// PressEquipList.propTypes = {
//     equiplist: PropTypes.arrayOf(PropTypes.shape(PressEquip.propType))
// }