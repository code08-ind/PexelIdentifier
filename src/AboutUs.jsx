import React from 'react';
import tensorflow from './images/tensorflow.svg';
import sass from './images/sass.svg';
import react from './images/react.svg';
import './style.css';

const AboutUs = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="container">
                    <h1 className="text-center mb-5">More About Application</h1>
                    <div className="row">
                        <div className="col-sm-12 col-lg-2 icons">
                            <img src={tensorflow} alt="Tensorflow" />
                        </div>
                        <div className="col-sm-12 col-lg-2 icons">
                            <img src={sass} alt="Sass" />
                        </div>
                        <div className="col-sm-12 col-lg-2 icons">
                            <img src={react} alt="React" />
                        </div>
                        <div className="col-sm-12 col-lg-6 text">
                            <p>
                                The Project Application Include Various Things In It such as the use of good UI And
                                along with various
                                other features such as to enter the image of any type from your local machine or by taking in the link of image from the picture you want to take and paste it into the link given inside the text field. The picture of the that link will be displayed in the section. When you click the identify image button, the various possibilities will be shown along with the confidence in the prediction predicted in it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
