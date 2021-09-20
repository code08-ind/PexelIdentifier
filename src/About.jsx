import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { useState, useEffect, useRef } from 'react';

document.title = "PexelIdentifier";

const About = () => {
    const [isModelLoading, setIsModelLoading] = useState(false);
    const [model, setModel] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState([]);
    const [history, setHistory] = useState([]);

    const imageRef = useRef();
    const textInputRef = useRef();
    const fileInputRef = useRef();

    const loadModel = async () => {
        setIsModelLoading(true);
        try {
            const model = await mobilenet.load();
            setModel(model);
            setIsModelLoading(false);
        } catch (error) {
            console.log(error);
            setIsModelLoading(false);
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target;
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0]);
            setImageURL(url);
        }
        else {
            setImageURL(null);
        }
    }

    const identify = async () => {
        textInputRef.current.value = '';
        const results = await model.classify(imageRef.current);
        setResults(results);
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value);
        setResults([]);
    }

    const triggerUpload = () => {
        fileInputRef.current.click();
    }

    useEffect(() => {
        loadModel();
    }, []);

    useEffect(() => {
        if (imageURL) {
            setHistory([imageURL, ...history]);
        }
    }, [imageURL]);

    console.log(results);

    return (
        <>
            <Navbar />
            <div className="App">
                <h1 className="header">
                    PexelIdentifier - Identify Any Image...
                </h1>
                <div className="inputHolder">
                    <input
                        type="file"
                        accept="image/*"
                        capture="camera"
                        className="uploadInput"
                        onChange={uploadImage}
                        ref={fileInputRef}
                    />
                    <NavLink exact to="/">
                        <button className="uploadImage">Go To Home Page</button>
                    </NavLink>
                    <button className="ml-4 uploadImage" onClick={triggerUpload}>Upload Image</button>
                    <span className="or">OR</span>
                    <input
                        type="text"
                        placeholder="Paste Image URL"
                        ref={textInputRef}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mainWrapper">
                    <div className="mainContent">
                        <div className="imageHolder">
                            {imageURL && (
                                <img
                                    src={imageURL}
                                    alt="Identification By Upload"
                                    crossOrigin="anonymous"
                                    ref={imageRef}
                                />
                            )}
                        </div>
                        {results.length > 0 && <div className='resultsHolder'>
                            {results.map((result, index) => {
                                return (
                                    <div className='result' key={result.className}>
                                        <span className='name'>{result.className} {index === 0 && <span className='bestGuess'>
                                            <img src="https://icons-for-free.com/iconfiles/png/512/approval-131964752335548226.png" className="mb-1" width="30px" height="30px" alt="Approval" />
                                        </span>}</span>
                                        <span className='confidence'>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Best Guess</span>}</span>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                    {imageURL && (
                        <button className="button" onClick={identify}>Identify The Image</button>
                    )}
                </div>
                {history.length > 0 && (
                    <div className="recentPredictions">
                        <h2>Recent Identified Used Images</h2>
                        <div className="recentImages">
                            {history.map((image, index) => {
                                return (
                                    <div className="recentPrediction" key={`${image}${index}`}>
                                        <img src={image} alt="Recent Prediction" onClick={() => setImageURL(image)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default About
