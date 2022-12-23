import React from "react";
import './home.css';
import Results from "../results/results";
import { useState } from "react";
import ars from "../results/1.png";
import mci from "../results/2.png";
import newc from "../results/3.png";
import tot from "../results/4.png";
import mnu from "../results/5.png";
import liv from "../results/6.png";
import bri from "../results/7.png";
import che from "../results/8.png";
import ful from "../results/9.png";
import bre from "../results/10.png";
import cry from "../results/11.png";
import ast from "../results/12.png";
import lei from "../results/13.png";
import bou from "../results/14.png";
import lee from "../results/15.png";
import wha from "../results/16.png";
import eve from "../results/17.png";
import not from "../results/18.png";
import sou from "../results/19.png";
import wol from "../results/20.png";


const Home = () => {
    const [flag, setFlag] = useState(false);
    const [team, setTeam] = useState("ars");
    const [position, setPosition] = useState("gk");
    const [appearances, setAppearances] = useState("opt1");
    const [goals, setGoals] = useState("opt1");
    const [image_name, setImage] = useState("");

    return (
        <div className="home" id="home">
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
                        <option value="newc">New Castle</option>
                        <option value="tot">Tottenham</option>
                        <option value="mnu">Manchester United</option>
                        <option value="liv">Liverpool</option>
                        <option value="bri">Brighton & Hove Albion</option>
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
                        <option value="wol">Wolverhampton Wanderers</option>
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
                    <label htmlFor="appearances">Preferred Foot</label>
                    <select name="appearances" id="appearances">
                        <option value="opt1">Left</option>
                        <option value="opt2">Right</option>
                    </select>
                </div>
                <div className="select_area">
                    <label htmlFor="goals">Overall</label>
                    <select name="goals" id="goals">
                        <option value="opt1">More than 90</option>
                        <option value="opt2">90-80</option>
                        <option value="opt3">80-70</option>
                        <option value="opt4">70-60</option>
                        <option value="opt5">60-50</option>
                        <option value="opt6">Less than 50</option>
                    </select>
                </div>
                <button onClick={
                    () => {
                        setFlag(true);
                        setTeam(document.getElementById("team").value);
                        setPosition(document.getElementById("position").value);
                        setAppearances(document.getElementById("appearances").value);
                        setGoals(document.getElementById("goals").value);
                        if (document.getElementById("team").value === "ars") {
                            setImage(ars);
                        }
                        else if (document.getElementById("team").value === "mci") {
                            setImage(mci);
                        }
                        else if (document.getElementById("team").value === "newc") {
                            setImage(newc);
                        }
                        else if (document.getElementById("team").value === "tot") {
                            setImage(tot);
                        }
                        else if (document.getElementById("team").value === "mnu") {
                            setImage(mnu);
                        }
                        else if (document.getElementById("team").value === "liv") {
                            setImage(liv);
                        }
                        else if (document.getElementById("team").value === "bri") {
                            setImage(bri);
                        }
                        else if (document.getElementById("team").value === "che") {
                            setImage(che);
                        }
                        else if (document.getElementById("team").value === "ful") {
                            setImage(ful);
                        }
                        else if (document.getElementById("team").value === "bre") {
                            setImage(bre);
                        }
                        else if (document.getElementById("team").value === "cry") {
                            setImage(cry);
                        }
                        else if (document.getElementById("team").value === "ast") {
                            setImage(ast);
                        }
                        else if (document.getElementById("team").value === "lei") {
                            setImage(lei);
                        }
                        else if (document.getElementById("team").value === "bou") {
                            setImage(bou);
                        }
                        else if (document.getElementById("team").value === "lee") {
                            setImage(lee);
                        }
                        else if (document.getElementById("team").value === "wha") { 
                            setImage(wha);
                        }
                        else if (document.getElementById("team").value === "eve") {
                            setImage(eve);
                        }
                        else if (document.getElementById("team").value === "not") {
                            setImage(not);
                        }
                        else if (document.getElementById("team").value === "sou") {
                            setImage(sou);
                        }
                        else if (document.getElementById("team").value === "wol") {
                            setImage(wol);
                        }

                    }
                }>check</button>
            </div>
            <div className="team_img">
                <div className="icon">
                    <img src={image_name} alt="" />
                </div>
            </div>
            {flag ? <Results prop={[team,position,appearances,goals]} /> : null}
        </div>
    );
}

export default Home;