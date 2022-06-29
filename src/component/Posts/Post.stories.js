import React from 'react';

import Post from './Post';


export default {
  title: 'Components/Post',
  component: Post,
};


const Template = () => (
    <Post 
    post="Share yout tech thoughts here" 
    date="20/05/2022"
    
    />);

export const Default = Template.bind({});

