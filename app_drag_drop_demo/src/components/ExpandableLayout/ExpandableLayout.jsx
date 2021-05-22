import { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import'./ExpandableLayout.css';

export default class ExpandableLayout extends Component{


        state = {
            gridSpace: [
                {
                    pageName:"firstPage",
                    rowID:"0",
                    area:[{
                        colName:"col1",
                    },
                    {
                        colName:"col2"
                    },
                    {
                        colName:"col3"
                    }
                    ]
                },
                {
                    pageName:"firstPage",
                    rowID:"1",
                    area:[{
                        colName:"col1"
                    },
                    {
                        colName:"col2"
                    },
                    {
                        colName:"col3"
                    }
                    ]
                },
                {
                    pageName:"firstPage",
                    rowID:"2",
                    area:[{
                        colName:"col1"
                    },
                    {
                        colName:"col2"
                    },
                    {
                        colName:"col3"
                    }
                    ]
                }


            ]





        }


        addNewCol = (e) =>{
            let previousArea = this.state.gridSpace[e].area;
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



            this.state.gridSpace.forEach((gs) =>
            {
                gs.area.forEach((a) => 
                {
                    rows[gs.rowID].push(
                        <Col
                        className="GridSpace"
                        // xs="auto"
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