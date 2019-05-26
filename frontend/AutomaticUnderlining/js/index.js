import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/style.css'

// A Pen created at CodePen.io. 
// Check out the test version at https://codepen.io/ayang4114/pen/joxJpr.

class Test extends Component {

  constructor(props) {
    super(props);
    const str = "This is not a string.";
    const keyTerms = [{ term: "is", def: "is a word" }, { term: "a string", def: "is a noun" }];
    this.state = { str: str, keyTerms: keyTerms };
    this.formatString = this.formatString.bind(this);
    this.aBeginning = this.aBeginning.bind(this);
    this.anEnding = this.anEnding.bind(this);
  }

  anEnding(c) {
    return c === '.' || c === ' ' || c === ';' || c === '\'' || c === '\"' || c === ')' || c === ']' || c === '}' || c === '>';
  }

  aBeginning(c) {
    return c === '.' || c === ' ' || c === ';' || c === '\'' || c === '\"' || c === '(' || c === '[' || c === '{' || c === '<';
  }

  formatString(str, keyTerms) {
    const terms = keyTerms.map(t => t.term);
    const strTokens = str.split(" ");
    for (var i = 0; i < terms.length; i++) {
      const term = terms[i];
      var n = str.indexOf(terms[i]);
      const len = term.length;
      if (n !== -1) {
        const before = str.substring(0, n);
        const strTerm = str.substring(n, n + len);
        const rem = str.substring(n + len, str.length);
        if (n === 0 && n + len === str.length) {
          return React.createElement("span", null, strTerm);
        } else
          if (n === 0) {
            if (str.charAt(n + len) === ' ') {
              return React.createElement("span", null, this.formatString(before, keyTerms), React.createElement("u", { class: "tooltip" }, strTerm,
                React.createElement("span", { class: "tooltiptext" }, keyTerms[i].def)), this.formatString(rem, keyTerms));
            } else {
              return React.createElement("span", null, this.formatString(before, keyTerms), strTerm, this.formatString(rem, keyTerms));
            }
          } else
            if (n + len === str.length) {
              if (str.charAt(n - 1) === ' ') {
                return React.createElement("span", null, this.formatString(before, keyTerms), React.createElement("u", { class: "tooltip" }, strTerm,
                  React.createElement("span", { class: "tooltiptext" }, keyTerms[i].def)), this.formatString(rem, keyTerms));
              } else {
                return React.createElement("span", null, this.formatString(before, keyTerms), strTerm, this.formatString(rem, keyTerms));
              }
            } else {
              if (str.charAt(n - 1) === ' ' && this.anEnding(str.charAt(n + len))) {
                return React.createElement("span", null, this.formatString(before, keyTerms), React.createElement("u", { class: "tooltip" }, strTerm,
                  React.createElement("span", { class: "tooltiptext" }, keyTerms[i].def)),
                  this.formatString(rem, keyTerms));
              } else {
                return React.createElement("span", null, this.formatString(before, keyTerms), strTerm, this.formatString(rem, keyTerms));
              }
            }
      }
    }
    return React.createElement("span", null, str);
  }

  render() {
    return React.createElement("p", null, this.formatString(this.state.str, this.state.keyTerms));
  }
}

ReactDOM.render(React.createElement(Test, null), document.getElementById("root"));