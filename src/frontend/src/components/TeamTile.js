import { React } from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.scss';
import kkr_logo from '../assets/kkr.png';
import mi_logo from '../assets/mi.png';
import sh_logo from '../assets/sh.png';
import rcb_logo from '../assets/rcb.png';
import csk_logo from '../assets/csk.png';
export const TeamTile = ({teamName}) => {
    // function SwitchCase(name) {
    //     switch(name) {
    //       case 'Kolkata Knight Riders':
    //         return '../assets/kkr.png';
    //       case 'Mumbai Indians':
    //         return '../assets/mi.png';
    //       default:
    //           return '../assets/kkr.png';
    //     }
    //   }

    return(
        <div className="TeamTile">
            <h1>
                <Link to = {`/teams/${teamName}`}>
                    {teamName}
                </Link>
            </h1>
            {(() => {
  
            switch (teamName) {
                case 'Kolkata Knight Riders':
                    return (
                            <img className="kkr" alt="logo" src={kkr_logo} />
                        )
                case 'Mumbai Indians':
                    return (
                        <div className="icon">
                            <img className="mi" alt="logo" src={mi_logo} />
                        </div>
                    )
                case 'Royal Challengers Bangalore':
                    return (
                        <div className="icon">
                            <img className="mi" alt="logo" src={rcb_logo} />
                        </div>
                    )
                case 'Chennai Super Kings':
                    return (
                        <div className="icon">
                            <img className="mi" alt="logo" src={csk_logo} />
                        </div>
                    )
                case 'Sunrisers Hyderabad':
                    return (
                        <div className="icon">
                            <img className="mi" alt="logo" src={sh_logo} />
                        </div>
                    )
                default:
                    return (
                        <div className="icon">
                            {/* <img className="mi" alt="logo" src={kkr_logo} /> */}
                        </div>
                    )
            }
            

            })()}
            
        </div>
    )
}
