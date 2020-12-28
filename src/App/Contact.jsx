import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { Section } from '../ui/Section'
import { bgContact, colorsTheme } from '../ui/colorsTheme'
import { Footer } from './components/Footer'
import { Title } from '../ui/Title'
import { RecaptchaForm } from '../ui/RecaptchaForm'
import { Modal } from '../ui/Modal'
import { useModal } from '../hooks/useModal'

const CstP = styled.p`
        font-family:'Dosis', sans-serif;
        font-weight: 300;`

export const Contact = () => {

    const [state, setState] = useState({
        isVerified: false,
        recaptchaLoaded: false,
    })
    const [emailSuccess, setEmailSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const recaptchaLoaded = () => {
        setState(state => ({ ...state, recaptchaLoaded: true }))
    }
    const [modal, setModal] = useModal(false)

    const verifiedRecaptcha = (response) => {
        if (response) {
            setState(state => ({ ...state, isVerified: true }))
        }
    }

    const handleSubmit = (e) => {
        const { isVerified, recaptchaLoaded } = state
        const form = e.target

        e.preventDefault();
        setError(false)

        if (recaptchaLoaded && isVerified) {
            setLoading(true)
            emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE, process.env.REACT_APP_EMAIL_JS_TEMPLATE, e.target, process.env.REACT_APP_EMAIL_JS_USER_ID)
                .then((result) => {
                    if (result.text === 'OK') {
                        setEmailSuccess(true)
                        form.reset()
                    } else {
                        setEmailSuccess(false)
                    }
                    setLoading(false)
                    setModal(true)
                }, (error) => {
                    setEmailSuccess(false)
                    setLoading(false)
                    setModal(true)
                    console.error(error.txt)
                })
        } else {
            setError(true)
        }

    }
    return <Section id="contact" background={bgContact} >
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <Title fontSize="1.7em" color={colorsTheme.secondary}>Start a project</Title>
                    <CstP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit sit porro modi.</CstP>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-10 offset-md-1">
                    {error && <Alert>Merci de valider le reCAPTCHA svp</Alert>}
                    <RecaptchaForm onSubmit={handleSubmit} onloadCallback={recaptchaLoaded} verifyCallback={verifiedRecaptcha} loading={loading} />
                    {modal !== false ? <Modal onClose={setModal} success={emailSuccess} /> : ''}
                </div>
            </div>
            <Footer />
        </div>
    </Section>
}

function Alert({ children }) {
    return <div className="alert alert-danger alert-dismissible fade show" role="alert">
        {children}
    </div>
}