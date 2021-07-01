import React from 'react';
import {
    EuiButton,
    EuiModal,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiModalFooter,
    EuiOverlayMask,
} from '@elastic/eui';

function RecipePopup ({handleClose}) {


    return (
        <EuiOverlayMask>
            <EuiModal onclose={handleClose}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        <EuiModalHeader>
                            <h1> Recipe Name </h1>
                        </EuiModalHeader>
                    </EuiModalHeaderTitle>
                </EuiModalHeader>
                <EuiModalFooter>
                    <EuiButton onClick={handleClose} fill>
                        Close
                    </EuiButton>
                </EuiModalFooter>
            </EuiModal>
    </EuiOverlayMask>
    )
}

export default RecipePopup;