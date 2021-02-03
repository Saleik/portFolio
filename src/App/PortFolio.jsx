import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './components/ProjectCard'
import { seinenApp } from '../ui/colorsTheme'
import { Title } from '../ui/Title'

const CstSection = styled.section`
    min-width:100vw;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 1px 2px lightgray;
    `

export function Portfolio() {
    return <CstSection className="py-2 mb-5">
        <div className="container">
            <Title fontFamily="Hammersmith One" className="text-center">Projet récent:</Title>
            <div className="row">
                <div className="col-md-12">
                    <ProjectCard img={seinenApp}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ProjectCard>
                </div>
            </div>
        </div>
    </CstSection>
}