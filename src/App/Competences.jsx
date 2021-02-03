import React from 'react'
import styled from 'styled-components'
import { Card } from '../ui/Card'


const CstSection = styled.section`
        width: 100vw; 
        font-family: 'Avenir', 'sans-serif';
        padding: 5rem 1.5rem;
        margin-top: -14rem;
          @media screen and (min-width: 769px){
            margin-top: -16rem;
        }
        `
const BorderCards = styled.div`
        border: solid 1px lightgray;
        border-radius: 10px;
        background-color: white;
        box-shadow: lightgrey 1px 1px;
        `

export const Competences = () => {
    return <CstSection>
        <div className="container">
            <BorderCards className="row">
                <Card icon="desktop" title="Front-end" subtitle="Langages" languages={['HTML', 'CSS', 'JS-ES6']}>
                    J’adore développer des projets à partir de zéro et leur
                    donner vie dans le navigateur.
                    </Card>
                <Card icon="code" title="Frameworks" subtitle="Librairies" languages={['Bootstrap', 'Sass', 'React-Spring', 'Styled-Components', 'React.js, Redux']}>
                    Proposer des compétences toujours plus abouti, avec les technologies d'aujourd'hui et de demain.
                    </Card>
                <Card icon="tools" title="Outils" languages={['VScode', 'Git', 'Github', 'Sourcetree', 'Terminal', 'Yarn', 'NPM', 'Webpack']}>
                </Card>
            </BorderCards>
        </div>
    </CstSection >
}
