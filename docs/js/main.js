new FTIDE('ide-1', {
  'main.js' : `let opts = new FTIDEOptions({
  theme : 'dark'
});

new FTIDE('ide-1', {
  'main.js' : <omitted to prevent confusion>,
  'index.html' : \`
<!DOCTYPE html>
<html>
<head>
  <script src="main.js"></script>
</head>
<body>
  <div id="ide-1"></div>
</body>
</html>
\`
}, opts)
  `,
  'index.html' : `<!DOCTYPE html>
<html>
<head>
  <script src="main.js"></script>
</head>
<body>
  <div id="ide-1"></div>
</body>
</html>
  `
}, {
  theme: 'dark'
})
new FTIDE('ide-2', {
  'css' : {
  
  },
  'js' : {
    'main.js': `new FTIDE('ide-2', {
  'css' : {
  },
  'js' : {
    'main.js' : <omitted to prevent confusion>
  },
  'index.html' : \`
<!DOCTYPE html>
<html>
<head>
  <script src="js/main.js"></script>
</head>
<body>
  <p>Hello World! Check out my code here:</p>
  <div id="ide-2"></div>
</body>
</html>
\`,
  'readme.md' : \`
This examples uses:
- syntax highlighting (built-in support)
- light theme
\`
}, {
  theme: 'light',
  syntaxHighlighter: {
    highlight: true
  }
})
  `
  },
  'index.html': `<!DOCTYPE html>
<html>
<head>
  <script src="js/main.js"></script>
</head>
<body>
  <p>Hello World! Check out my code here:</p>
  <div id="ide-2"></div>
</body>
</html>
  `,
  'readme.md' : `This examples uses:
- syntax highlighting (built-in support)
- light theme
  `
}, {
  theme: 'light',
  syntaxHighlighter : {
    highlight: true,
  }
})
new FTIDE('ide-3', {
  'css': {

  },
  'js': {
    'main.js': `new FTIDE('ide-3', {
  'css' : {
  },
  'js' : {
    'main.js' : <omitted to prevent confusion>
  },
  'index.html' : \`
<!DOCTYPE html>
<html>
<head>
  <script src="js/main.js"></script>
</head>
<body>
  <div id="ide-3"></div>
</body>
</html>
\`,
  'readme.md' : \`This examples uses:
- syntax highlighting
- light theme
\`
}, {
  theme: 'light',
  syntaxHighlighter: {
    highlight: true
  }
})
  `
  },
  'index.html': `<!DOCTYPE html>
<html>
<head>
  <script src="js/main.js"></script>
</head>
<body>
  <div id="ide-3"></div>
</body>
</html>
  `,
  'readme.md': `This examples uses:
- syntaxHighlighter (show difference for dark theme)
- dark theme
- compact explorerStyle
- showBreadcrumbs
  `
}, {
  theme: 'dark',
  explorerStyle: 'compact',
  showBreadcrumbs: 'always',
  syntaxHighlighter : {
    highlight: true
  }
})
new FTIDE('ide-4', {
  'css': {
    "index.html": "test"
  },
  'js': {
    'main.js': `new FTIDE('ide-4', {
  'css' : {
  },
  'js' : {
    'main.js' : <omitted to prevent confusion>
  },
  'index.html' : \`
<!DOCTYPE html>
<html>
<head>
  <script src="js/main.js"></script>
</head>
<body>
  <div id="ide-4"></div>
</body>
</html>
\`,
  'readme.md' : \`
This examples uses:
- syntaxHighlighter 
- changed ide font
- changed code font
- changed root path to index.html
- expandedFolders
\`
}, {
  syntaxHighlighter: {
    highlight: true
  },
  expandFolders: true,  
  codeFontFamily: 'Anonymous Pro',
  ideFontFamily: 'Staatliches',
  rootPath: 'index.html'
})
  `
  },
  'index.html': `<!DOCTYPE html>
<html>
<head>
  <script src="prism.js" data-manual></script>
  <script src="js/main.js"></script>
</head>
<body>
  <div id="ide-4"></div>
</body>
</html>
  `,
  'readme.md': `This examples uses:
- syntaxHighlighter 
- changed ide font
- changed code font
- changed root path to index.html
- expandedFolders
  `
}, {
  syntaxHighlighter: {
      highlight: true
  },
  expandFolders: true,
  codeFontFamily: 'Anonymous Pro',
  ideFontFamily: 'Staatliches',
  rootPath: 'index.html'
})