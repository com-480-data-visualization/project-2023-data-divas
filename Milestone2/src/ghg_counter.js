/**
 * Counts and displays how much ghg have been emitted since the start of the website visit
 */

// TODO: Know how much ghg is emitted / second

function count_ghg_seconds(id, units, describ, color="white", nb_ghg_sec = 2) {

  // Emitted ghg value starts at zero
  let current_value = 0;

  const style = "color: " + color;
  const root = $(id);

  root.append(`<div class="counter_value" style="${style}">${current_value}</div>`);
  root.append(`<div class="counter_units" style="${style}">${units}</div>`);
  root.append(`<div class="counter_describ">${describ}</div>`);

  setTimeout(() => {
    setInterval(() => {
      current_value += nb_ghg_sec;
      $(id + " .counter_value").html(current_value);
      }, 1000); // Increments every 1 second
    }, 10); // Starts 10ms after website loaded
}

count_ghg_seconds(
  "#ghg_counter",
  "[units]",
  "ghg emitted worldwide since the start of your visit"
);
