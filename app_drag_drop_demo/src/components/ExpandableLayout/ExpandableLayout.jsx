import React from "react";
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row } from "reactstrap";
import'./ExpandableLayout.css';


export const ExpandableLayout = ({gridSpace}) => {

        const entries = useSelector(state => state.entries);

        const addNewCol = (e) =>{
            this.props.addNewCol(e);

        }
        const onButtonPress = (e) =>{
            console.log(this.mapStateToProps.entries);
        }
        const onDragOver = (ev) => {
         this.props.onDragOver(ev);
        }

        const onDrop = (ev, col) => {
            console.log(ev, col);
            this.props.onDrop(ev);
        }



           const renderedRows = gridSpace.map(gs =>
            (
                <Row>
                    {gs.area.map(a => (
                        <Col
                        className="GridSpace"
                        xs="auto"
                        onDragOver={onDragOver}
                        onDrop={(e)=>onDrop(e, gs.area.colName)}
                        key={a.rowName}
                        >
                        Test
                        </Col>
                    ))}
                </Row>
            ));


            return(

                <Container>
                        {renderedRows} 
                        <Button 
                        onClick={onButtonPress}
                        ></Button>              
                </Container>

            );






}