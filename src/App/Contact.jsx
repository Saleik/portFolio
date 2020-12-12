import React from 'react'
import styled from 'styled-components'
import { Section } from '../ui/Section'
import { bgContact, colorsTheme } from '../ui/colorsTheme'
import { Field } from '../ui/Field'
import { Button } from '../ui/Button'
import { Footer } from './components/Footer'
import { Title } from '../ui/Title'

const CstP = styled.p`
        font-family:'Dosis', sans-serif;
        font-weight: 300;`

export const Contact = () => {
    return <Section id="contact" background={bgContact} >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Title color={colorsTheme.secondary}>Start a project</Title>
                    <CstP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit sit porro modi.</CstP>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-10 offset-md-1">
                    <form className="m-2">
                        <div className="row">
                            <div className="col-md-6">
                                <Field col="col-md-6" type="text" placeholder="Veuillez entrer votre nom*" name="firstname">Nom*</Field>
                            </div>
                            <div className="col-md-6">
                                <Field col="col-md-6" type="text" placeholder="Veuillez entrer votre prénom*" name="lastname" required >Prénom*</Field>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Field col="col-md-6" type="email" placeholder="Veuillez entrer votre email*" name="email" required >Email*</Field>
                            </div>
                            <div className="col-md-6">
                                <Field col="col-md-6" type="text" placeholder="Veuillez entrer l'objet du message*" name="object">Entreprise*</Field>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Field type="textarea" placeholder="Veuillez saisir un message*" name="message" rows="5" required>Message*</Field>
                            </div>
                            <div className="col-md-12 text-center">
                                <Button type="submit">Envoyer</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    </Section>
}