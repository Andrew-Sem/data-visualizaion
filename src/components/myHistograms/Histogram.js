import React, {useEffect, useRef} from 'react';
import * as d3 from "d3"

//     "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv"

const Histogram = ({data, dimensions}) => {
    const svgRef = useRef()
    const {width, height, margin, barPadding, barWidth} = dimensions

    useEffect(() => {
        // нашли svg по ссылке
        const svgEl = d3.select(svgRef.current);
        svgEl.selectAll("*").remove(); // Clear svg content before adding new elements
        // масштаб по у
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height]);

        const barChart = svgEl
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("y", (d) => {
                return height - yScale(d);
            })
            .attr("height", d => yScale(d))
            .attr("width", barWidth - barPadding)
            .attr("transform", (d, i) => {
                const translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            })
            .attr("fill", "#61dafb")

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {
                console.log(d)
                return d})])     // can use this instead of 1000 to have the max of data: )
            .range([0, width]);
        svgEl.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));
    }, [data])


    return <svg ref={svgRef} width={width} height={height}/>
};

export default Histogram;