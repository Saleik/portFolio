import React from 'react'
import PropTypes from 'prop-types'

export function EmailStatus({ status, loading }) {
    return <div class="modal-dialog modal-dialog-centered">
        Message envoyé
            </div>


}

EmailStatus.propTypes = {
    loading: PropTypes.bool.isRequired
}

