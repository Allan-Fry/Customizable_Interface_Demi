import React, { Component } from 'react';
import {Toast, ToastHeader, Container, Row, Col} from 'reactstrap';
import './AppDragDropDemo.css';

export default class AppDragDropDemo extends Component{  

   
    onDragStart = (ev, id) => {
        this.props.onDragStart(ev, id);
    }
    


    render () 
    {    
        
        var tasks ={
         unPlaced:[]

        }
        

        this.props.tasks.forEach((t) => 
        {
          tasks["unPlaced"].push(
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
                    <Col className="wip"
                    onDrop={(e)=>{this.onDrop(e, "unPlaced")}}>
                        <Row>
                            <Col tag='h3' className="task-header">
                                Unplaced
                            </Col>
                        </Row>
                            {tasks.unPlaced}
                    </Col>
                    <Col />
                </Row>
            </Container>
            
        );  
    }
}
