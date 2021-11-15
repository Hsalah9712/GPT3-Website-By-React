import React from 'react';

// Import All Components From Index.js File In Containers [Big Components] File
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

// Import All Components From Index.js File In Component [Small Components] File
import { Brand, CTA, Navbar } from './components';

import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
