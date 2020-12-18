import React from 'react'
import Recaptcha from 'react-recaptcha'
import { Field } from './Field'
import { Button } from './Button'

export function RecaptchaForm({ onSubmit, onloadCallback, verifyCallback, loading }) {

    return <form className="m-2" onSubmit={onSubmit}>
        <div className="row">
            <div className="col-md-6">
                <Field col="col-md-6" type="text" name="firstname" required>Nom*</Field>
            </div>
            <div className="col-md-6">
                <Field col="col-md-6" type="text" name="lastname" required >Prénom*</Field>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <Field col="col-md-6" type="text" name="object" required >Objet*</Field>
            </div>
            <div className="col-md-6">
                <Field col="col-md-6" type="email" name="email" required>Email*</Field>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <Field type="textarea" name="message" rows="5" required>Message*</Field>
            </div>
            <div className="col-md-12 text-center">
                <Button type="submit" loading={loading}>Envoyer</Button>
            </div>
        </div>
        <div className="mt-2 text-center">
            <Recaptcha
                hl="fr"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                render="explicit"
                onloadCallback={onloadCallback}
                verifyCallback={verifyCallback}
            />
        </div>
    </form>
}
