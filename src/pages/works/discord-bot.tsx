import React from "react";
import { NavLink } from "react-router-dom";

function DiscordBot() {
  return (
    <div className="work">
        <div className="title">
            <NavLink to="/works">Works</NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330"><path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg>
            <h2>Discord bot</h2>
            <p className="date">2020</p>
        </div>
        <p className="description">Multifunctional discord bot, with its own database for storing user statistics and a large list of commands. The bot can be viewed on the server, the link is listed below.</p>
        <div className="info-block">
            <div className="app-info">
                <p className="p-block">WEBSITE</p>
                <a href="https://discord.gg/JSAfhzxe8Q">https://discord.gg/JSAfhzxe8Q</a>
            </div>
            <div className="app-info">
                <p className="p-block">STACK</p>
                <p className="text">TypeScript, NodeJS</p>
            </div>
        </div>
        <div className="images">
            <img src="/works/discord-bot-screen.png" alt="dicord bot screen" />
            <img src="/works/discord-bot-screen2.png" alt="dicord bot screen" />
        </div>
    </div>
  );
}

export default DiscordBot;