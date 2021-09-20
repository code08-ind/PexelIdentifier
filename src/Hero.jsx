import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="container">
                <div className="jumbotron mt-4">
                    <h1 className="display-4">PexelIdentifier</h1>
                    <p className="lead">Here You Can Identify Any Of The Image Just By Adding The Image From Your Machine Or By Pasting The Link Of The Image You Want To Identify.</p>
                    <hr className="my-4" />
                    <p className="desc">It Gives Approx 98% Correct Results When Any Image Is Added For The Identification.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#features" role="button">Learn More</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Hero;
