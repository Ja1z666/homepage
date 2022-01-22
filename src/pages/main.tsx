import React from "react";
import 'animate.css';
import { NavLink } from "react-router-dom";
import Scene from "./components/scene";

function Main() {
  return (
    <section className="main">
      <div className="container">
        <div className="scene">
          <Scene />
        </div> 
        <div className="info animate__animated animate__fadeInUp">
          <div className="text">
            <h1>ja1z?</h1>
            <p>Full-stack developer</p>
          </div>
          <div className="avatar">
            <img src="original.jpg" alt="avatar" />
          </div>
        </div>
        <div className="about animate__animated animate__fadeInUp animate__delay-0.01s">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum, quaerat sunt suscipit illo autem sit beatae ea nobis quod tenetur labore totam assumenda veritatis unde et, dicta illum eveniet.</p>
          <div className="portfolio-link">
            <NavLink to="/works">
              <button className={"btn-reset button"}>My portfolio<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330"><path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></button>
            </NavLink>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp animate__delay-0.02s">
          <div className="i-love">
            <h2>I ♥</h2>
            <p>Coding, <a href="https://open.spotify.com/user/rg6e0enb5uy6wocqboyjs2j58" target="_blank" rel="noreferrer">Music</a>, Anime, Gaming</p>
          </div>
          <div className="web-links">
            <h2>On the web</h2>
            <ul className="list-reset">
              <li><a href="https://github.com/Ja1z666" target="_blank" rel="noreferrer"><button className="btn-reset"><svg className="icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg><p>@Ja1z666</p></button></a></li>
              <li><a href="https://twitter.com/ja1z666" target="_blank" rel="noreferrer"><button className="btn-reset"><svg className="icon" width="32px" height="32px" viewBox="0 0 512.002 512.002" xmlns="http://www.w3.org/2000/svg"><path d="M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906C507.7,94.204,503.76,93.294,500.398,94.784z"/></svg><p>@Ja1z666</p></button></a></li>
              <li><a href="https://www.twitch.tv/ja1zhf" target="_blank" rel="noreferrer"><button className="btn-reset"><svg className="icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M2.787 0l-2.089 5.568v22.255h7.652v4.177h4.177l4.167-4.177h6.26l8.349-8.344v-19.479zM5.568 2.781h22.953v15.301l-4.871 4.871h-7.651l-4.172 4.172v-4.172h-6.26zM13.219 16.697h2.781v-8.348h-2.781zM20.864 16.697h2.781v-8.348h-2.781z"/></svg><p>@Ja1zHF</p></button></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;