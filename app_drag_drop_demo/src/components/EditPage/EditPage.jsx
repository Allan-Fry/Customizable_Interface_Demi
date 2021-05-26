import { Component } from "react";
import { Button, Col, Container, Toast, ToastHeader, UncontrolledCollapse } from "reactstrap";
import AppDragDropDemo from "../AppDragDropDemo/AppDragDropDemo";
import Entry from "../Entry/Entry";
import { ExpandableLayout } from "../ExpandableLayout/ExpandableLayout";
import { useSelector } from 'react-redux';




const EditPage= () =>{
    const gridSpace = useSelector(state => state.gridSpace);
    
    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    const onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    };
    const onDrop = (ev, col) => {
        let id = ev.dataTransfer.getData("id");
        // let toasts = this.state.toasts[id];
        
        // let area = this.state.gridSpace[id].area.filter((area) => {
        //     if (area.colName === t) {
        //         area.content = toasts;
        //     }
        //     return area;
        // });

        // this.setState({
        //     ...this.state,
        //     area
        // });
    };    
    const addNewCol = (e) =>{
        let previousArea = gridSpace[e].area;
        let nextID = previousArea.length + 1;
        let nextColName = "col" + nextID;
        console.log(nextID);
        previousArea.push(
            {colName:nextColName}
        )
        console.log(previousArea);
        this.setState(
        previousArea
        )
       console.log(this.state);

    };


    const createToasts = (e) =>{

        // this.state.tasks.forEach((t) => 
        // {
        //   this.state["toasts"].push(
        //     <Col
        //     key={this.state.toasts.length}
        //     onDragStart = {(e) => this.onDragStart(e, this.state.toasts.length)}
        //     >
        //     <Col />
        //         <Toast    
        //             draggable
                    
        //             className="draggable"
        //             style={{backgroundColor: t.bgcolor}}
        //     >
        //             <ToastHeader>
        //                 {t.name}
        //             </ToastHeader>
        //         </Toast>
        //     <Col />
        //     </Col>
        //   )  
        // });

    };
    const viewToasts = (e) =>{

            // console.log(this.state.toasts);
        };
    

        return(

                <Container>
                    {/* <Entry></Entry> */}
                    <Button 
                    color="primary" 
                    id="toggler" 
                    className="toggleButton">
                        Toggle
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        {/* <AppDragDropDemo
                        draggable
                        // tasks={this.state.tasks}
                        onDragStart = {onDragStart}
                        //toasts={this.state.toasts}
                        >
                        </AppDragDropDemo> */}
                    </UncontrolledCollapse>
                    <ExpandableLayout
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    gridSpace={gridSpace}
                    addNewCol={addNewCol}
                    //tasks={this.state.tasks}
                    >

                    </ExpandableLayout>
                    <Button
                    onClick={createToasts}
                    >
                        Create Toast
                    </Button>
                    <Button
                    onClick={viewToasts}
                    >
                        View Toast
                    </Button>
                </Container>

        );




}
export default EditPage;