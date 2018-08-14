webpackJsonp([0x66261db9a3b9],{475:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Eslint and prettier setup for Atom</h1>\n<p>Atom Code-editor for javascript works well together with eslint configuration. Some shortkeys to formatting simplifies the daily work, and unifies the style with other developers. When starting a new project, it\'d be nice if a default configuration could be used, to speed up an initial testround in new code. Since this is not the case, here is the instruction.</p>\n<h2>files and current versions to update ...</h2>\n<p>Atom 1.25.1<br>\nlinter-eslint version 8.5.1 - the Atom package<br>\nprettier-atom 0.53.0 - the Atom package<br>\nEslint 4.19.1 - the npm package togehter with a list of other packages depending on the configuration of the project.\n.eslintrc<br>\n.editorconfig<br>\n.prettierrc - remove from project since it might conflict eslint rules  </p>\n<h3>install ESlint and set of ESLint rules to the project</h3>\n<p>yarn add --dev eslint eslint-config-airbnb  </p>\n<h3>use package "linter-eslint" for atom and point to the rules</h3>\n<p><a href="https://atom.io/packages/linter-eslint">https://atom.io/packages/linter-eslint</a><br>\nsettings: ESLint Rules Directories<br>\nSet the path like \'...node_modules/eslint-config-airbnb\'</p>\n<h3>first error: \'Error while running ESLint: No ESLint configuration found..\'</h3>\n<p>Add an .eslintrc.js to the project.(may also be called \'.eslintrc\' without the \'js\' extension.) It will be picked up by the linter.<br>\nIt may look like this:</p>\n<pre><code class="language-javascript">module.exports = {\n    "extends": ["airbnb","prettier","prettier/react"],\n    "env": {\n        "es6": true,\n        "browser": true,\n        "jest": true,\n        "node": true\n    },\n    "rules": {\n        "no-console": 0,\n        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],\n        "react/prop-types": 0,\n        "import/extensions": 0\n    },\n    "plugins": [\n        "react",\n        "prettier",\n        "jsx-a11y"\n    ]\n};\n</code></pre>\n<h3>use package "prettier-atom" for autoformatting and connect to eslint</h3>\n<p>prettier-atom\n<a href="https://atom.io/packages/prettier-atom">https://atom.io/packages/prettier-atom</a>  </p>\n<h2>Connect it to eslint to apply all formatting rules.</h2>\n<p>In the "settings" section, checkmark "ESLintIntegration".</p>\n<h2>Connect it to the editor configuration...</h2>\n<p>...to be able to apply your favourite indentation without conflicting other developers preferred style.<br>\nIn the "settings" section, checkmark "EditorConfig Integration". Make sure the file .editorconfig exists in the root of the project.</p>\n<h3>.editorconfig</h3>\n<p>Something like this:</p>\n<pre><code>[*.{html,mustache,scss,js,hbs,css,jsx,mjs}]\nindent_style = tab\ntab_width = 4\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[{package.json,*.yml}]\nindent_style = space\nindent_size = 2\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n</code></pre>\n<h2>Ignore files to prettify</h2>\n<p>In the "settings" section, checkmark "Ignore Files in .eslintignore". Might be that this setting is mostly important if "prettify on save" is selected. (Will it otherwise go through one billion files in node_modules?)</p>\n<h2>Checkmark other settings of preference</h2>\n<p>"single quotes", "bracket spacing", "semicolons", "coffee", ...\n...and probably adjust "Tab Width" to for example 4.\nAlso evaluate the possibility to switch order of running eslint before prettier.</p>\n<h2>Keybinding</h2>\n<p>Now, the best feature: Enable keybinding to the command \'prettier:format\' with selector \'atom-text-editor\' and then all spaghetti will be straight again, automatically and in harmony with lint-rules. But - make sure the shortkey only run ONE and only ONE formatting plugin.<br>\n(The most recent headache was derived from conflicting shortkeys. The prettier-atom plugin formatted all code, and the eslint-plugin-prettier dev-dependency applied fixes according to eslint settings but thereafter an old connection to another formatter also run, and ruined the result. Tip: check the keybindings in atom to confirm that only one formatter is run.)</p>\n<h3>errors: \'Error while running ESLint: Cannot find module ...</h3>\n<p>Was any of the packages not installed? Check the setup in "".eslintrc" for the project so that it matches \'package.json\'. Especially the properties "plugins" and "extends".</p>\n<pre><code>"plugins": [\n    "react",\n    "prettier",\n    "jsx-a11y"\n]\n</code></pre>\n<p>and</p>\n<pre><code>"extends": ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],\n</code></pre>\n<p>That will require some of these in "package.json":</p>\n<pre><code>"eslint": "^4.16.0",\n"prettier": "^1.12.1"\n"eslint-config-airbnb": "^16.1.0",\n"eslint-config-prettier": "^2.9.0",\n"eslint-plugin-jsx-a11y": "^6.0.3",\n"eslint-plugin-import": "^2.8.0",\n"eslint-plugin-prettier": "^2.6.0",\n"eslint-plugin-react": "^7.5.1",\'\n"eslint-config-standard": "^10.2.1",\n"eslint-plugin-node": "^5.2.0",\n"eslint-plugin-promise": "^3.5.0",\n"eslint-plugin-standard": "^3.0.1"\n</code></pre>\n<p> Forgotten? Add them to the project and use the linter again. Can be of interest to reload atom packages with (ctrl+alt+cmd+L)</p>\n<pre><code>yarn add --dev eslint\nyarn add --dev prettier\nyarn add --dev eslint-config-prettier\nyarn add --dev eslint-plugin-prettier  \nyarn add --dev eslint-plugin-react  \nyarn add --dev eslint-plugin-import\nyarn add --dev eslint-config-airbnb   \nyarn add --dev eslint-plugin-jsx-a11y   \n</code></pre>\n<p> or in one line:</p>\n<pre><code>yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-config-airbnb  \n</code></pre>\n<h3>Other errors and settings</h3>\n<p> The possibilities to configure these tools are vast. Some lint-rules might not be working if they are experimental, for example, and the solution can be to parse the code through babel before applying the linter.\n.eslintrc will have something like this:</p>\n<pre><code>"parser": "babel-eslint",\n"parserOptions": {\n    "ecmaVersion": 2017,\n    "sourceType": "module",\n    "ecmaFeatures": {\n        "jsx": true,\n        "modules": true,\n        "impliedStrict": true,\n        "experimentalObjectRestSpread": true\n    }\n}\n</code></pre>\n<p> <a href="https://github.com/babel/babel-eslint">https://github.com/babel/babel-eslint</a></p>\n<h3>reload modules</h3>\n<p> Atom shortcut ctrl+cmd+alt+L</p>\n<h3>links</h3>\n<p> eslintrc configuration\n<a href="https://eslint.org/docs/user-guide/configuring">https://eslint.org/docs/user-guide/configuring</a></p>',timeToRead:5,frontmatter:{title:"Lint and format for Atom",date:"August 14, 2018",tags:["how-to","eslint","atom","tools","test-tag"],excerpt:"Code formatting combined with lint-rules in atom works fine, but appear to require a new setup for each project. Here is how it is done."}}},pathContext:{slug:"/eslint-prettier-for-atom/",tagLinkPrefix:"tags",tags:["how-to","eslint","atom","tools","test-tag"],previous:"/algorithms-and-structures-overview/",next:"/new-webpage/"}}}});
//# sourceMappingURL=path---eslint-prettier-for-atom-e19f989f1d64b676989c.js.map