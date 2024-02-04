import React, { useEffect, useState } from "react";
import { useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    sentence += (`${i}`)
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    const filteredSentencess = useMemo((    ) =>{
        console.log("useMemo called")
        const filterWords = filter.split(' ').map(word => word.trim());

        const filteredSentences = sentences.filter(sentence => {
            return filterWords.every(word => sentence.includes(word));
        });
        return filteredSentences;
    },[sentences,filter])
    

    return <div>
        <input type="text" onChange={(e) => {
const value = e.target.value.trim()
// const arrayValue = value.split(',').map(item => item.trim());
// console.log(arrayValue)
            setFilter(e.target.value)
            console.log("filter changed")
        }}></input>
        {filteredSentencess.map(word => <div>
            {word}    
        </div>)}
    </div>
}