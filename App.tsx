import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style';
import MessageBoard from './MessageBoard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactMe" element={<ContactMe />} />
      <Route path="/Tracks" element={<Tracks />} />
      <Route path="/AboutMe" element={<AboutMe />} />
    </Routes>
  );
}

function Title({ name }: { name: string }) {
  return (
    <h1>
      <Link to="/">{name}</Link>
    </h1>
  );
}

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/AboutMe"> About Me!</Link>
            </li>
            <li>
              <Link to="/Tracks">Tracks</Link>
            </li>
            <li>
              <Link to="/contactMe">Contact Me...</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function TrackView(props: {
  Trackname: string;
  Picture?: string;
  AudioTrack?: string;
}) {
  return (
    <>
      <figcaption>
        <span className="name-box">{props.Trackname}</span>
      </figcaption>
      {props.Picture && (
        <img className="small-pic" src={props.Picture} alt="Album Artwork" />
      )}
      <audio controls>
        {props.AudioTrack && (
          <source src={props.AudioTrack} type="audio/mpeg" />
        )}
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

function Home() {
  return (
    <>
      <Title name="Bandino Music" />
      <Header />
    </>
  );
}

function Tracks() {
  return (
    <>
      <Title name="Tracks" />
      <Header />
      <section className="Music-Block">
        <TrackView
          Trackname="Drip"
          Picture=" "
          AudioTrack="https://soundcloud.com/bandinoworld/drip-emotional-vpyr-118?si=741618e45ef740d48c4b659b2d304315&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
        <TrackView
          Trackname="High Rates"
          Picture=" "
          AudioTrack="https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/highrates.mp3"
        />
      </section>
    </>
  );
}

const ContactMe = () => {
  return (
    <>
      <Title name="Bandino World" />
      <Header />
      <MessageBoard />
    </>
  );
};

const AboutMe = () => {
  return (
    <>
      <Title name="Bandino World" />
      <Header />
    </>
  );
};
