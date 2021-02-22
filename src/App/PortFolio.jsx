import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './components/ProjectCard'
import { ecommerceApp, rhumeur } from '../ui/colorsTheme'
import { Title } from '../ui/Title'

const CstSection = styled.section`
    min-width:100vw;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 1px 2px lightgray;
    `

export function Portfolio() {
    return <CstSection id="portfolio" className="py-2 mb-5">
        <div className="container">
            <Title fontFamily="Hammersmith One" className="text-center">Projets récents:</Title>
            <div className="row">
                <div className="col-md-12 d-flex flex-wrap">
                    <ProjectCard link="https://ks-ecommerce-app.herokuapp.com/" name="Ecommerce" progress="Visiter le site" img={ecommerceApp}>Lab site de vente en ligne façon Amazon</ProjectCard>
                    <ProjectCard name="Rhumeur" img={rhumeur}>Migration site vitrine client vers Next.js</ProjectCard>
                </div>
            </div>
        </div>
    </CstSection>
}