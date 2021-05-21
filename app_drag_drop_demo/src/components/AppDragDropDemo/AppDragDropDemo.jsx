import React, { Component } from 'react';
import {Toast, ToastHeader, Container, Row, Col} from 'reactstrap';
import './AppDragDropDemo.css';

export default class AppDragDropDemo extends Component{  
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

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
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
            <Row>
            <Col />
                <Toast    
                    key={t.name}
                    draggable
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    className="draggable"
                    style={{backgroundColor: t.bgcolor}}
            >
                    <ToastHeader>
                        {t.name}
                    </ToastHeader>
                </Toast>
            <Col />
            </Row>
          )  
        });
        

        return (      
            <Container className="container-drag">    
                <Row>
                    <Col tag='h2' className="header">
                        DRAG & DROP DEMO
                    </Col>
                </Row>
                <Row>
                    <Col className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                        <Row>
                            <Col tag='h3' className="task-header">
                                WIP
                            </Col>
                        </Row>
                            {tasks.wip}
                    </Col>
                    <Col />
                    <Col className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                           
                        <Row>
                            <Col tag='h3' className="task-header">
                                COMPLETED
                            </Col> 
                        </Row>
                            {tasks.complete}
                    </Col>
                </Row>
            </Container>
            
        );  
    }
}
