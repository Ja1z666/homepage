import React from "react";
import { NavLink } from "react-router-dom";

function Shiki() {
  return (
    <div className="work">
        <div className="title">
            <NavLink to="/works">Works</NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330"><path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg>
            <h2>shikimori.ts</h2>
            <p className="date">2022</p>
        </div>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda alias rem, porro atque asperiores est distinctio veniam voluptas aliquam!</p>
        <div className="info-block">
            <div className="app-info">
                <p className="p-block">WEBSITE</p>
                <a href="https://www.npmjs.com/package/shikimori.ts">https://www.npmjs.com/package/shikimori.ts</a>
            </div>
            <div className="app-info">
                <p className="p-block">STACK</p>
                <p className="text">TypeScript</p>
            </div>
        </div>
    </div>
  );
}

export default Shiki;