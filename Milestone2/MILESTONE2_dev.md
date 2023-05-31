## Milestone 2 (Sunday 7th May, 5pm)

**10% of the final grade**

The 2-pages pdf describing the project, with the independent pieces to implement, sketches, extra ideas and useful tools is available [here](./Milestone2.pdf)!.

**Repository structure:**

In addition to the csv dataset files, the folder `./geojson_creation/` contains:
- the initial geojson file `WorldMapGeo.js` sourced from [World Map Geo JSON data](https://gist.github.com/markmarkoh/2969317) with slightly modified country names and South Sudan coordinates added;
- a preliminary file `match_geojson_countries.ipynb` used to check which country names differ between our datasets and the geojson;
- the file `create_geojson.ipynb` who was used to create a new geojson based on the initial one, adding to each country: the global GHG emissions for the map (core visualization), all the sectors emissions for the second chart and all the gases emissions for the third chart;
- `output_geojson.js` which is the generated geosjon file.

In the folder `./src/` are present the material needed for our initial [website](https://com-480-data-visualization.github.io/project-2023-data-divas/tree/dev/Milestone2/src/index.html) :

- the folder `data/` with the geojson file and some pictures;
- 3 HTML files: `index.html` (the core page), `howto.html` (second page for exaplanations), `about.html` (third page about team members);
- 3 JavaScript files: `map.js` (the core visualization), `barplots.js` (for the detailed charts), `ghg_counter.js` (a small counter incrementing every second)
- 1 style sheet, `index.css`.



