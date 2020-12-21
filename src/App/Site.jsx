import React from 'react'
import { QuiSuisJe } from './QuiSuisJe'
import { Competences } from './Competences';
import { Contact } from './Contact';
import { Portfolio } from './PortFolio';


export function Site() {
    return <>
        <QuiSuisJe />
        <Competences />
        <Portfolio />
        <Contact />
    </>
}
