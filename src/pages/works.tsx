import React from "react";
import { NavLink } from "react-router-dom";

function Works() {
  return (
    <>
      <div className="works">
        <h2>Works</h2>
        <div className="blocks">
          <div className="block">
            <NavLink to="/">
              <div>
                <img src="/works/npm.png" alt="project img" />
                <div className="text">
                  <p className="title">shikimori.ts</p>
                  <p className="description">JavaScript & TypeScript wrapper for shikimori.one</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="block">
            <NavLink to="/">
              <div>
                <img src="/works/discord.png" alt="project img" />
                <div className="text">
                  <p className="title">Discord bot</p>
                  <p className="description">A bot with a personal database and great functionality</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;