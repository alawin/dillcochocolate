import React from 'react';
import './questioncard.css';

const QuestionCard = (props) => (
    <div className="question-card" style={{textAlign: `${props.textAlign}`}}>
        <div className="question-card-tag" style={{alignSelf: `${props.alignSelf}`}}>{props.tag}</div>
        <div className="question-card-text" style={{alignSelf: `${props.alignSelf}`}}>{props.text}</div>
    </div>
);

export default QuestionCard;