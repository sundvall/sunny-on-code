---
date: "2018-08-14T12:19:24.165Z"
title: "Lint and format for Atom"
tags: ['how-to', 'eslint', 'atom', 'tools', 'test-tag']
excerpt: "Code formatting combined with lint-rules in atom works fine, but appear to require a new setup for each project. Here is how it is done."
---

# Eslint and prettier setup for Atom
Atom Code-editor for javascript works well together with eslint configuration. Some shortkeys to formatting simplifies the daily work, and unifies the style with other developers. When starting a new project, it'd be nice if a default configuration could be used, to speed up an initial testround in new code. Since this is not the case, here is the instruction.

##  files and current versions to update ...
Atom 1.25.1  
linter-eslint version 8.5.1 - the Atom package  
prettier-atom 0.53.0 - the Atom package  
Eslint 4.19.1 - the npm package togehter with a list of other packages depending on the configuration of the project.
.eslintrc  
.editorconfig  
.prettierrc - remove from project since it might conflict eslint rules  

### install ESlint and set of ESLint rules to the project
yarn add --dev eslint eslint-config-airbnb  

### use package "linter-eslint" for atom and point to the rules
https://atom.io/packages/linter-eslint  
settings: ESLint Rules Directories  
Set the path like '...node_modules/eslint-config-airbnb'
### first error: 'Error while running ESLint: No ESLint configuration found..'
Add an .eslintrc.js to the project.(may also be called '.eslintrc' without the 'js' extension.) It will be picked up by the linter.  
It may look like this:
```javascript
module.exports = {
    "extends": ["airbnb","prettier","prettier/react"],
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true
    },
    "rules": {
        "no-console": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "import/extensions": 0
    },
	"plugins": [
		"react",
		"prettier",
		"jsx-a11y"
	]
};
```
### use package "prettier-atom" for autoformatting and connect to eslint
prettier-atom
https://atom.io/packages/prettier-atom  
## Connect it to eslint to apply all formatting rules.
In the "settings" section, checkmark "ESLintIntegration".
## Connect it to the editor configuration...
...to be able to apply your favourite indentation without conflicting other developers preferred style.  
In the "settings" section, checkmark "EditorConfig Integration". Make sure the file .editorconfig exists in the root of the project.
### .editorconfig
Something like this:
```
[*.{html,mustache,scss,js,hbs,css,jsx,mjs}]
indent_style = tab
tab_width = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[{package.json,*.yml}]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
## Ignore files to prettify
In the "settings" section, checkmark "Ignore Files in .eslintignore". Might be that this setting is mostly important if "prettify on save" is selected. (Will it otherwise go through one billion files in node_modules?)
## Checkmark other settings of preference
"single quotes", "bracket spacing", "semicolons", "coffee", ...
...and probably adjust "Tab Width" to for example 4.
Also evaluate the possibility to switch order of running eslint before prettier.
## Keybinding
Now, the best feature: Enable keybinding to the command 'prettier:format' with selector 'atom-text-editor' and then all spaghetti will be straight again, automatically and in harmony with lint-rules. But - make sure the shortkey only run ONE and only ONE formatting plugin.  
(The most recent headache was derived from conflicting shortkeys. The prettier-atom plugin formatted all code, and the eslint-plugin-prettier dev-dependency applied fixes according to eslint settings but thereafter an old connection to another formatter also run, and ruined the result. Tip: check the keybindings in atom to confirm that only one formatter is run.)

### errors: 'Error while running ESLint: Cannot find module ...
Was any of the packages not installed? Check the setup in "".eslintrc" for the project so that it matches 'package.json'. Especially the properties "plugins" and "extends".
```
"plugins": [
    "react",
    "prettier",
    "jsx-a11y"
]
```
and
```
"extends": ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
```
That will require some of these in "package.json":
```
"eslint": "^4.16.0",
"prettier": "^1.12.1"
"eslint-config-airbnb": "^16.1.0",
"eslint-config-prettier": "^2.9.0",
"eslint-plugin-jsx-a11y": "^6.0.3",
"eslint-plugin-import": "^2.8.0",
"eslint-plugin-prettier": "^2.6.0",
"eslint-plugin-react": "^7.5.1",'
"eslint-config-standard": "^10.2.1",
"eslint-plugin-node": "^5.2.0",
"eslint-plugin-promise": "^3.5.0",
"eslint-plugin-standard": "^3.0.1"
```
 Forgotten? Add them to the project and use the linter again. Can be of interest to reload atom packages with (ctrl+alt+cmd+L)
 ```
 yarn add --dev eslint
 yarn add --dev prettier
 yarn add --dev eslint-config-prettier
 yarn add --dev eslint-plugin-prettier  
 yarn add --dev eslint-plugin-react  
 yarn add --dev eslint-plugin-import
 yarn add --dev eslint-config-airbnb   
 yarn add --dev eslint-plugin-jsx-a11y   
 ```
 or in one line:

 ```
 yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-config-airbnb  
 ```

 ### Other errors and settings
 The possibilities to configure these tools are vast. Some lint-rules might not be working if they are experimental, for example, and the solution can be to parse the code through babel before applying the linter.
 .eslintrc will have something like this:
 ```
 "parser": "babel-eslint",
 "parserOptions": {
     "ecmaVersion": 2017,
     "sourceType": "module",
     "ecmaFeatures": {
         "jsx": true,
         "modules": true,
         "impliedStrict": true,
         "experimentalObjectRestSpread": true
     }
 }
 ```

 https://github.com/babel/babel-eslint
 ###reload modules
 Atom shortcut ctrl+cmd+alt+L
 ### links
 eslintrc configuration
 https://eslint.org/docs/user-guide/configuring
