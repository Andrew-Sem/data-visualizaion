import React from 'react';
import {useEffect, useState} from "react";
import {csv} from "d3";
import {message} from "../message";

const FetchingData = () => {
    const csvUrl = "https://gist.githubusercontent.com/Andrew-Sem/3cc8066e807b7701ca438fb734effefa/raw/CSSNamedColors.csv"
    const [data, setData] = useState(null)

    useEffect(() => {
        csv(csvUrl).then(setData)
    }, [])
    return (
        <div>
            {data? message(data) : "loading..."}
        </div>
    );
};

export default FetchingData;