import React from 'react';
import { Col, Row, TabPane } from 'reactstrap';
import { ContentSpace } from '../ContentSpace/ContentSpace';


export const NavTab = () =>{

    return(
        <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <ContentSpace />
                </Col>
              </Row>
        </TabPane>

    );


}