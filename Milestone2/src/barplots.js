/**
 * Create the two barplots for sectors and gases for each country for each year
 */

// TODO: IDEA: sort sectors highest to lowest maybe
// TODO: IDEA: axes relative to each other: same scale maybe, but maybe we won't see much for the small countries...
// TODO: Use only one function which is called differently for both

function sectors_barplot(sectors_data, year) {

  const margin = { top: 10, right: 20, bottom: 260, left: 80};
  const width = 600 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom;

  $("#sectors_chart").empty();

  // Data from the geojson
  const data = sectors_data.map((row) => ({
    sectors: row.Sector,
    emissions: row.ghg[year] || 0,
  }));
  
  // Sectors names
  const names = sectors_data.map((row) => row.Sector);

  // To later find colors per sector based on current value
  const arr_vals = (sectors_data.map((row) => row.ghg[year] || 0));

  // Colors dictionary for each sector
  const BARS_COLORS = {
    0: "#125925",
    1: "#f78205",
    2: "#055ef7",
    3: "#46e640",
    4: "#f70505",
    5: "#f7eb05",
    6: "#8f12b5",
    7: "#05dbf7",
    8: "#6b4018",
    9: "#fa439f",
    10: "#7d7b7a"
  };

  // For x axis
  const x = d3.scaleBand().domain(names).range([0, width]).padding([0.1]);

  // Maximum y-value
  const max = data.reduce((acc, curr) => {
    return Math.max(curr.emissions, acc);
  }, 0);

  // For y axis
  const y = d3.scaleLinear().domain([0, max]).range([height, 0]);

  // For bars
  const barValues = d3
    .scaleBand()
    .domain(["emissions"])
    .range([0, x.bandwidth()])
    .padding([0.05]);

  // Create svg object
  const svg = d3
    .select("#sectors_chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X axis and labels
  svg
    .append("g")
    .attr("class", "axisWhite")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(5))
    .selectAll("text")
    .style("font-size", "10px")
    .style("font-family", "Sensa Sans")
    .attr("transform", "rotate(-90)")
    .attr("dx", "-13em")
    .attr("dy", "-0.5em");
  // X title
  svg.append("text")
    .attr("class", "axisWhite")
    
    .attr("x", width)
    .attr("y", height)
    .attr("dx", "-3.2em")
    .attr("dy","1.5em")
    .attr("transform", "rotate(0)")
    .style("font-size", "12px")
    .style("fill", "white")
    .style("font-family", "Sensa Sans")
    .text("Sector");
  // Y axis and labels
  svg.append("g")
      .attr("class", "axisWhite")
      .call(d3.axisLeft(y))
      .selectAll("text")

      .style("font-size", "10px")
      .style("font-family", "Sensa Sans");
  // Y title
  svg.append("text")
    .attr("class", "axisWhite")
    .attr("text-anchor", "end")
    .attr("y", 1)
    .attr("dy", "-.2em")
    .attr("transform", "rotate(0)")
    .style("fill", "white")
    .style("font-size", "12px")
    .style("font-family", "Sensa Sans")
    .text("Tons");
  // Draw bars
  svg
    .append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d) {
      return "translate(" + x(d.sectors) + ",0)";
    })
    .selectAll("rect")
    .data(function (d) {
      return ["emissions"].map(function (key) {
        return { key: key, value: d[key] < 0 ? 0 : d[key] };
      });
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return barValues(d.key);
    })
    .attr("width", barValues.bandwidth())
    .attr("fill", function (d) {
      console.log(d.value)
      return BARS_COLORS[arr_vals.indexOf(d.value)];
    });

  svg
    .selectAll("rect")
    .transition()
    .duration('500')
    .attr("y", function (d) {
      return isNaN(y(d.value)) ? 0 : y(d.value);
    })
    .attr("height", function (d) {
      return isNaN(y(d.value)) ? height : height - y(d.value);
    })
}

function gases_barplot(gases_data, year) {
 const margin = { top: 50, right: 10, bottom: 150, left: 180};
  const width = 350 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  $("#gases_chart").empty();

  // Data from the geojson
  const data = gases_data.map((row) => ({
    gases: row.Gas,
    emissions: row.Emission[year] || 0,
  }));

  // Sectors names
  const names = gases_data.map((row) => row.Gas);

  // To later find colors per sector based on current value
  const arr_vals = (gases_data.map((row) => row.Emission[year] || 0));

  // Colors dictionary for each gas
  const GASES_COLORS = {
    0: "#375173",
    1: "#7e8c9e",
    2: "#034499",
  };

  // For x axis
  const x = d3.scaleBand().domain(names).range([0, width]).padding([0.1]);

  // Maximum y-value
  const max = data.reduce((acc, curr) => {
    return Math.max(curr.emissions, acc);
  }, 0);

  // For y axis
  const y = d3.scaleLinear().domain([0, max]).range([height, 0]);

  // For bars
  const barValues = d3
    .scaleBand()
    .domain(["emissions"])
    .range([0, x.bandwidth()])
    .padding([0.05]);

  // Create svg object
  const svg = d3
    .select("#gases_chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X axis and labels
  svg
    .append("g")
    .attr("class", "axisWhite")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(5))

    .selectAll("text")
    .style("font-size", "10px")
    .style("font-family", "Sensa Sans")
    .attr("transform", "rotate(-90)")
    .attr("dx", "-8em")
    .attr("dy", "-0.5em");

  // Y axis and labels
  svg.append("g")
      .attr("class", "axisWhite")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-family", "Sensa Sans");

  // Draw bars
  svg
    .append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d) {
      return "translate(" + x(d.gases) + ",0)";
    })
    .selectAll("rect")
    .data(function (d) {
      return ["emissions"].map(function (key) {
        return { key: key, value: d[key] < 0 ? 0 : d[key] };
      });
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return barValues(d.key);
    })
    .attr("width", barValues.bandwidth())
    .attr("fill", function (d) {
      console.log(d.value)
      return GASES_COLORS[arr_vals.indexOf(d.value)];
    });

  svg
    .selectAll("rect")
    .transition()
    .duration('600')
    .attr("y", function (d) {
      return isNaN(y(d.value)) ? 0 : y(d.value);
    })
    .attr("height", function (d) {
      return isNaN(y(d.value)) ? height : height - y(d.value);
    });
}
