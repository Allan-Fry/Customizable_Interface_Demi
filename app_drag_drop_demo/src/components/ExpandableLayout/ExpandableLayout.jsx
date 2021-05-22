import { Component } from "react";
import { Button, Col, Container, Row, Toast, ToastHeader } from "reactstrap";
import'./ExpandableLayout.css';


export default class ExpandableLayout extends Component{




        addNewCol = (e) =>{
            this.props.addNewCol(e);

        }
        onDragOver = (ev) => {
         this.props.onDragOver(ev);
        }

        onDrop = (ev, col) => {
            console.log(ev, col);
            this.props.onDrop(ev);

        }

        render(){

            var gridSpace ={
                firstPage:[]
            }
            var rows ={
                0:[],
                1:[],
                2:[]


            }
            var tasks ={
                placed:[]
            }
            this.props.tasks.forEach((t) =>{
                if(t.category==='placed'){
                    tasks['placed'].push(
                        <Toast    
                        draggable
                        //onDragStart = {(e) => this.onDragStart(e, t.name)}
                        className="draggable"
                        style={{backgroundColor: t.bgcolor}}
                        >
                            <ToastHeader>
                               {t.ToastHeader}
                            </ToastHeader>
                        </Toast>

                    )
                }


            })


            this.props.gridSpace.forEach((gs) =>
            {
                gs.area.forEach((a) => 
                {
                    rows[gs.rowID].push(
                        <Col
                        className="GridSpace"
                        // xs="auto"
                        onDragOver={((e)=>this.onDragOver(e))}
                        onDrop={(e)=>this.onDrop(e, gs.area.colName)}
                        key={a.rowName}
                        >
                           <Toast    
                            draggable
                            //onDragStart = {(e) => this.onDragStart(e, t.name)}
                            className="draggable"
                            //style={{backgroundColor: bgcolor}}
                            >
                                <ToastHeader>
                                   
                                </ToastHeader>
                            </Toast>
                        </Col>
                    )


                });



                gridSpace[gs.pageName].push(
                    <Row 
                    key={gs.rowID}
                    >
                        {rows[gs.rowID]}
                        <Col 
                        xs='1'
                        >
                        <Button onClick= {(e) => this.addNewCol(gs.rowID)}>
                            +
                        </Button>
                        </Col>
                    </Row>

                )

            });

            this.props.tasks.forEach((t) => 
        {
          tasks["placed"].push(
            <Row>
            <Col />
                
            <Col />
            </Row>
          )  
        });


            return(

                <Container>
                        {gridSpace.firstPage}               
                </Container>

            );

        }





}