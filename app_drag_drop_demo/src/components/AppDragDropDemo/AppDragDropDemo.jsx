import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
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
        tasks['unPlaced'].push(
            this.props.toasts
        );

        

        return (      
            <Container className="container-drag">    
                <Row>
                    <Col className="wip"
                    >
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
