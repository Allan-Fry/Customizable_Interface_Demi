import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';



export const GameCard =(props) =>{


    return(
        <Card>
        <CardHeader>
            {props.Header}
        </CardHeader>
        <CardBody>
            {props.Description}
        </CardBody>
    </Card>
    );
}