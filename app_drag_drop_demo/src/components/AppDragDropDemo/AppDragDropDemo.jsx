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

        // this.props.tasks.forEach((t) => 
        // {
        //   tasks["unPlaced"].push(
        //     <Row>
        //     <Col />
        //         <Toast    
        //             key={t.name}
        //             draggable
        //             onDragStart = {(e) => this.onDragStart(e, t.name)}
        //             className="draggable"
        //             style={{backgroundColor: t.bgcolor}}
        //     >
        //             <ToastHeader>
        //                 {t.name}
        //             </ToastHeader>
        //         </Toast>
        //     <Col />
        //     </Row>
        //   )  
        // });
        

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
