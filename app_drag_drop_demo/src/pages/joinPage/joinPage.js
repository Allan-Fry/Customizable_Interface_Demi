import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { GameCard } from '../../components/GameCard/GameCard';


export const JoinPage = () =>{
    const games = useSelector(state => state.games);
    const renderedGames = games.map(game =>(
            <GameCard Header={game.gameName} Description={game.gameDescription}></GameCard>
        )
        );
    return(
        <Container>
            <Row>
                <Col>
                {renderedGames}
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>


    );



}