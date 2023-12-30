import React from 'react';
import "./Event.css";
import Card from './card/Card';
export default function Event() {
  return (
    <div className='event-body'>
    <h1 className='title'>PAST EVENTS</h1>
    <div className='card-container'>
      <Card img="/images/bg1.avif" title="Event 1" subtitle="subtitle" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
      <Card img="/images/bg2.jpg" title="Event 2" subtitle="subtitle" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
      <Card img="/images/bg3.jpg" title="Event 3" subtitle="subtitle" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
    </div>
    </div>
  )
}
