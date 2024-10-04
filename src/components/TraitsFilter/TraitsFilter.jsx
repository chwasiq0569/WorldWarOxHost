import React from 'react'
import CustomDropdown from '../CustomDropdown/CustomDropdown'

export default function TraitsFilter({ nfts, setFilteredNFTs }) {
    const [selectedSwitches, setSelectedSwitches] = React.useState([])

    // React.useEffect(() => {
    //     console.log("INSIDE USEFFFECT", selectedSwitches.length)
    //     console.log("INSIDE USEFFFECT", nfts)

    //     if (selectedSwitches.length == 0) {
    //         console.log("INSIDE")
    //         setFilteredNFTs(nfts)
    //     }
    // }, [selectedSwitches])

    const getTraitCount = (trait) => {
        // console.log('NFTS', nfts)
        // console.log("FILTERED", nfts.filter(nft => nft.attributes.filter(item => item.value == "Red")))
        // nfts.forEach(nft => nft.attributes.forEach(item => {
        //     item.value == 'Red' && tempArr.push(nft)
        // }))

        // nfts.filter(nft => nft.attributes.forEach(item => item.value == 'red'))

        // nfts.forEach(nft => nft.attributes.filter(item => item.value == 'Red')))

        // console.log('TraitS', nfts.filter(nft => nft.attributes.forEach(item => item.value == 'red')))
        // nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === trait)[0]?.value)

        // console.log('XWS', nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === trait)[0]?.value))
        return new Set(nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === trait)[0]?.value))
    }
    // let switches = []

    React.useEffect(() => {
        switchControl()

        if (selectedSwitches.length == 0) {
            setFilteredNFTs([...nfts])
        }
    }, [selectedSwitches])

    const switchControl = () => {
        // switches.push(openedSwitch2)
        // console.log('switches||', selectedSwitches)

        const valueSet = new Set(selectedSwitches.map(item => item.value));

        const filteredNfts = nfts.filter(nft =>
            nft.attributes.some(attribute => valueSet.has(attribute.value))
        );


        console.log('FFFAFS', filteredNfts)

        let tempArr = []

        // console.log('nfs', nfts)

        // console.log("FILATEREAF", nfts.filter(nft => nft.attributes.forEach(item => item.value == 'Red')))

        // nfts.forEach(nft => {
        //     nft.attributes.forEach(item => {
        //         console.log("ITETMEMM", item)
        //         console.log('INCLUDES', selectedSwitches.includes(item))
        //         selectedSwitches[]
        //         item.value == openedSwitch2.value && tempArr.push(nft)
        //         switches.push()
        //     })
        // })

        // setFilteredNFTs([...tempArr])
        setFilteredNFTs([...filteredNfts])
        // setOpenedSwitch(openedSwitch2)
        // setFilteredNFTs(tempArr)
        // console.log('tempArr', tempArr)
    }

    return (
        <div><CustomDropdown nfts={nfts} head='Armour' list={Array.from(getTraitCount('Armour'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='Background' list={Array.from(getTraitCount('Background'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='Bags' list={Array.from(getTraitCount('Bags'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='FacialHair' list={Array.from(getTraitCount('FacialHair'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='Heads' list={Array.from(getTraitCount('Heads'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='Headwear' list={Array.from(getTraitCount('Headwear'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='Pants' list={Array.from(getTraitCount('Pants'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
            <CustomDropdown nfts={nfts} head='Tops' list={Array.from(getTraitCount('Tops'))} switchControl={switchControl} selectedSwitches={selectedSwitches} setSelectedSwitches={setSelectedSwitches} />
        </div>
    )
}
