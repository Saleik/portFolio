import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { bgContact, colorsTheme } from '../ui/colorsTheme'
import { Title } from '../ui/Title'
import { RecaptchaForm } from '../ui/RecaptchaForm'
import { Modal } from '../ui/Modal'
import { useModal } from '../hooks/useModal'
const CstSection = styled.section`
    width: 100vw;
    font-family:'Avenir', sans-serif;
    background: url(${bgContact}) no-repeat center;
    background-size: cover;
    padding-bottom: 10rem;
    @media screen and (min-width: 992px){
        height:100vh;
        padding-bottom: 5rem;
    }
    `

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
    return <CstSection id="contact" background={bgContact} >
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <Title fontSize="1.7rem" color={colorsTheme.secondary}>Démarrer une collaboration</Title>
                    <p>Une idée ou encore besoin d'un soutien supplémentaire sur un développement ?
                        Dans ce cas n'hésitez pas, contactez-moi.</p>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-10 offset-md-1">
                    {error && <Alert>Merci de valider le reCAPTCHA svp</Alert>}
                    <RecaptchaForm onSubmit={handleSubmit} onloadCallback={recaptchaLoaded} verifyCallback={verifiedRecaptcha} loading={loading} />
                    {modal !== false ? <Modal onClose={setModal} success={emailSuccess} /> : ''}
                </div>
            </div>
        </div>
    </CstSection>
}

function Alert({ children }) {
    return <div className="alert alert-danger alert-dismissible fade show" role="alert">
        {children}
    </div>
}