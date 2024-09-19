import React from 'react'
import './customdropdown.css'
import Switch from "react-switch";
import ArrowDown from '../../assets/arrowdown.svg'
import ArrowUp from '../../assets/arrowUp.png'


export default function CustomDropdown({ head, list, openedSwitch, setOpenedSwitch, switchControl }) {
    const [openDropdown, setOpenDropdown] = React.useState(false)

    const [filteredList, setFilteredList] = React.useState(false);

    const [switcheStatus, setSwitcheStatus] = React.useState([]);

    React.useEffect(() => {
        console.log("list", list)

        list && setFilteredList(Array.from(list).filter(item => item !== undefined))
        list && setSwitcheStatus(Array.from(list).filter(item => item !== undefined).map(item => ({ 'value': item, 'status': false })))
    }, [list])

    console.log('switcheStatus', switcheStatus)

    let ccc = [...switcheStatus]

    function newFunc(item, index) {
        ccc[index].status = !ccc[index].status
        setSwitcheStatus([...ccc])
        // setOpenedSwitch([...ccc])
        console.log('item', ccc)
    }


    React.useEffect(() => {
        switchControl(openedSwitch)
    }, [switcheStatus])

    return (
        <div className={openDropdown ? 'customDropdown opened' : 'customDropdown'}>
            <div onClick={() => setOpenDropdown(!openDropdown)} className='dropdownHead'>
                <span>{head} {"(" + filteredList.length + ")"}</span>{
                    !openDropdown ? <img src={ArrowDown} alt='arrowDown' /> : <img src={ArrowUp} alt='arrowDown' />
                }
            </div>
            <div className='dropdownContent'>
                {
                    filteredList && filteredList.map((item, index) => {
                        return item && <li><span>{item}</span><Switch onChange={() => newFunc(item, index)} checked={switcheStatus[index].status} /></li>
                    })
                }
            </div>
        </div >
    )
}
