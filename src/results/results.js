import React from "react";
import './results.css';

const Results = (props) => {
    const db=require('../model/player_stats.json');
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

    var players_with_preffered_foot = [];
    if(props.prop[2] === "opt1"){
        players_with_preffered_foot = players_with_positions.filter((player) => player.PreferredFoot === "Left");
    }
    else if(props.prop[2] === "opt2"){
        players_with_preffered_foot = players_with_positions.filter((player) => player.PreferredFoot === "Right");
    }
    
    var final_list = [];
    if(props.prop[3] === "opt1"){
        final_list = players_with_preffered_foot.filter((player) => player.Overall > 90);
    }
    else if(props.prop[3] === "opt2"){
        final_list = players_with_preffered_foot.filter((player) => player.Overall > 80 && player.Overall <= 90);
    }
    else if(props.prop[3] === "opt3"){
        final_list = players_with_preffered_foot.filter((player) => player.Overall > 70 && player.Overall <= 80);
    }
    else if(props.prop[3] === "opt4"){
        final_list = players_with_preffered_foot.filter((player) => player.Overall > 60 && player.Overall <= 70);
    }
    else if(props.prop[3] === "opt5"){
        final_list = players_with_preffered_foot.filter((player) => player.Overall > 50 && player.Overall <= 60);
    }
    else if(props.prop[3] === "opt6"){
        final_list = players_with_preffered_foot.filter((player) => player.Overall <= 50);
    }
    console.log(final_list);

    

    return (
        <div className="results">
            <div className="headers">
                <div className="header">Name</div>
                <div className="header">Position</div>
                <div className="header">Overall</div>
                <div className="header">Preferred Foot</div>
            </div>
            {final_list.map((player) => (
                <div className="player">
                    <div className="player_name">{player.Name}</div>
                    <div className="player_position">{player.Position}</div>
                    <div className="player_overall">{player.Overall}</div>
                    <div className="player_preferred_foot">{player.PreferredFoot}</div>
                </div>
            ))}
        </div>
    );
}

export default Results;