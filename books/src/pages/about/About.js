import React from "react";
import './About.css';
import AuthorC from '../../components/author/Author.js';

export default class AboutPage extends React.Component { 
    render() {
        return ( <div id='about-board'>
            <h3>Hi, we are in about</h3>
            <AuthorC name="Joaquim" info={{description: 'Comp. Science', work: 'Estudent'}} />
        </div> );
    } 
}
