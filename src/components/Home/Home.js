import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header><br/>
            <Projects></Projects>
        </div>
    );
};

export default Home;