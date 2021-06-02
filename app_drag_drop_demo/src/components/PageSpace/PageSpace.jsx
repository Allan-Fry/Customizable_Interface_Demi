import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';


export const PageSpace = (props) =>{
    const gameTab = useSelector(
                                state => state.tabs.find(
                                                            gameTab => gameTab.gamePage === props.gamePage
                                                        )
                                );
                                
    const renderedRows = gameTab.area.map
                                            (
                                                a => 
                                                    (
                                                        <Row>
                                                            Test
                                                        </Row>
                                                    )
                                            );


    return(
        <Col>
            {renderedRows}
        </Col>
    );


}