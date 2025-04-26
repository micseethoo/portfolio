import React from 'react';
import Header from './components/Header';
import BackToTopButton from './components/BackToTopButton';
import Content from './components/Content';
import Footer from './components/Footer';
import "./index.css";

const App: React.FC = () => {
    return (
        <div className="relative">
            <Header />
            <Content />
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default App;
