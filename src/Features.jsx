import React from 'react';
import recent from './images/recent.PNG';
import identify from './images/identify.PNG';
import front from './images/front.PNG';

const Features = () => {
    return (
        <>
            <div className="features" id="features">
                <div className="container">
                    <h1 className="text-center mb-5">Features Of The Application</h1>
                    <div className="row one">
                        <div className="col-md-12 col-lg-6 pic">
                            <img src={front} alt="Front Page" />
                        </div>
                        <div className="col-md-12 col-lg-6 text">
                            <p>
                                The Front Page Of The Application Is Included In This Which Explains All The Things About The Application.
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="row two">
                        <div className="col-md-12 col-lg-6 pic">
                            <img src={identify} alt="Linked Pics" />
                        </div>
                        <div className="col-md-12 col-lg-6 text">
                            <p>
                                The Image Is Linked From The Local Machine Or From The Internet And On Clicking The Identify Image Button Identifies The Image.
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="row third">
                        <div className="col-md-12 col-lg-6 pic">
                            <img src={recent} alt="Recent Pics" />
                        </div>
                        <div className="col-md-12 col-lg-6 text">
                            <p>
                                The Recent Images That Were Used Beforehand Are Displayed Inside The Section Given And That We Can Click The Image To ReUSE It.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </>
    );
}

export default Features;
