import React from 'react';

export default props => {
    let message = 'Undefined error';
    switch (props.error.type) {
        case 'http':
            switch (props.error.code) {
                case 403: message = 'Action is not allowed'; break;
                case 404: message = 'Resource not found'; break;
            }
            break;

    }
    return <div>
        {message}
    </div>;
}
