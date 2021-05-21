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
                    header: "",
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
                    header: "",
                    body: "This is called a toast."
                }
            ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
    onDrop = (ev, col) => {
        let id = ev.dataTransfer.getData("id");

        let toasts = this.state.toasts.filter((toast) => {
            if (toast.toastID === id) {
                toast.column = col;
            }
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
                    onDragStart = {(e) => this.onDragStart(e, t.toastID)}
                    draggable
                    style={{backgroundColor: t.bgcolor}}
                    >
                        <ToastHeader
                        
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
                        <Col
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "col1")}}
                        >
                            {toasts.col1}
                        </Col>
                        <Col
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "col2")}}
                        >
                            {toasts.col2}
                        </Col>
                        <Col
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "col3")}}
                        >
                            {toasts.col3}
                        </Col>
                    </Row>
                </Container>
            );
            }
    }

