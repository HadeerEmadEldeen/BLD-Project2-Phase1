import React from 'react'
import SectionDesc from './SectionDesc'
import AllCources from './AllCources'
import "./Style.css"
function Section() {
    return (
        <section className='box Allsection'>
            <SectionDesc>
            </SectionDesc>
            <AllCources ></AllCources> 
        </section>
      )
}
export default Section