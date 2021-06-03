import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';


export const PageSpace = (props) =>{
    const tab = useSelector(
                                state => state.tabs.find(
                                                            tab => tab.gamePage === props.gamePage
                                                        )
                                );
                                
    const renderedRows = tab.area[0].rows.map
                                            (
                                                row => 
                                                    (
                                                        <Row>
                                                           {row.col.map
                                                                (
                                                                    col =>
                                                                            (
                                                                                <Col>Test</Col>
                                                                            )
                                                                )
                                                                }
                                                        </Row>
                                                    )
                                            );


    return(
        <Col>
            {renderedRows}
        </Col>
    );


}