import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Button } from './Button'
import styled from 'styled-components'
import { colorsTheme } from './colorsTheme'

const CstDiv = styled.div`
    background-color: ${colorsTheme.primary};
    `
const CstH5 = styled.h5`
    color: white;
    font-family: 'Oswald', sans-serif;
    `
export function Modal({ success, onClose }) {
    return createPortal(<>
        <div className="modal fade show" tabIndex="-1" id="myModal" role="dialog" aria-modal="true" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <CstDiv className="modal-header">
                        <CstH5 className="modal-title">{success ? 'Envoyé !' : 'Oups...'}</CstH5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="fermer" onClick={onClose}>
                            <span aria-hidden="true">x</span>
                        </button>
                    </CstDiv>
                    <div className="modal-body">
                        <Success success={success} />
                    </div>
                    <CstDiv className="modal-footer">
                        <Button onClick={onClose} dataDismiss="modal">Fermer</Button>
                    </CstDiv>
                </div>
            </div>
        </div>
        <div id="modalBackdrop" className="modal-backdrop fade show" />
    </>, document.body)
}

Modal.propTypes = {
    success: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

const CstI = styled.i`
    color:black;
    font-size:5rem;`

const CstP = styled.p`
    font-family: 'Avenir', sans-serif;`

function Success({ success }) {
    if (success) {
        return <div className="row">
            <div className="col-md-12">
                <CstP>
                    Votre message m'a bien été transmis, j'ai hâte de vous lire. Je reviens vers vous très bientôt.
                </CstP>
            </div>
            <div className="col-md-12 text-center">
                <CstI success={success} className="far fa-smile" />
            </div>
        </div>
    } else {
        return <div className="row">
            <div className="col-md-12">
                <CstP>
                    Il semble y avoir eu une erreur lors de l'envoi...n'hésitez pas à réessayer plus tard.
                </CstP>
            </div>
            <div className="col-md-12 text-center">
                <CstI success={success} className="far fa-sad-tear" />
            </div>
        </div>

    }
} 