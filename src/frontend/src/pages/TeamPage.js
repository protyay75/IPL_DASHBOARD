import { React,useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

import kkr_logo from '../assets/kkr.png';
import mi_logo from '../assets/mi.png';
import sh_logo from '../assets/sh.png';
import rcb_logo from '../assets/rcb.png';
import csk_logo from '../assets/csk.png';

export const TeamPage = () => {

    const [team,setTeam] = useState({matches: []});
    const {teamName} = useParams();
    useEffect(
        () => {
            const fetchMatches = async() => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },[teamName]
    );


    if(!team || !team.teamName)
    {
        return (
            <h1>Team Not Found</h1>
        )
    }

    return (
        <div className="TeamPage">
            
        <div className="team-name-section">
        {(() => {
  
  switch (teamName) {
      case 'Kolkata Knight Riders':
          return (
                  <img className="icon" alt="logo" src={kkr_logo} />
              )
      case 'Mumbai Indians':
          return (
                  <img className="icon" alt="logo" src={mi_logo} />
          )
      case 'Royal Challengers Bangalore':
          return (
                  <img className="icon" alt="logo" src={rcb_logo} />
              
          )
      case 'Chennai Super Kings':
          return (
                  <img className="icon" alt="logo" src={csk_logo} />
              
          )
      case 'Sunrisers Hyderabad':
          return (
                  <img className="icon" alt="logo" src={sh_logo} />
              
          )
      default:
          return (
              <div className="icon">
                  {/* <img className="mi" alt="logo" src={kkr_logo} /> */}
              </div>
          )
  }
  

  })()}
        <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div className="win-loss-section">
            Wins/Losses
        <PieChart className="pi"
            data={[
                
                { title: team.totalMatches + ' Losses', value: team.totalMatches, color: '#a34d5d' },
                { title: team.totalWins + ' Wins', value: team.totalWins, color: '#4da375' },
                
            ]}
            />
        </div>
        <div className="match-detail-section">
        <h3>Lateste Matches</h3>
        <MatchDetailCard  teamName={team.teamName} match={team.matches[0]} />
        </div>
        {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match}/>) }
        <div className="more-link">
            <Link to = {`/teams/${teamName}/matches/2020`}> More &gt; </Link>
        </div>
        </div>
    );
}

