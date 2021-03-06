import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as ReactMarkdown from "https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // use \n for new line
      input: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)" };
    // state
    this.handleChange = this.handleChange.bind(this);
  } // constructor

  handleChange(event) {
    this.setState({
      input: event.target.value });

  }

  render() {

    marked.setOptions({ //   set method option to detect carriage return
      breaks: true });


    const markdown = marked(this.state.input); // convert input to html
    const innerHTML = { __html: markdown }; // create object with html for _html property

    return /*#__PURE__*/(
      React.createElement("body", null, /*#__PURE__*/
      React.createElement("h1", { id: "mainHeader" }, "MarkDown Previewer"), /*#__PURE__*/
      React.createElement("h2", { class: "subHeader", id: "editorHeader" }, "Editor"), /*#__PURE__*/
      React.createElement("h2", { class: "subHeader", id: "previewHeader" }, "Preview"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, value: this.state.input }), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: innerHTML })));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));