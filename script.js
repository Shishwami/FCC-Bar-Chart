import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataset = data.data
        const datas = data
        delete datas.data
        console.log(datas);


        const h = 400;
        const w = 600;
        const padding = 30;
        const left_padding = 15;

        const svg = d3.select("#app")
            .append("svg")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "azure")

        const xScale = d3.scaleTime()
            .domain([new Date(data.from_date), new Date(data.to_date)])
            .range([padding, w - padding]);
        const xAxis = d3.axisBottom(xScale)

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d[1])])
            .range([h - padding, padding]);

        const yAxis = d3.axisLeft(yScale)

        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(${left_padding},${h - padding})`)
            .call(xAxis)

        svg.append("g")
            .attr("id", "y-axis")
            .attr("transform", `translate(${padding + left_padding},0)`)
            .call(yAxis)

        const tooltip = d3.select("body")
            .append("div")
            .attr("id", "tooltip")
            .style("position", "absolute")
            .style("background-color", "white")
            .style("border", "1px solid black")
            .style("padding", "5px")
            .style("border-radius", "5px")
            .style("pointer-events", "none")
            .style("opacity", 0);

        svg.selectAll(".bar")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(new Date(d[0])) + left_padding)
            .attr("y", d => yScale(d[1]))
            .attr("width", (w - 1 * padding) / dataset.length)
            .attr("height", d => h - padding - yScale(d[1]))
            .attr("data-date", d => d[0])
            .attr("data-gdp", d => d[1])
            .on("mouseover", (event, d) => {
                tooltip.style("opacity", 1)
                    .attr("data-date", d[0])
                    .html(`Date: ${d[0]}<br>GDP: ${d[1]} billion`);
            })
            .on("mousemove", (event) => {
                const [x, y] = d3.pointer(event, svg.node());
                const svgWidth = svg.node().getBoundingClientRect().width;

                const isRightHalf = x > svgWidth / 2;
                const tooltipOffsetX = isRightHalf ? -150 : 10;
                const tooltipOffsetY = 10;

                tooltip.style("left", `${event.pageX + tooltipOffsetX}px`)
                    .style("top", `${event.pageY + tooltipOffsetY}px`);
            })
            .on("mouseout", () => d3.select("#tooltip").style("opacity", 0));
    })


