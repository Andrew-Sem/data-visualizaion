import {useEffect, useRef} from 'react';
import * as d3 from "d3"
import {extent} from "d3";

//     "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv"

const Histogram = ({data, dimensions}) => {
    const svgRef = useRef(null)
    const {width, height, margin, barPadding, barWidth} = dimensions
    const svgWidth = width + margin.left + margin.right
    const svgHeight = height + margin.top + margin.bottom

    useEffect(() => {
        // нашли svg по ссылке
        const svgEl = d3.select(svgRef.current)
        // Clear svg content before adding new elements
        svgEl.selectAll("*").remove()
        const svg = svgEl.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
        const x = d3
            .scaleLinear()
            .domain(extent(data)) // можно использовать это вместо 1000 чтобы иметь максимальное количество данных:
            .range([0, width]); // d3.max(data, function(d) { return +d.price })
        svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));
        // устанавливаем параметры для гистограммы
        const histogram = d3
            .bin()
            .value(d => {
                console.log(d);
                return d
            })// нужно задать вектор значения
            .domain(x.domain()) // затем область графика
            .thresholds(x.ticks(data.length)); // затем количество ячеек
        // И применяем эту фукнцию к данным, чтобы получить ячейки
        const bins = histogram(data);
        // Y ось: масштаб и отрисовка:
        const y = d3.scaleLinear().range([height, 0]).domain([0, data.length])
        svg.append("g").call(d3.axisLeft(y));

    }, [data])


    return <svg ref={svgRef} width={svgWidth} height={svgHeight}/>
};

export default Histogram;