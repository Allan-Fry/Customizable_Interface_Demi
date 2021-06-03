import React from 'react';
import { Col, Row, TabPane } from 'reactstrap';
import { PageSpace } from '../PageSpace/PageSpace';



export const NavTab = (props) =>{

    return(
        <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <PageSpace gamePage={props.gamePage} />
                </Col>
              </Row>
        </TabPane>

    );


}