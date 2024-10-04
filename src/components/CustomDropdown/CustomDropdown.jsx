import React from 'react'
import './customdropdown.css'
import Switch from "react-switch";
import ArrowDown from '../../assets/arrowdown.svg'
import ArrowUp from '../../assets/arrowUp.png'


export default function CustomDropdown({ nfts, head, list, switchControl, setSelectedSwitches, selectedSwitches }) {
    const [openDropdown, setOpenDropdown] = React.useState(false)

    const [filteredList, setFilteredList] = React.useState(list);

    const [switcheStatus, setSwitcheStatus] = React.useState([]);

    const [selectedSwitch, setSelectedSwitch] = React.useState({});

    const [initialized, setInitialized] = React.useState(false); // Track initialization

    React.useEffect(() => {
        // Run this effect only once when the list is loaded
        if (list && list.length > 0 && !initialized) {
            console.log("LIST", list);
            const filtered = Array.from(list).filter(item => item !== undefined);
            setFilteredList(filtered);
            setSwitcheStatus(filtered.map(item => ({ value: item, status: false })));
            setInitialized(true); // Set the initialized flag to true
        }
    }, [list, initialized]); // Depend on both `list` and `initialized`

    let ccc = [...switcheStatus]

    function toggleItem(myArr, newItem) {
        const index = myArr.findIndex(item => item.value === newItem.value);

        if (index !== -1) {
            // Item exists, remove it
            myArr.splice(index, 1);
        } else {
            // Item does not exist, add it
            myArr.push(newItem);
        }
    }


    function newFunc(item, index) {
        let myArr = [...selectedSwitches]

        toggleItem(myArr, ccc[index])
        // console.log("TESTIN SWITC:", toggleItemInArray(myArr, ccc[index]))

        setSelectedSwitches(myArr)
        // setSelectedSwitches((prevState) => [...prevState, ccc[index]])

        // setSelectedSwitches(ccc[index])
        ccc[index].status = !ccc[index].status
        setSwitcheStatus([...ccc])
        // setOpenedSwitch([...ccc])
        console.log('item', ccc)

        // setSelectedFilter(ccc)

        // selectedSwitches.find(ccc[index])

        // console.log('indexluces', selectedSwitches.includes(ccc[index].value))

        // selectedSwitches.length > 0 ? selectedSwitches.forEach(element => {
        //     console.log('Element', element)
        //     element.value === ccc[index].value ? setSelectedSwitches(selectedSwitches.filter(item => item.value !== ccc[index].value)) : setSelectedSwitches((prevState) => [...prevState, ccc[index]])
        // }) : setSelectedSwitches((prevState) => [...prevState, ccc[index]])
        // setSelectedSwitches(() => selectedSwitches.includes(ccc[index].value) ? selectedSwitches.filter(item => item.value !== ccc[index].value) : [...selectedSwitches, ccc[index]])
        // setSelectedSwitches(selectedSwitches.filter(item => item.value !== ccc[index].value))
        // addSwitches(ccc[index])
        // ccc[index].status == true && 
        // console.log('filtereds', selectedSwitches.filter(item => item.value != ccc[index].value))

        // switchControl()
    }
    console.log("filteredList", filteredList)

    const addSwitches = (switcho) => {
        console.log("selectedSwitch", switcho)
        // console.log('CLICKED: ', selectedSwitches.filter(item => item.value != switcho.value))
        // selectedSwitches.forEach(element => {
        //     element.value === switcho.value ? console.log("FOUND " + element.value + " => " + switcho.value) : console.log("NOT-FOUND " + element.value + " => " + switcho.value)
        // });
    }


    // React.useEffect(() => {
    //     console.log("CANEDSAD", switcheStatus);
    //     let newArr = selectedSwitch.length > 0 && [...selectedSwitches]
    //     setSelectedSwitches(newArr.push(selectedSwitch));
    //     addSwitches(selectedSwitch)
    // }, [selectedSwitch])

    return (
        <div className={openDropdown ? 'customDropdown opened' : 'customDropdown'}>
            {
                filteredList.length > 0 && <div onClick={() => setOpenDropdown(!openDropdown)} className='dropdownHead'>
                    <span>{head + " ("} {filteredList.length > 0 && filteredList.length + ")"}</span>{
                        !openDropdown ? <img src={ArrowDown} alt='arrowDown' /> : <img src={ArrowUp} alt='arrowDown' />
                    }
                </div>
            }

            <div className='dropdownContent'>
                {
                    filteredList.length > 0 && filteredList.map((item, index) => {
                        return item && <li><span>{item}</span><Switch onChange={() => newFunc(item, index)} checked={switcheStatus[index].status} /></li>
                    })
                }
            </div>
        </div >
    )
}
