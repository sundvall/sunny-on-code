/* eslint-disable import/no-extraneous-dependencies */
import Typography from 'typography';
import themeSutro from 'typography-theme-sutro';
import CodePlugin from 'typography-plugin-code';

// for elements of type 'code:
themeSutro.plugins = [new CodePlugin()];
/* test the connection of the css. Remove the 'layouts/index.css' that might exist
and has precedence */
// const typography = new Typography({ baseFontSize: "5px" });
const typography = new Typography(themeSutro);

export default typography;
