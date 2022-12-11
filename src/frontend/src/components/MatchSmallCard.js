import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';
export const MatchSmallCard = ({match,teamName}) => {


    const otherTeam = match.team1===teamName ? match.team2 : match.team1
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.winner
    if(!match) return null;
    return (
        <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
        <span>VS</span>
        <h3><Link to={otherTeamRoute}> {otherTeam}</Link></h3>
        <p className="match-result">{match.winner} won by {match.resulMargin} {match.result}</p>

        </div>
    );
}

