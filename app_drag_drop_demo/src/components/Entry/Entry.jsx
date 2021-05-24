import React from "react";
import { Container, Toast, ToastBody, ToastHeader } from "reactstrap";
import { useSelector } from 'react-redux';



 const Entry = () => {
     const entries = useSelector(state => state.entries);
       
     const renderedEntries = entries.map(entry =>(
        <Toast key={entry.id}>
            <ToastHeader>
                {entry.title}
            </ToastHeader>
            <ToastBody>
                {entry.description}
            </ToastBody>
        </Toast>
     ));

    return(
       <Container>
           {renderedEntries}
       </Container>
        
    );

 };

 export default Entry;

