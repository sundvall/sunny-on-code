import Typography from "typography";
import themeSutro from "typography-theme-Sutro";

/* test the connection of the css. Remove the 'layouts/index.css' that might exist
and has precedence */
// const typography = new Typography({ baseFontSize: "5px" });
const typography = new Typography(themeSutro);

export default typography;
