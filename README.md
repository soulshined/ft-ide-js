# ft-ide-js

FT-IDE is a simple, clean browser 'IDE' layout for code snippets. **It is simply a layout and not an actual IDE.* 

Styled with the power of CSS and customized with the power of JS

## Features

- Responsive 
- Customizations
  - choose font for the explorer or code 
  - syntax highlighting 
  - set 'root path' of which 'file' is selected first
  - breadcrumb options
  - and more!

There are **minimal** `!important` statements in the CSS markup so you can even expand on the layout and create your own theme. Out-of-the-box support for a light or dark theme.  

---

The goal of ft-ide is to be able to expand on snippets in a way that is project friendly for browser users. For example, if you want to share with users how your actual website layout is, the following could demonstrate that:

![overview image](./docs/images/overview.PNG?raw=true "Overview")

# Using

**Browser**

1. Add a simple script tag anywhere in your document:
```html
  <head>
    ...
    <script src="https://cdn.jsdelivr.net/gh/soulshined/ft-ide-js@<version number>/src/ft-ide.min.js"></script>
    ...
  </head>
```
> You can find version numbers & differences in <a href="https://github.com/soulshined/ft-ide-js/releases" target="_blank">releases</a>

2. Add a div in your markup with an id:
```html
  ...
  <div id="ft-ide1"></div>
  ...
```

3. Declare a new FTIDE object and pass the div's id and tree structure:
```js
new FTIDE('ft-ide1', {
  'css' : {
    'main.css' : '<main css content goes here>',
    'styles.css' : '<styles css content goes here>'
  },
  'js' : {
    'main.js' : '<main js content goes here>'
  },
  'index.html' : '<index html content goes here>'
})
```

# Demos & Usage:

https://soulshined.github.io/ft-ide-js/
