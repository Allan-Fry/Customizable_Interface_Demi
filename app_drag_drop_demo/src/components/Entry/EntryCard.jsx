import React, {useState} from 'react';
import { Button, Container, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { entryUpdate } from '../../redux/entries/entriesSlice';

const EntryCards = ({entry}) =>{
    const [toggle, setToggle] = useState(true);
    

    // const entry = useSelector(state =>
    //     state.entries.find( entries => entries.id === entryID)
    //     );

    // const [description, setDescription] = useState(this.state.entry.description);
    
     const dispatch = useDispatch();
    //  const onDescriptionChange = e => setDescription(e.target.value);

    
    
    function toggleInput(){
        setToggle(false);
    };
    function onClick(e){
        // if (description){

        //     dispatch(entryUpdate({id: entryID, description}))
        // }
        console.log("Click");
        console.log(entry);
    };

    return(

        <Toast 
        // key={entry.id}
        >
            <ToastHeader>
                {entry.title}
           
            </ToastHeader>
            {toggle ? (
            <ToastBody
            onDoubleClick={toggleInput}
            >
                {entry.description}
            </ToastBody>
            ) : (
                <Container>
                    <input type="text"
                    value={entry.description} 
                    //onChange={onDescriptionChange}
                    />
                    <Button 
                    onClick={onClick}
                    />
                </Container>
            )}
            <Button onClick={onClick}></Button>
        </Toast>

    );

}
export default EntryCards;