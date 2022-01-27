export const getRuleWithSelector = (selector) => {
    let numSheets = document.styleSheets.length,
      numRules,
      sheetIndex,
      ruleIndex;
    // Search through the style sheets.
    for (sheetIndex = 0; sheetIndex < numSheets; sheetIndex += 1) {
      numRules = document.styleSheets[sheetIndex].cssRules.length;
      for (ruleIndex = 0; ruleIndex < numRules; ruleIndex += 1) {
        if (document.styleSheets[sheetIndex].cssRules[ruleIndex].selectorText === selector) {
          return document.styleSheets[sheetIndex].cssRules[ruleIndex];
        }
      }
    }
    // If we get this far, then the rule doesn't exist.
    // So the return value is undefined.
  }