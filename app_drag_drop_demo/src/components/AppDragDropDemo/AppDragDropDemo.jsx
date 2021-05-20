import React, { Component } from 'react';
import {Toast, ToastHeader, Container, Row, Col} from 'reactstrap';
import './AppDragDropDemo.css';

export default class AppDragDropDemo extends Component 
{  
    state = 
    { 
        tasks: [
            {
                name:"Learn Angular",
                category:"wip",              
                bgcolor: "yellow"
            },
            {
                name:"React",              
                category:"wip",              
                bgcolor:"pink"
            },
            {
                name:"Vue",              
                category:"complete",              
                bgcolor:"skyblue"}]
    }
   
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    
    render () 
    {    
        
        var tasks ={
            wip:[],
            complete: []

        }
        

        this.state.tasks.forEach((t) => 
        {
          tasks[t.category].push(
            <Toast    
                    key={t.name}
                    
                    draggable
                    className="draggable"
                    style={{backgroundColor: t.bgcolor}}
            >
                <ToastHeader>{t.name}</ToastHeader>
            </Toast>
          )  
        });
        

        return (      
            <Container className="container-drag">        
                <h2 className="header">
                    DRAG & DROP DEMO
                </h2>
                <Row className="wip">
                    <Col className="task-header">
                        WIP
                    </Col>
                    {tasks.wip}
                </Row>
                <Row 
                    className="droppable" 
                    onDragOver={
                        (e)=>this.onDragOver(e)}
                >
                    <Col className="task-header">
                       COMPLETED
                    </Col> 
                    {tasks.complete}
                </Row>
            </Container>
            
        );  
    }
}
