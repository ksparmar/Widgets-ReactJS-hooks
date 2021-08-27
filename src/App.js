import React from 'react';
import Accordion  from './components/Accordion';

//static array used for content, we are hardcoding it
const items = [
    {
        title: 'What is React?',
        content:'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favorite JS library among engineers'

    },
    {
        title: 'How do you use React?',
        content: 'You use it by making components'
    }
];

export default ()=>{
    return (
        <div>
            <Accordion items = {items}/>
        </div>
    )
};