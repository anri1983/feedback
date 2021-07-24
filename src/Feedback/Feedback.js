import React from 'react';

 function Feedback({name, feedback}) {
    return <ul>
        <li>{name} : {feedback}</li>
    </ul>
    
}

export default Feedback;