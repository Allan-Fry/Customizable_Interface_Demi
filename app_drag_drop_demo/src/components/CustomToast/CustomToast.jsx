import React, { Component } from 'react';
import { Toast, ToastHeader, ToastBody, Container, Row, Col } from 'reactstrap';
import './CustomToast';



export default class CustomToast extends Component{


    state = {

            toasts: [
                {
                    toastID: "1",
                    bgcolor: "yellow",
                    column: "col1",
                    header: "Worst",
                    body: ""
                },
                {
                    toastID: "2",
                    bgcolor: "pink",
                    column: "col2",
                    header: "Best",
                    body: ""
                },
                {
                    toastID: "3",
                    bgcolor: "red",
                    column: "col3",
                    header: "Other",
                    body: "This is called a toast."
                }
            ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDragStart = (ev, header, id) => {
        console.log('dragstart:',id,header);
        ev.dataTransfer.setData("header", header);
        ev.dataTransfer.setData("id", id);
        console.log(ev.dataTransfer.getData("header"));
        console.log(ev.dataTransfer.getData("id"));
    }
    onDropHeader = (ev, dropHeader, dropID) => {
        let tempDragHeader = ev.dataTransfer.getData("header");
        let dragID =ev.dataTransfer.getData("id");
        let tempDropHeader = dropHeader;

        console.log('drag',tempDragHeader, dragID, 'drop', tempDropHeader, dropID)

        let toasts = this.state.toasts.filter((toast) =>{

            if(toast.toastID === dropID){
                toast.header = tempDragHeader;

            }
            if(toast.toastID === dragID){
                toast.header = tempDropHeader;
            }
            console.log(toast);
            return toast;

        });
        this.setState({
            ...this.state,
            toasts
        });


    

       
    }    




            render (){

                var toasts ={
                    col1:[],
                    col2:[],
                    col3:[]
                }


            this.state.toasts.forEach((t) => {
                toasts[t.column].push(
                    <Toast 
                    key={t.toastID}
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDropHeader(e, t.header, t.toastID)}}
                    style={{backgroundColor: t.bgcolor}}
                    >
                        <ToastHeader
                        draggable
                        onDragStart = {(e) => this.onDragStart(e, t.header, t.toastID)}
                        >
                            {t.header}
                        </ToastHeader>
                        <ToastBody
                        
                        >
                            {t.body}
                        </ToastBody>
                    </Toast>


                )

                
            });



            return(
                <Container>
                    <Row>
                        <Col>
                            {toasts.col1}
                        </Col>
                        <Col>
                            {toasts.col2}
                        </Col>
                        <Col>
                            {toasts.col3}
                        </Col>
                    </Row>
                </Container>
            );
            }
    }

