import React from "react";
import './results.css';
import { useState } from "react";

const Results = (props) => {
    const db=require('../model/player_database.json');
    var all_players_from_team = [];
    if(props.prop[0] === "ars"){
        all_players_from_team = db.filter((player) => player.Club === "Arsenal");
    }
    else if(props.prop[0] === "mci"){
        all_players_from_team = db.filter((player) => player.Club === "Manchester City");
    }
    else if(props.prop[0] === "newc"){
        all_players_from_team = db.filter((player) => player.Club === "Newcastle United");
    }
    else if(props.prop[0] === "tot"){
        all_players_from_team = db.filter((player) => player.Club === "Tottenham Hotspur");
    }
    else if(props.prop[0] === "mnu"){
        all_players_from_team = db.filter((player) => player.Club === "Manchester United");
    }
    else if(props.prop[0] === "liv"){
        all_players_from_team = db.filter((player) => player.Club === "Liverpool");
    }
    else if(props.prop[0] === "bri"){
        all_players_from_team = db.filter((player) => player.Club === "Brighton & Hove Albion");
    }
    else if(props.prop[0] === "che"){
        all_players_from_team = db.filter((player) => player.Club === "Chelsea");
    }
    else if(props.prop[0] === "ful"){
        all_players_from_team = db.filter((player) => player.Club === "Fulham");
    }
    else if(props.prop[0] === "bre"){
        all_players_from_team = db.filter((player) => player.Club === "Brentford");
    }
    else if(props.prop[0] === "cry"){
        all_players_from_team = db.filter((player) => player.Club === "Crystal Palace");
    }
    else if(props.prop[0] === "ast"){
        all_players_from_team = db.filter((player) => player.Club === "Aston Villa");
    }
    else if(props.prop[0] === "lei"){
        all_players_from_team = db.filter((player) => player.Club === "Leicester City");
    }
    else if(props.prop[0] === "bou"){
        all_players_from_team = db.filter((player) => player.Club === "AFC Bournemouth");
    }
    else if(props.prop[0] === "lee"){
        all_players_from_team = db.filter((player) => player.Club === "Leeds United");
    }
    else if(props.prop[0] === "wha"){
        all_players_from_team = db.filter((player) => player.Club === "West Ham United");
    }
    else if(props.prop[0] === "eve"){
        all_players_from_team = db.filter((player) => player.Club === "Everton");
    }
    else if(props.prop[0] === "sou"){
        all_players_from_team = db.filter((player) => player.Club === "Southampton");
    }
    else if(props.prop[0] === "wol"){
        all_players_from_team = db.filter((player) => player.Club === "Wolverhampton Wanderers");
    }
    else if(props.prop[0] === "not"){
        all_players_from_team = db.filter((player) => player.Club === "Nottingham Forest");
    }
    
    var players_with_positions = [];
    if(props.prop[1] === "gk"){
        players_with_positions = all_players_from_team.filter((player) => player.Position === "GK");
    }
    else if(props.prop[1] === "df"){
        players_with_positions = all_players_from_team.filter((player) => player.Position === "CB" || player.Position === "LB" || player.Position === "RB" || player.Position === "DEF");
    }
    else if(props.prop[1] === "mf"){
        players_with_positions = all_players_from_team.filter((player) => player.Position === "CM" || player.Position === "LM" || player.Position === "RM" || player.Position === "CAM" || player.Position === "CDM" || player.Position === "MID");
    }
    else if(props.prop[1] === "fw"){
        players_with_positions = all_players_from_team.filter((player) => player.Position === "ST" || player.Position === "LW" || player.Position === "RW" || player.Position === "CF" || player.position === "FWD");
    }
    console.log(players_with_positions);

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