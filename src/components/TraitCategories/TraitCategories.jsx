import React from 'react'
import TraitCategoriesLeft from "../../assets/traitcategoriesleft.png"
import TraitCategoriesRight from "../../assets/traitcategoriesright.png"
import "./TraitCategories.css"
import { Link } from 'react-router-dom'

export default function TraitCategories() {
    return (
        <div className='trait_categories_section'>
            <div className='left_side'>
                <img src={TraitCategoriesLeft} alt="" />
            </div>
            <div className='middle_content'>
                <p>VIEW TRAIT CATEGORIES AND ITEM EXAMPELS</p>
                {/* <a href="http://worldwar0x.com/whitelist" target='_blank'>LEARN MORE</a> */}
                <Link to="https://worldwar0x.com/mint">LEARN MORE</Link>
            </div>
            <div className='right_side'>
                <img src={TraitCategoriesRight} alt="" />
            </div>
        </div>
    )
}
