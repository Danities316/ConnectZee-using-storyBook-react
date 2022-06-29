import React from 'react';

import Bio from './Bio';


export default {
  title: 'Components/Bio',
  component: Bio,
};


const Template = () => (
    <Bio
headshots = 'https://pbs.twimg.com/profile_images/1406820876864077827/MCdL9Mrk_400x400.jpg'
name = 'Danities Ichaba'
tagline = 'Full stack javascript dev'
role= 'Javascript developer'

/>
    );

export const Default = Template.bind({});

