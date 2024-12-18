# D3.js Bar Chart Visualization

A responsive and interactive bar chart built with **D3.js**, showcasing GDP data. This project fulfills all requirements specified by FreeCodeCamp's Data Visualization Certification project.

---

## Features

- **D3.js Integration**: Utilizes the D3.js library to generate scales, axes, and visual elements.
- **Tooltip Interaction**: Displays detailed GDP data and formatted dates when hovering over bars.

---

## User Stories

This project satisfies the following user stories:

1. The chart has a title with an `id="title"`.
2. The x-axis is represented by a `<g>` element with an `id="x-axis"`.
3. The y-axis is represented by a `<g>` element with an `id="y-axis"`.
4. Both axes include multiple tick labels with a `class="tick"`.
5. Each data point is visualized as a `<rect>` element with a `class="bar"`.
6. Each `.bar` has `data-date` and `data-gdp` attributes.
7. The data corresponds to the order and values in the dataset.
8. Each `.bar` height reflects the data's GDP value.
9. The x-axis aligns with the `data-date` attribute.
10. The y-axis aligns with the `data-gdp` attribute.
11. A tooltip (`id="tooltip"`) displays more information on mouse hover.
12. The tooltip dynamically adjusts to the mouse position and formats the date.

---

## Technologies Used

- **D3.js**: For creating the SVG elements and managing data binding.
- **HTML/CSS**: Structure and styling of the page.
- **JavaScript**: Data processing and dynamic interactions.

---

## Dataset

The project uses the GDP dataset provided by FreeCodeCamp, available [here](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json).

---

##Live Demo

Check out the live demo [here](https://shishwami.github.io/FCC-Bar-Chart/).

## Credits

- **FreeCodeCamp**: For providing the dataset and project specifications.
- **D3.js**: For the powerful data visualization library used in this project. Learn more at [https://d3js.org/](https://d3js.org/).


