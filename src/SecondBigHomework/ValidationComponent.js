import React from 'react';

const validationComponent = (props) => {
    return (
        <div className="error margin-bottom-50">
            {
                props.inputTouched ?
                    props.inputTextLength > 5 ?
                        'Text too long'
                        :
                        props.inputTextLength < 5 ?
                            'Text too short'
                            :
                            null
                    :
                    null
            }
        </div>
    );
};

export default validationComponent;
