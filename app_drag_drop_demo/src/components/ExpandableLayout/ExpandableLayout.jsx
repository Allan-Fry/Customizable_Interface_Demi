import { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import'./ExpandableLayout.css';


export default class ExpandableLayout extends Component{




        addNewCol = (e) =>{
            this.props.addNewCol(e);

        }
        onDragOver = (ev) => {
         this.props.onDragOver(ev);
        }

        onDrop = (ev) => {
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



            this.props.gridSpace.forEach((gs) =>
            {
                gs.area.forEach((a) => 
                {
                    rows[gs.rowID].push(
                        <Col
                        className="GridSpace"
                        // xs="auto"
                        onDragOver={((e)=>this.onDragOver(e))}
                        onDrop={(e)=>this.onDrop(e, "complete")}
                        key={a.rowName}
                        >
                            text
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


            return(

                <Container>
                        {gridSpace.firstPage}               
                </Container>

            );

        }





}