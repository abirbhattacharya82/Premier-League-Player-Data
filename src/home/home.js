import React from "react";
import './home.css';
import db from '../model/all_players.csv';
const Home = () => {
    return (
        <div className="home">
            <div className="heading">
                Premier League Player Data
            </div>
            <div className="subheading">
                This is the best place to stay upto date with your favourie players stats. <br />
                Fill in the following filters to get started.
            </div>
            <div className="input_area">
                <div className="select_area">
                    <label htmlFor="team">Team</label>
                    <select name="team" id="team">
                        <option value="ars">Arsenal</option>
                        <option value="mci">Manchester City</option>
                        <option value="new">New Castle</option>
                        <option value="tot">Tottenham</option>
                        <option value="mnu">Manchester United</option>
                        <option value="liv">Liverpool</option>
                        <option value="bri">Brighton</option>
                        <option value="che">Chelsea</option>
                        <option value="ful">Fulham</option>
                        <option value="bre">Brentford</option>
                        <option value="cry">Crystal Palace</option>
                        <option value="ast">Aston Villa</option>
                        <option value="lei">Leicester City</option>
                        <option value="bou">Bournemouth</option>
                        <option value="lee">Leeds United</option>
                        <option value="wha">West Ham</option>
                        <option value="eve">Everton</option>
                        <option value="not">Nottingham Forest</option>
                        <option value="sou">Southampton</option>
                        <option value="wol">Wolverhampton Wolves</option>
                    </select>
                </div>
                <div className="select_area">
                    <label htmlFor="position">Position</label>
                    <select name="position" id="position">
                        <option value="gk">Goalkeeper</option>
                        <option value="df">Defender</option>
                        <option value="mf">Midfielder</option>
                        <option value="fw">Forward</option>
                    </select>
                </div>
                <div className="select_area">
                    <label htmlFor="appearances">Minimum Appearances</label>
                    <select name="appearances" id="appearances">
                        <option value="opt1">0-10</option>
                        <option value="opt2">10-20</option>
                        <option value="opt3">20-30</option>
                        <option value="opt4">30-40</option>
                        <option value="opt5">40-50</option>
                        <option value="opt6">50-60</option>
                    </select>
                </div>
                <div className="select_area">
                    <label htmlFor="goals">Minimum Goals</label>
                    <select name="goals" id="goals">
                        <option value="opt1">0-10</option>
                        <option value="opt2">10-20</option>
                        <option value="opt3">20-30</option>
                        <option value="opt4">30-40</option>
                    </select>
                </div>
                <button onClick={
                    () => {
                        console.log(db);
                        console.log(document.getElementById("team").value);
                    }
                }>check</button>
            </div>
        </div>
    );
}

export default Home;