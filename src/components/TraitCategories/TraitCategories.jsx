import React from 'react'
import TraitCategoriesLeft from "../../assets/traitcategoriesleft.png"
import TraitCategoriesRight from "../../assets/traitcategoriesright.png"
import "./TraitCategories.css"

export default function TraitCategories() {
    return (
        <div className='trait_categories_section'>
            <div className='left_side'>
                <img src={TraitCategoriesLeft} alt="" />
            </div>
            <div className='middle_content'>
                <p>VIEW TRAIT CATEGORIES AND ITEM EXAMPELS</p>
                <button>LEARN MORE</button>
            </div>
            <div className='right_side'>
                <img src={TraitCategoriesRight} alt="" />
            </div>
        </div>
    )
}
