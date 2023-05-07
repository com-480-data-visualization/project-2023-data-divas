## Milestone 2 (Sunday 7th May, 5pm)

**10% of the final grade**

The 2-pages pdf describing the project, with the independent pieces to implement, sketches, extra ideas and useful tools is available [here!](./Milestone2.pdf).

The src folder contains our initial [website](https://com-480-data-visualization.github.io/project-2023-data-divas/Milestone2/src/) along with other code files.

In addition to the csv dataset files, the folder `geojson_creation/` contains:
- the initial geojson file `WorldMapGeo.js` sourced from [https://gist.github.com/markmarkoh/2969317](World Map Geo JSON data) with slightly modified country names and South Sudan coordinates added.
- a preliminary file `match_geojson_countries.ipynb` used to check which country names differ between our datasets and the geojson
- the file `create_geojson.ipynb` who was used to create a new geojson based on the initial one, adding to each country 
      - the global GHG emissions for the map (core visualization)
      - all the sectors emissions for the second chart
      - all the gases emissions for the third chart
- `output_geojson.js` which is the file used for the website
