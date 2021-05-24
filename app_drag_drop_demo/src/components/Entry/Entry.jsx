import React from "react";
import { Container, Toast, ToastBody, ToastHeader } from "reactstrap";
import { useSelector } from 'react-redux';
import EntryCards from "./EntryCard";



 const Entry = () => {
    const entries = useSelector(state => state.entries);
    



    const renderedEntries = entries.map(entry =>(
        <EntryCards entryKey={entry.id} />
     ));

    return(
       <Container>
           {renderedEntries}
       </Container>
        
    );

 };

 export default Entry;

