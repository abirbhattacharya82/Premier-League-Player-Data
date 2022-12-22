import React from "react";
import './results.css';
import { useState } from "react";

const Results = (props) => {
    const db=require('../model/players.json');
    var all_players_from_team = [];
    if(props.prop[0] === "ars"){
        all_players_from_team = db.filter((player) => player.Team === "Arsenal");
    }
    else if(props.prop[0] === "mci"){
        all_players_from_team = db.filter((player) => player.Team === "Manchester City");
    }
    else if(props.prop[0] === "newc"){
        all_players_from_team = db.filter((player) => player.Team === "Newcastle United");
    }
    else if(props.prop[0] === "tot"){
        all_players_from_team = db.filter((player) => player.Team === "Tottenham Hotspur");
    }
    else if(props.prop[0] === "mnu"){
        all_players_from_team = db.filter((player) => player.Team === "Manchester United");
    }
    else if(props.prop[0] === "liv"){
        all_players_from_team = db.filter((player) => player.Team === "Liverpool");
    }
    else if(props.prop[0] === "bri"){
        all_players_from_team = db.filter((player) => player.Team === "Brighton and Hove Albion");
    }
    else if(props.prop[0] === "che"){
        all_players_from_team = db.filter((player) => player.Team === "Chelsea");
    }
    else if(props.prop[0] === "ful"){
        all_players_from_team = db.filter((player) => player.Team === "Fulham");
    }
    else if(props.prop[0] === "bre"){
        all_players_from_team = db.filter((player) => player.Team === "Brentford");
    }
    else if(props.prop[0] === "cry"){
        all_players_from_team = db.filter((player) => player.Team === "Crystal Palace");
    }
    else if(props.prop[0] === "ast"){
        all_players_from_team = db.filter((player) => player.Team === "Aston Villa");
    }
    else if(props.prop[0] === "lei"){
        all_players_from_team = db.filter((player) => player.Team === "Leicester City");
    }
    else if(props.prop[0] === "bou"){
        all_players_from_team = db.filter((player) => player.Team === "Bournemouth");
    }
    else if(props.prop[0] === "lee"){
        all_players_from_team = db.filter((player) => player.Team === "Leeds United");
    }
    else if(props.prop[0] === "wha"){
        all_players_from_team = db.filter((player) => player.Team === "West Ham United");
    }
    else if(props.prop[0] === "eve"){
        all_players_from_team = db.filter((player) => player.Team === "Everton");
    }
    else if(props.prop[0] === "sou"){
        all_players_from_team = db.filter((player) => player.Team === "Southampton");
    }
    else if(props.prop[0] === "wol"){
        all_players_from_team = db.filter((player) => player.Team === "Wolverhampton Wanderers");
    }
    else if(props.prop[0] === "not"){
        all_players_from_team = db.filter((player) => player.Team === "Norwich");
    }
    console.log(all_players_from_team);

    return (
        <div className="results">
            <div className="team_name">
                <h1>{props.prop[0]}</h1>
            </div>
            <div className="team_position">
                <h1>{props.prop[1]}</h1>
            </div>
            <div className="team_appearances">
                <h1>{props.prop[2]}</h1>
            </div>
            <div className="team_goals">
                <h1>{props.prop[3]}</h1>
            </div>
        </div>
    );
}

export default Results;