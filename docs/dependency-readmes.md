# Combined Dependency Documentation

_Generated on Tue Jul  7 10:27:09 UTC 2026_


---

# react

**Repository:** https://github.com/facebook/react

# [React](https://react.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![(Runtime) Build and Test](https://github.com/facebook/react/actions/workflows/runtime_build_and_test.yml/badge.svg)](https://github.com/facebook/react/actions/workflows/runtime_build_and_test.yml) [![(Compiler) TypeScript](https://github.com/facebook/react/actions/workflows/compiler_typescript.yml/badge.svg?branch=main)](https://github.com/facebook/react/actions/workflows/compiler_typescript.yml) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [React Native](https://reactnative.dev/).

[Learn how to use React in your project](https://react.dev/learn).

## Installation

React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need**:

* Use [Quick Start](https://react.dev/learn) to get a taste of React.
* [Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project) to use as little or as much React as you need.
* [Create a New React App](https://react.dev/learn/start-a-new-react-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

You can find the React documentation [on the website](https://react.dev/).

Check out the [Getting Started](https://react.dev/learn) page for a quick overview.

The documentation is divided into several sections:

* [Quick Start](https://react.dev/learn)
* [Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
* [Thinking in React](https://react.dev/learn/thinking-in-react)
* [Installation](https://react.dev/learn/installation)
* [Describing the UI](https://react.dev/learn/describing-the-ui)
* [Adding Interactivity](https://react.dev/learn/adding-interactivity)
* [Managing State](https://react.dev/learn/managing-state)
* [Advanced Guides](https://react.dev/learn/escape-hatches)
* [API Reference](https://react.dev/reference/react)
* [Where to Get Support](https://react.dev/community)
* [Contributing Guide](https://legacy.reactjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/reactjs/react.dev).

## Examples

We have several examples [on the website](https://react.dev/). Here is the first one to get you started:

```jsx
import { createRoot } from 'react-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://react.dev/learn#writing-markup-with-jsx). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.reactjs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.reactjs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.

### [Good First Issues](https://github.com/facebook/react/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/react/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

React is [MIT licensed](./LICENSE).


---

# typescript

**Repository:** https://github.com/microsoft/TypeScript

# TypeScript

<!-- CODING AGENTS: READ AGENTS.md BEFORE WRITING CODE -->

[![CI](https://github.com/microsoft/TypeScript/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/TypeScript/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/microsoft/TypeScript/badge)](https://securityscorecards.dev/viewer/?uri=github.com/microsoft/TypeScript)


[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescript).

Find others who are using TypeScript at [our community page](https://www.typescriptlang.org/community/).

## Installing

For the latest stable version:

```bash
npm install -D typescript
```

For our nightly builds:

```bash
npm install -D typescript@next
```

## Contribute

**NOTE: Code changes in this repo are now limited to a small category of fixes**:

 * Crashes that were introduced in 5.9 or 6.0 that *also* repro in 7.0 *and* have a portable fix *and* don't incur other behavioral changes
 * Security issues
 * Language service crashes that substantially impact mainline usage
 * Serious regressions from 5.9 (these must *seriously* impact a *large* proportion of users)

Most bug fixes should be submitted to the [typescript-go](https://github.com/microsoft/TypeScript-go) repository.
Feature additions and behavioral changes are currently on pause until TypeScript 7.0 is completed.

There are many ways to [contribute](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md) to TypeScript.
* [Submit bugs](https://github.com/microsoft/TypeScript/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/microsoft/TypeScript/pulls).
* Engage with other TypeScript users and developers on [StackOverflow](https://stackoverflow.com/questions/tagged/typescript).
* Help each other in the [TypeScript Community Discord](https://discord.gg/typescript).
* Join the [#typescript](https://twitter.com/search?q=%23TypeScript) discussion on Twitter.
* [Contribute bug fixes](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see
the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com)
with any additional questions or comments.

## Documentation

*  [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
*  [Programming handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
*  [Homepage](https://www.typescriptlang.org/)

## Roadmap

For details on our planned features and future direction, please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).


---

# tailwindcss

**Repository:** https://github.com/tailwindlabs/tailwindcss

<p align="center">
  <a href="https://tailwindcss.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" width="350" height="70" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  A utility-first CSS framework for rapidly building custom user interfaces.
</p>

<p align="center">
    <a href="https://github.com/tailwindlabs/tailwindcss/actions"><img src="https://img.shields.io/github/actions/workflow/status/tailwindlabs/tailwindcss/ci.yml?branch=main" alt="Build Status"></a>
    <a href="https://www.npmjs.com/package/tailwindcss"><img src="https://img.shields.io/npm/dt/tailwindcss.svg" alt="Total Downloads"></a>
    <a href="https://github.com/tailwindlabs/tailwindcss/releases"><img src="https://img.shields.io/npm/v/tailwindcss.svg" alt="Latest Release"></a>
    <a href="https://github.com/tailwindlabs/tailwindcss/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/tailwindcss.svg" alt="License"></a>
</p>

---

## Documentation

For full documentation, visit [tailwindcss.com](https://tailwindcss.com).

## Community

For help, discussion about best practices, or feature ideas:

[Discuss Tailwind CSS on GitHub](https://github.com/tailwindlabs/tailwindcss/discussions)

## Contributing

If you're interested in contributing to Tailwind CSS, please read our [contributing docs](https://github.com/tailwindlabs/tailwindcss/blob/main/.github/CONTRIBUTING.md) **before submitting a pull request**.


---

# postcss

**Repository:** https://github.com/postcss/postcss

# PostCSS

<img align="right" width="95" height="95"
     alt="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo.svg">

PostCSS is a tool for transforming styles with JS plugins.
These plugins can lint your CSS, support variables and mixins,
transpile future CSS syntax, inline images, and more.

PostCSS is used by industry leaders including Wikipedia, Twitter, Alibaba,
and JetBrains. The [Autoprefixer] and [Stylelint] PostCSS plugins are some of the most popular CSS tools.

---

<img src="https://cdn.evilmartians.com/badges/logo-no-label.svg" alt="" width="22" height="16" />  Built by
<b><a href="https://evilmartians.com/devtools?utm_source=postcss&utm_campaign=devtools-button&utm_medium=github">Evil Martians</a></b>, go-to agency for <b>developer tools</b>.

---

[Abstract Syntax Tree]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
[Evil Martians]: https://evilmartians.com/?utm_source=postcss
[Autoprefixer]: https://github.com/postcss/autoprefixer
[Stylelint]: https://stylelint.io/
[plugins]: https://github.com/postcss/postcss#plugins

## Sponsorship

PostCSS needs your support. We are accepting donations
[at Open Collective](https://opencollective.com/postcss/).

<br>
<div align="center">
<a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=postcss">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/fa6789d3-12be-41b9-9d63-9c257bd1a9d7">
    <img src="https://www.atlascloud.ai/logo.svg"
       alt="Sponsored by Atlas Cloud" width="300" height="48">
  </picture>
</a>

<i><a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=postcss">Atlas Cloud</a> is a full-modal AI inference platform that gives developers a single AI API to access video generation, image generation, and LLM APIs. Instead of managing multiple vendor integrations, you connect once and get unified access to 300+ curated models across all modalities.

Check out Atlas Cloud's <a href="https://www.atlascloud.ai/console/coding-plan?utm_source=github&utm_medium=link&utm_campaign=postcss">new coding plan promotion</a> for more budget-friendly API access.</i>
<br><br><br>

<a href="https://tailwindcss.com/">
  <img src="https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg"
       alt="Sponsored by Tailwind CSS" width="213" height="50"></a>      
<a href="https://themeisle.com/">
  <img src="https://mllj2j8xvfl0.i.optimole.com/d0cOXWA.3970~373ad/w:auto/h:auto/q:90/https://s30246.pcdn.co/wp-content/uploads/2019/03/logo.png"
       alt="Sponsored by ThemeIsle" width="171" height="56"></a>
</div>

## Plugins

PostCSS takes a CSS file and provides an API to analyze and modify its rules
(by transforming them into an [Abstract Syntax Tree]).
This API can then be used by [plugins] to do a lot of useful things,
e.g., to find errors automatically, or to insert vendor prefixes.

Currently, PostCSS has more than 200 plugins. You can find all of the plugins
in the [plugins list]. Below is a list of our favorite plugins —
the best demonstrations of what can be built on top of PostCSS.

If you have any new ideas, [PostCSS plugin development] is really easy.

[plugins list]: https://github.com/postcss/postcss/blob/main/docs/plugins.md

### Solve Global CSS Problem

- [`postcss-use`] allows you to explicitly set PostCSS plugins within CSS
  and execute them only for the current file.
- [`postcss-modules`] and [`react-css-modules`] automatically isolate
  selectors within components.
- [`postcss-autoreset`] is an alternative to using a global reset
  that is better for isolatable components.
- [`postcss-initial`] adds `all: initial` support, which resets
  all inherited styles.
- [`cq-prolyfill`] adds container query support, allowing styles that respond
  to the width of the parent.

### Use Future CSS, Today

- [`autoprefixer`] adds vendor prefixes, using data from Can I Use.
- [`postcss-preset-env`] allows you to use future CSS features today.

### Better CSS Readability

- [`postcss-nested`] unwraps nested rules the way Sass does.
- [`postcss-sorting`] sorts the content of rules and at-rules.
- [`postcss-utilities`] includes the most commonly used shortcuts and helpers.
- [`short`] adds and extends numerous shorthand properties.

### Images and Fonts

- [`postcss-url`] postcss plugin to rebase url(), inline or copy asset.
- [`postcss-sprites`] generates image sprites.
- [`font-magician`] generates all the `@font-face` rules needed in CSS.
- [`postcss-inline-svg`] allows you to inline SVG and customize its styles.
- [`postcss-write-svg`] allows you to write simple SVG directly in your CSS.
- [`webp-in-css`] to use WebP image format in CSS background.
- [`avif-in-css`] to use AVIF image format in CSS background.

### Linters

- [`stylelint`] is a modular stylesheet linter.
- [`stylefmt`] is a tool that automatically formats CSS
  according `stylelint` rules.
- [`doiuse`] lints CSS for browser support, using data from Can I Use.
- [`colorguard`] helps you maintain a consistent color palette.

### Other

- [`cssnano`] is a modular CSS minifier.
- [`lost`] is a feature-rich `calc()` grid system.
- [`rtlcss`] mirrors styles for right-to-left locales.

[PostCSS plugin development]: https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md
[`postcss-inline-svg`]: https://github.com/TrySound/postcss-inline-svg
[`postcss-preset-env`]: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
[`react-css-modules`]: https://github.com/gajus/react-css-modules
[`postcss-autoreset`]: https://github.com/maximkoretskiy/postcss-autoreset
[`postcss-write-svg`]: https://github.com/csstools/postcss-write-svg
[`postcss-utilities`]: https://github.com/ismamz/postcss-utilities
[`postcss-initial`]: https://github.com/maximkoretskiy/postcss-initial
[`postcss-sprites`]: https://github.com/2createStudio/postcss-sprites
[`postcss-modules`]: https://github.com/outpunk/postcss-modules
[`postcss-sorting`]: https://github.com/hudochenkov/postcss-sorting
[`font-magician`]: https://github.com/csstools/postcss-font-magician
[`autoprefixer`]: https://github.com/postcss/autoprefixer
[`cq-prolyfill`]: https://github.com/ausi/cq-prolyfill
[`postcss-url`]: https://github.com/postcss/postcss-url
[`postcss-use`]: https://github.com/postcss/postcss-use
[`css-modules`]: https://github.com/css-modules/css-modules
[`webp-in-css`]: https://github.com/ai/webp-in-css
[`avif-in-css`]: https://github.com/nucliweb/avif-in-css
[`colorguard`]: https://github.com/SlexAxton/css-colorguard
[`stylelint`]: https://github.com/stylelint/stylelint
[`stylefmt`]: https://github.com/morishitter/stylefmt
[`cssnano`]: https://cssnano.github.io/cssnano/
[`postcss-nested`]: https://github.com/postcss/postcss-nested
[`doiuse`]: https://github.com/anandthakker/doiuse
[`rtlcss`]: https://github.com/MohammadYounes/rtlcss
[`short`]: https://github.com/csstools/postcss-short
[`lost`]: https://github.com/peterramsing/lost

## Syntaxes

PostCSS can transform styles in any syntax, not just CSS.
If there is not yet support for your favorite syntax,
you can write a parser and/or stringifier to extend PostCSS.

- [`sugarss`] is a indent-based syntax like Sass or Stylus.
- [`postcss-syntax`] switch syntax automatically by file extensions.
- [`postcss-html`] parsing styles in `<style>` tags of HTML-like files.
- [`postcss-markdown`] parsing styles in code blocks of Markdown files.
- [`postcss-styled-syntax`] parses styles in template literals CSS-in-JS
  like styled-components.
- [`postcss-jsx`] parsing CSS in template / object literals of source files.
- [`postcss-styled`] parsing CSS in template literals of source files.
- [`postcss-scss`] allows you to work with SCSS
  _(but does not compile SCSS to CSS)_.
- [`postcss-sass`] allows you to work with Sass
  _(but does not compile Sass to CSS)_.
- [`postcss-less`] allows you to work with Less
  _(but does not compile LESS to CSS)_.
- [`postcss-less-engine`] allows you to work with Less
  _(and DOES compile LESS to CSS using true Less.js evaluation)_.
- [`postcss-js`] allows you to write styles in JS or transform
  React Inline Styles, Radium or JSS.
- [`postcss-safe-parser`] finds and fixes CSS syntax errors.
- [`midas`] converts a CSS string to highlighted HTML.

[`postcss-styled-syntax`]: https://github.com/hudochenkov/postcss-styled-syntax
[`postcss-less-engine`]: https://github.com/Crunch/postcss-less
[`postcss-safe-parser`]: https://github.com/postcss/postcss-safe-parser
[`postcss-syntax`]: https://github.com/gucong3000/postcss-syntax
[`postcss-html`]: https://github.com/ota-meshi/postcss-html
[`postcss-markdown`]: https://github.com/ota-meshi/postcss-markdown
[`postcss-jsx`]: https://github.com/gucong3000/postcss-jsx
[`postcss-styled`]: https://github.com/gucong3000/postcss-styled
[`postcss-scss`]: https://github.com/postcss/postcss-scss
[`postcss-sass`]: https://github.com/AleshaOleg/postcss-sass
[`postcss-less`]: https://github.com/webschik/postcss-less
[`postcss-js`]: https://github.com/postcss/postcss-js
[`sugarss`]: https://github.com/postcss/sugarss
[`midas`]: https://github.com/ben-eb/midas

## Articles

- [Some things you may think about PostCSS… and you might be wrong](https://www.julian.io/articles/postcss.html)
- [What PostCSS Really Is; What It Really Does](https://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/)
- [PostCSS Guides](https://webdesign.tutsplus.com/series/postcss-deep-dive--cms-889)

More articles and videos you can find on [awesome-postcss](https://github.com/jjaderg/awesome-postcss) list.

## Books

- [Mastering PostCSS for Web Design](https://www.packtpub.com/web-development/mastering-postcss-web-design) by Alex Libby, Packt. (June 2016)

## Usage

You can start using PostCSS in just two steps:

1. Find and add PostCSS extensions for your build tool.
2. [Select plugins] and add them to your PostCSS process.

[Select plugins]: https://postcss.org/docs/postcss-plugins

### CSS-in-JS

The best way to use PostCSS with CSS-in-JS is [`astroturf`].
Add its loader to your `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader']
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader']
      }
    ]
  }
}
```

Then create `postcss.config.js`:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require('autoprefixer'), require('postcss-nested')]
}

module.exports = config
```

[`astroturf`]: https://github.com/4Catalyzer/astroturf

### Parcel

[Parcel] has built-in PostCSS support. It already uses Autoprefixer
and cssnano. If you want to change plugins, create `postcss.config.js`
in project’s root:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require('autoprefixer'), require('postcss-nested')]
}

module.exports = config
```

Parcel will even automatically install these plugins for you.

> Please, be aware of [the several issues in Version 1](https://github.com/parcel-bundler/parcel/labels/CSS%20Preprocessing). Notice, [Version 2](https://github.com/parcel-bundler/parcel/projects/5) may resolve the issues via [issue #2157](https://github.com/parcel-bundler/parcel/issues/2157).

[Parcel]: https://parceljs.org

### Webpack

Use [`postcss-loader`] in `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
```

Then create `postcss.config.js`:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require('autoprefixer'), require('postcss-nested')]
}

module.exports = config
```

[`postcss-loader`]: https://github.com/postcss/postcss-loader

### Gulp

Use [`gulp-postcss`] and [`gulp-sourcemaps`].

```js
gulp.task('css', () => {
  const postcss = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp
    .src('src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([require('autoprefixer'), require('postcss-nested')]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
})
```

[`gulp-sourcemaps`]: https://github.com/floridoo/gulp-sourcemaps
[`gulp-postcss`]: https://github.com/postcss/gulp-postcss

### npm Scripts

To use PostCSS from your command-line interface or with npm scripts
there is [`postcss-cli`].

```sh
postcss --use autoprefixer -o main.css css/*.css
```

[`postcss-cli`]: https://github.com/postcss/postcss-cli

### Browser

If you want to compile CSS string in browser (for instance, in live edit
tools like CodePen), just use [Browserify] or [webpack]. They will pack
PostCSS and plugins files into a single file.

To apply PostCSS plugins to React Inline Styles, JSS, Radium
and other [CSS-in-JS], you can use [`postcss-js`] and transforms style objects.

```js
const postcss = require('postcss-js')
const prefixer = postcss.sync([require('autoprefixer')])

prefixer({ display: 'flex' }) //=> { display: ['-webkit-box', '-webkit-flex', '-ms-flexbox', 'flex'] }
```

[`postcss-js`]: https://github.com/postcss/postcss-js
[Browserify]: https://browserify.org/
[CSS-in-JS]: https://github.com/MicheleBertoli/css-in-js
[webpack]: https://webpack.github.io/

### Runners

- **Grunt**: [`@lodder/grunt-postcss`](https://github.com/C-Lodder/grunt-postcss)
- **HTML**: [`posthtml-postcss`](https://github.com/posthtml/posthtml-postcss)
- **Stylus**: [`poststylus`](https://github.com/seaneking/poststylus)
- **Rollup**: [`rollup-plugin-postcss`](https://github.com/egoist/rollup-plugin-postcss)
- **Brunch**: [`postcss-brunch`](https://github.com/brunch/postcss-brunch)
- **Broccoli**: [`broccoli-postcss`](https://github.com/jeffjewiss/broccoli-postcss)
- **Meteor**: [`postcss`](https://atmospherejs.com/juliancwirko/postcss)
- **ENB**: [`enb-postcss`](https://github.com/awinogradov/enb-postcss)
- **Taskr**: [`taskr-postcss`](https://github.com/lukeed/taskr/tree/master/packages/postcss)
- **Start**: [`start-postcss`](https://github.com/start-runner/postcss)
- **Connect/Express**: [`postcss-middleware`](https://github.com/jedmao/postcss-middleware)
- **Svelte Preprocessor**: [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#postcss-sugarss)

### JS API

For other environments, you can use the JS API:

```js
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssNested = require('postcss-nested')
const fs = require('fs')

fs.readFile('src/app.css', (err, css) => {
  postcss([autoprefixer, postcssNested])
    .process(css, { from: 'src/app.css', to: 'dest/app.css' })
    .then(result => {
      fs.writeFile('dest/app.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dest/app.css.map', result.map.toString(), () => true)
      }
    })
})
```

Read the [PostCSS API documentation] for more details about the JS API.

All PostCSS runners should pass [PostCSS Runner Guidelines].

[PostCSS Runner Guidelines]: https://github.com/postcss/postcss/blob/main/docs/guidelines/runner.md
[PostCSS API documentation]: https://postcss.org/api/

### Options

Most PostCSS runners accept two parameters:

- An array of plugins.
- An object of options.

Common options:

- `syntax`: an object providing a syntax parser and a stringifier.
- `parser`: a special syntax parser (for example, [SCSS]).
- `stringifier`: a special syntax output generator (for example, [Midas]).
- `map`: [source map options].
- `from`: the input file name (most runners set it automatically).
- `to`: the output file name (most runners set it automatically).

[source map options]: https://postcss.org/api/#sourcemapoptions
[Midas]: https://github.com/ben-eb/midas
[SCSS]: https://github.com/postcss/postcss-scss

### Treat Warnings as Errors

In some situations it might be helpful to fail the build on any warning
from PostCSS or one of its plugins. This guarantees that no warnings
go unnoticed, and helps to avoid bugs. While there is no option to enable
treating warnings as errors, it can easily be done
by adding `postcss-fail-on-warn` plugin in the end of PostCSS plugins:

```js
module.exports = {
  plugins: [require('autoprefixer'), require('postcss-fail-on-warn')]
}
```

## Editors & IDE Integration

### VS Code

- [`csstools.postcss`] adds PostCSS support.
- [`smallcase.postcssense`] adds Intellisense for global classes

[`csstools.postcss`]: https://marketplace.visualstudio.com/items?itemName=csstools.postcss
[`smallcase.postcssense`]: https://marketplace.visualstudio.com/items?itemName=smallcase.postcssense

### Sublime Text

- [`Syntax-highlighting-for-PostCSS`] adds PostCSS highlight.

[`Syntax-highlighting-for-PostCSS`]: https://github.com/hudochenkov/Syntax-highlighting-for-PostCSS

### Vim

- [`postcss.vim`] adds PostCSS highlight.

[`postcss.vim`]: https://github.com/stephenway/postcss.vim

### WebStorm

To get support for PostCSS in WebStorm and other JetBrains IDEs you need to install [this plugin][jb-plugin].

[jb-plugin]: https://plugins.jetbrains.com/plugin/8578-postcss

## Security Contact

To report a security vulnerability, please use the [Tidelift security contact].
Tidelift will coordinate the fix and disclosure.

[Tidelift security contact]: https://tidelift.com/security

## For Enterprise

Available as part of the Tidelift Subscription.

The maintainers of `postcss` and thousands of other packages are working
with Tidelift to deliver commercial support and maintenance for the open source
dependencies you use to build your applications. Save time, reduce risk,
and improve code health, while paying the maintainers of the exact dependencies
you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-postcss?utm_source=npm-postcss&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)


---

# autoprefixer

**Repository:** https://github.com/postcss/autoprefixer

# Autoprefixer [![Cult Of Martians][cult-img]][cult]

<img align="right" width="94" height="71"
     src="https://postcss.github.io/autoprefixer/logo.svg"
     title="Autoprefixer logo by Anton Lovchikov">

[PostCSS] plugin to parse CSS and add vendor prefixes to CSS rules using values
from [Can I Use]. It is recommended by Google and used in Twitter and Alibaba.

Write your CSS rules without vendor prefixes (in fact, forget about them
entirely):

```css
::placeholder {
  color: gray;
}

.image {
  width: stretch;
}
```

Autoprefixer will use the data based on current browser popularity and property
support to apply prefixes for you. You can try the [interactive demo]
of Autoprefixer.

```css
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}

.image {
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
}
```

Twitter account for news and releases: [@autoprefixer].

<a href="https://evilmartians.com/?utm_source=autoprefixer">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a>

[interactive demo]: https://autoprefixer.github.io/
[@autoprefixer]: https://twitter.com/autoprefixer
[Can I Use]: https://caniuse.com/
[cult-img]: https://cultofmartians.com/assets/badges/badge.svg
[PostCSS]: https://github.com/postcss/postcss
[cult]: https://cultofmartians.com/tasks/autoprefixer-grid.html

## Contents

- [Contents](#contents)
- [Browsers](#browsers)
- [FAQ](#faq)
  - [Does Autoprefixer polyfill Grid Layout for IE?](#does-autoprefixer-polyfill-grid-layout-for-ie)
  - [Does it add polyfills?](#does-it-add-polyfills)
  - [Why doesn’t Autoprefixer add prefixes to `border-radius`?](#why-doesnt-autoprefixer-add-prefixes-to-border-radius)
  - [Why does Autoprefixer use unprefixed properties in `@-webkit-keyframes`?](#why-does-autoprefixer-use-unprefixed-properties-in--webkit-keyframes)
  - [How to work with legacy `-webkit-` only code?](#how-to-work-with-legacy--webkit--only-code)
  - [Does Autoprefixer add `-epub-` prefix?](#does-autoprefixer-add--epub--prefix)
  - [Why doesn’t Autoprefixer transform generic font-family `system-ui`?](#why-doesnt-autoprefixer-transform-generic-font-family-system-ui)
- [Usage](#usage)
  - [Gulp](#gulp)
  - [Webpack](#webpack)
  - [CSS-in-JS](#css-in-js)
  - [CLI](#cli)
  - [Other Build Tools](#other-build-tools)
    - [Preprocessors](#preprocessors)
    - [GUI Tools](#gui-tools)
  - [JavaScript](#javascript)
  - [Text Editors and IDE](#text-editors-and-ide)
- [Warnings](#warnings)
- [Disabling](#disabling)
  - [Prefixes](#prefixes)
  - [Features](#features)
  - [Control Comments](#control-comments)
- [Options](#options)
- [Environment Variables](#environment-variables)
  - [Using environment variables to support CSS Grid prefixes in Create React App](#using-environment-variables-to-support-css-grid-prefixes-in-create-react-app)
- [Grid Autoplacement support in IE](#grid-autoplacement-support-in-ie)
  - [Beware of enabling autoplacement in old projects](#beware-of-enabling-autoplacement-in-old-projects)
  - [Autoplacement limitations](#autoplacement-limitations)
    - [Both columns and rows must be defined](#both-columns-and-rows-must-be-defined)
    - [Repeat auto-fit and auto-fill are not supported](#repeat-auto-fit-and-auto-fill-are-not-supported)
    - [No manual cell placement or column/row spans allowed inside an autoplacement grid](#no-manual-cell-placement-or-columnrow-spans-allowed-inside-an-autoplacement-grid)
    - [Do not create `::before` and `::after` pseudo elements](#do-not-create-before-and-after-pseudo-elements)
    - [When changing the `grid gap` value, columns and rows must be re-declared](#when-changing-the-grid-gap-value-columns-and-rows-must-be-re-declared)
- [Debug](#debug)
- [Security Contact](#security-contact)
- [For Enterprise](#for-enterprise)

## Browsers

Autoprefixer uses [Browserslist], so you can specify the browsers
you want to target in your project with queries like `> 5%`
(see [Best Practices]).

The best way to provide browsers is a `.browserslistrc` file in your project
root, or by adding a `browserslist` key to your `package.json`.

We recommend the use of these options over passing options to Autoprefixer so
that the config can be shared with other tools such as [babel-preset-env] and
[Stylelint].

See [Browserslist docs] for queries, browser names, config format, and defaults.

[Browserslist docs]: https://github.com/browserslist/browserslist#queries
[babel-preset-env]: https://github.com/babel/babel/tree/master/packages/babel-preset-env
[Best Practices]: https://github.com/browserslist/browserslist#best-practices
[Browserslist]: https://github.com/browserslist/browserslist
[Stylelint]: https://stylelint.io/

## FAQ

### Does Autoprefixer polyfill Grid Layout for IE?

Autoprefixer can be used to translate modern CSS Grid syntax into IE 10
and IE 11 syntax, but this polyfill will not work in 100% of cases.
This is why it is disabled by default.

First, you need to enable Grid prefixes by using either the `grid: "autoplace"`
option or the `/* autoprefixer grid: autoplace */` control comment.
Also you can use environment variable to enable Grid:
`AUTOPREFIXER_GRID=autoplace npm build`.

Second, you need to test every fix with Grid in IE. It is not an enable and
forget feature, but it is still very useful.
Financial Times and Yandex use it in production.

Third, there is only very limited auto placement support. Read the
[Grid Autoplacement support in IE](#grid-autoplacement-support-in-ie) section
for more details.

Fourth, if you are not using the autoplacement feature, the best way
to use Autoprefixer is by using `grid-template` or `grid-template-areas`.

```css
.page {
  display: grid;
  grid-gap: 33px;
  grid-template:
    'head head  head' 1fr
    'nav  main  main' minmax(100px, 1fr)
    'nav  foot  foot' 2fr /
    1fr 100px 1fr;
}
.page__head {
  grid-area: head;
}
.page__nav {
  grid-area: nav;
}
.page__main {
  grid-area: main;
}
.page__footer {
  grid-area: foot;
}
```

See also:

- [The guide about Grids in IE and Autoprefixer].
- [`postcss-gap-properties`] to use new `gap` property
  instead of old `grid-gap`.
- [`postcss-grid-kiss`] has alternate “everything in one property” syntax,
  which makes using Autoprefixer’s Grid translations safer.

[The guide about Grids in IE and Autoprefixer]: https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/
[`postcss-gap-properties`]: https://github.com/jonathantneal/postcss-gap-properties
[`postcss-grid-kiss`]: https://github.com/sylvainpolletvillard/postcss-grid-kiss

### Does it add polyfills?

No. Autoprefixer only adds prefixes.

Most new CSS features will require client side JavaScript to handle a new
behavior correctly.

Depending on what you consider to be a “polyfill”, you can take a look at some
other tools and libraries. If you are just looking for syntax sugar,
you might take a look at:

- [postcss-preset-env] is a plugins preset with polyfills and Autoprefixer
  to write future CSS today.
- [Oldie], a PostCSS plugin that handles some IE hacks (opacity, rgba, etc).
- [postcss-flexbugs-fixes], a PostCSS plugin to fix flexbox issues.

[postcss-flexbugs-fixes]: https://github.com/luisrudge/postcss-flexbugs-fixes
[postcss-preset-env]: https://github.com/jonathantneal/postcss-preset-env
[Oldie]: https://github.com/jonathantneal/oldie

### Why doesn’t Autoprefixer add prefixes to `border-radius`?

Developers are often surprised by how few prefixes are required today.
If Autoprefixer doesn’t add prefixes to your CSS, check if they’re still
required on [Can I Use].

[Can I Use]: https://caniuse.com/

### Why does Autoprefixer use unprefixed properties in `@-webkit-keyframes`?

Browser teams can remove some prefixes before others, so we try to use all
combinations of prefixed/unprefixed values.

### How to work with legacy `-webkit-` only code?

Autoprefixer needs unprefixed property to add prefixes. So if you only
wrote `-webkit-gradient` without W3C’s `gradient`,
Autoprefixer will not add other prefixes.

But [PostCSS] has plugins to convert CSS to unprefixed state.
Use [postcss-unprefix] before Autoprefixer.

[postcss-unprefix]: https://github.com/gucong3000/postcss-unprefix

### Does Autoprefixer add `-epub-` prefix?

No, Autoprefixer works only with browsers prefixes from Can I Use.
But you can use [postcss-epub] for prefixing ePub3 properties.

[postcss-epub]: https://github.com/Rycochet/postcss-epub

### Why doesn’t Autoprefixer transform generic font-family `system-ui`?

`system-ui` is technically not a prefix and the transformation is not
future-proof. You can use [postcss-font-family-system-ui] to transform
`system-ui` to a practical font-family list.

[postcss-font-family-system-ui]: https://github.com/JLHwung/postcss-font-family-system-ui

## Usage

### Gulp

In Gulp you can use [gulp-postcss] with `autoprefixer` npm package.

```js
gulp.task('autoprefixer', () => {
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')
  const postcss = require('gulp-postcss')

  return gulp
    .src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
})
```

With `gulp-postcss` you also can combine Autoprefixer
with [other PostCSS plugins].

[gulp-postcss]: https://github.com/postcss/gulp-postcss
[other PostCSS plugins]: https://github.com/postcss/postcss#plugins

### Webpack

In [webpack] you can use [postcss-loader] with `autoprefixer`
and [other PostCSS plugins].

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}
```

And create a `postcss.config.js` with:

```js
module.exports = {
  plugins: [require('autoprefixer')]
}
```

[other PostCSS plugins]: https://github.com/postcss/postcss#plugins
[postcss-loader]: https://github.com/postcss/postcss-loader
[webpack]: https://webpack.js.org/

### CSS-in-JS

The best way to use PostCSS with CSS-in-JS is [`astroturf`].
Add its loader to your `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader']
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader']
      }
    ]
  }
}
```

Then create `postcss.config.js`:

```js
module.exports = {
  plugins: [require('autoprefixer')]
}
```

[`astroturf`]: https://github.com/4Catalyzer/astroturf

### CLI

You can use the [postcss-cli] to run Autoprefixer from CLI:

```sh
npm install postcss postcss-cli autoprefixer
npx postcss *.css --use autoprefixer -d build/
```

See `postcss -h` for help.

[postcss-cli]: https://github.com/postcss/postcss-cli

### Other Build Tools

- **Grunt:** [grunt-postcss]
- **Ruby on Rails**: [autoprefixer-rails]
- **Neutrino**: [neutrino-middleware-postcss]
- **Jekyll**: add `autoprefixer-rails` and `jekyll-assets` to `Gemfile`
- **Brunch**: [postcss-brunch]
- **Broccoli**: [broccoli-postcss]
- **Middleman**: [middleman-autoprefixer]
- **Mincer**: add `autoprefixer` npm package and enable it:
  `environment.enable('autoprefixer')`

[neutrino-middleware-postcss]: https://www.npmjs.com/package/neutrino-middleware-postcss
[middleman-autoprefixer]: https://github.com/middleman/middleman-autoprefixer
[autoprefixer-rails]: https://github.com/ai/autoprefixer-rails
[broccoli-postcss]: https://github.com/jeffjewiss/broccoli-postcss
[postcss-brunch]: https://github.com/iamvdo/postcss-brunch
[grunt-postcss]: https://github.com/C-Lodder/grunt-postcss

#### Preprocessors

- **Less**: [less-plugin-autoprefix]
- **Stylus**: [autoprefixer-stylus]
- **Compass**: [autoprefixer-rails#compass]

[less-plugin-autoprefix]: https://github.com/less/less-plugin-autoprefix
[autoprefixer-stylus]: https://github.com/jenius/autoprefixer-stylus
[autoprefixer-rails#compass]: https://github.com/ai/autoprefixer-rails#compass

#### GUI Tools

- [CodeKit](https://codekitapp.com/help/autoprefixer/)
- [Prepros](https://prepros.io)

### JavaScript

You can use Autoprefixer with [PostCSS] in your Node.js application
or if you want to develop an Autoprefixer plugin for a new environment.

```js
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

postcss([autoprefixer])
  .process(css)
  .then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })
    console.log(result.css)
  })
```

There is also a [standalone build] for the browser or for a non-Node.js runtime.

You can use [html-autoprefixer] to process HTML with inlined CSS.

[html-autoprefixer]: https://github.com/RebelMail/html-autoprefixer
[standalone build]: https://raw.github.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js
[PostCSS]: https://github.com/postcss/postcss

### Text Editors and IDE

Autoprefixer should be used in assets build tools. Text editor plugins are not
a good solution, because prefixes decrease code readability and you will need
to change values in all prefixed properties.

I recommend you to learn how to use build tools like [Parcel].
They work much better and will open you a whole new world of useful plugins
and automation.

If you can’t move to a build tool, you can use text editor plugins:

- [Visual Studio Code](https://github.com/mrmlnc/vscode-autoprefixer)
- [Sublime Text](https://github.com/sindresorhus/sublime-autoprefixer)

[Parcel]: https://parceljs.org/

## Warnings

Autoprefixer uses the [PostCSS warning API] to warn about really important
problems in your CSS:

- Old direction syntax in gradients.
- Old unprefixed `display: box` instead of `display: flex`
  by latest specification version.

You can get warnings from `result.warnings()`:

```js
result.warnings().forEach(warn => {
  console.warn(warn.toString())
})
```

Every Autoprefixer runner should display these warnings.

[PostCSS warning API]: https://postcss.org/api/#warning

## Disabling

### Prefixes

Autoprefixer was designed to have no interface – it just works.
If you need some browser specific hack just write a prefixed property
after the unprefixed one.

```css
a {
  transform: scale(0.5);
  -moz-transform: scale(0.6);
}
```

If some prefixes were generated incorrectly, please create an [issue on GitHub].

[issue on GitHub]: https://github.com/postcss/autoprefixer/issues

### Features

You can use these plugin options to control some of Autoprefixer’s features.

- `grid: "autoplace"` will enable `-ms-` prefixes for Grid Layout including some
  [limited autoplacement support](#grid-autoplacement-support-in-ie).
- `supports: false` will disable `@supports` parameters prefixing.
- `flexbox: false` will disable flexbox properties prefixing.
  Or `flexbox: "no-2009"` will add prefixes only for final and IE
  versions of specification.
- `remove: false` will disable cleaning outdated prefixes.

You should set them inside the plugin like so:

```js
autoprefixer({ grid: 'autoplace' })
```

### Control Comments

If you do not need Autoprefixer in some part of your CSS,
you can use control comments to disable Autoprefixer.

```css
.a {
  transition: 1s; /* will be prefixed */
}

.b {
  /* autoprefixer: off */
  transition: 1s; /* will not be prefixed */
}

.c {
  /* autoprefixer: ignore next */
  transition: 1s; /* will not be prefixed */
  mask: url(image.png); /* will be prefixed */
}
```

There are three types of control comments:

- `/* autoprefixer: (on|off) */`: enable/disable all Autoprefixer translations for the
  whole block both _before_ and _after_ the comment.
- `/* autoprefixer: ignore next */`: disable Autoprefixer only for the next property
  or next rule selector or at-rule parameters (but not rule/at‑rule body).
- `/* autoprefixer grid: (autoplace|no-autoplace|off) */`: control how Autoprefixer handles
  grid translations for the whole block:
  - `autoplace`: enable grid translations with autoplacement support.
  - `no-autoplace`: enable grid translations with autoplacement
    support _disabled_ (alias for deprecated value `on`).
  - `off`: disable all grid translations.

You can also use comments recursively:

```css
/* autoprefixer: off */
@supports (transition: all) {
  /* autoprefixer: on */
  a {
    /* autoprefixer: off */
  }
}
```

Note that comments that disable the whole block should not be featured in the same
block twice:

```css
/* How not to use block level control comments */

.do-not-do-this {
  /* autoprefixer: off */
  transition: 1s;
  /* autoprefixer: on */
  transform: rotate(20deg);
}
```

## Options

Function `autoprefixer(options)` returns a new PostCSS plugin.
See [PostCSS API] for plugin usage documentation.

```js
autoprefixer({ cascade: false })
```

Available options are:

- `env` (string): environment for Browserslist.
- `cascade` (boolean): should Autoprefixer use Visual Cascade,
  if CSS is uncompressed. Default: `true`
- `add` (boolean): should Autoprefixer add prefixes. Default is `true`.
- `remove` (boolean): should Autoprefixer [remove outdated] prefixes.
  Default is `true`.
- `supports` (boolean): should Autoprefixer add prefixes for `@supports`
  parameters. Default is `true`.
- `flexbox` (boolean|string): should Autoprefixer add prefixes for flexbox
  properties. With `"no-2009"` value Autoprefixer will add prefixes only
  for final and IE 10 versions of specification. Default is `true`.
- `grid` (false|`"autoplace"`|`"no-autoplace"`): should Autoprefixer
  add IE 10-11 prefixes for Grid Layout properties?
  - `false` (default): prevent Autoprefixer from outputting
    CSS Grid translations.
  - `"autoplace"`: enable Autoprefixer grid translations
    and _include_ autoplacement support. You can also use
    `/* autoprefixer grid: autoplace */` in your CSS.
  - `"no-autoplace"`: enable Autoprefixer grid translations
    but _exclude_ autoplacement support. You can also use
    `/* autoprefixer grid: no-autoplace */` in your CSS.
    (alias for the deprecated `true` value)
- `stats` (object): custom [usage statistics] for `> 10% in my stats`
  browsers query.
- `overrideBrowserslist` (array): list of queries for target browsers.
  Try to not use it. The best practice is to use `.browserslistrc` config
  or `browserslist` key in `package.json` to share target browsers
  with Babel, ESLint and Stylelint. See [Browserslist docs]
  for available queries and default value.
- `ignoreUnknownVersions` (boolean): do not raise error on unknown browser
  version in Browserslist config. Default is `false`.

Plugin object has `info()` method for debugging purpose.

You can use PostCSS processor to process several CSS files
to increase performance.

[usage statistics]: https://github.com/browserslist/browserslist#custom-usage-data
[PostCSS API]: https://postcss.org/api/

## Environment Variables

- `AUTOPREFIXER_GRID`: (`autoplace`|`no-autoplace`) should Autoprefixer
  add IE 10-11 prefixes for Grid Layout properties?
  - `autoplace`: enable Autoprefixer grid translations
    and _include_ autoplacement support.
  - `no-autoplace`: enable Autoprefixer grid translations
    but _exclude_ autoplacement support.

Environment variables are useful, when you want to change Autoprefixer options but don't have access to config files.
[Create React App] is a good example of this.

[Create React App]: (https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

### Using environment variables to support CSS Grid prefixes in Create React App

1. Install the latest version of Autoprefixer and [cross-env](https://www.npmjs.com/package/cross-env):

```
npm install autoprefixer@latest cross-env --save-dev
```

2. Under `"browserslist"` > `"development"` in the package.json file, add `"last 1 ie version"`

```
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version",
    "last 1 ie version"
  ]
}
```

3. Update `"scripts"` in the package.json file to the following:

```
"scripts": {
  "start": "cross-env AUTOPREFIXER_GRID=autoplace react-scripts start",
  "build": "cross-env AUTOPREFIXER_GRID=autoplace react-scripts build",
  "test": "cross-env AUTOPREFIXER_GRID=autoplace react-scripts test",
  "eject": "react-scripts eject"
},
```

Replace `autoplace` with `no-autoplace` in the above example if you prefer to disable Autoprefixer Grid autoplacement support.

Now when you run `npm start` you will see CSS Grid prefixes automatically being applied to your output CSS.

See also [Browserslist environment variables] for more examples on how to use environment variables in your project.

[Browserslist environment variables]: https://github.com/browserslist/browserslist#environment-variables

## Grid Autoplacement support in IE

If the `grid` option is set to `"autoplace"`, limited autoplacement support is added to Autoprefixers grid translations. You can also use
the `/* autoprefixer grid: autoplace */` control comment or
`AUTOPREFIXER_GRID=autoplace npm build` environment variable.

Autoprefixer will only autoplace grid cells if both `grid-template-rows`
and `grid-template-columns` has been set. If `grid-template`
or `grid-template-areas` has been set, Autoprefixer will use area based
cell placement instead.

Autoprefixer supports autoplacement by using `nth-child` CSS selectors.
It creates [number of columns] x [number of rows] `nth-child` selectors.
For this reason Autoplacement is only supported within the explicit grid.

```css
/* Input CSS */

/* autoprefixer grid: autoplace */

.autoplacement-example {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
}
```

```css
/* Output CSS */

/* autoprefixer grid: autoplace */

.autoplacement-example {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 20px 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto 20px auto;
  grid-template-rows: auto auto;
  grid-gap: 20px;
}

.autoplacement-example > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}

.autoplacement-example > *:nth-child(2) {
  -ms-grid-row: 1;
  -ms-grid-column: 3;
}

.autoplacement-example > *:nth-child(3) {
  -ms-grid-row: 3;
  -ms-grid-column: 1;
}

.autoplacement-example > *:nth-child(4) {
  -ms-grid-row: 3;
  -ms-grid-column: 3;
}
```

### Beware of enabling autoplacement in old projects

Be careful about enabling autoplacement in any already established projects that have
previously not used Autoprefixer's grid autoplacement feature before.

If this was your html:

```html
<div class="grid">
  <div class="grid-cell"></div>
</div>
```

The following CSS will not work as expected with the autoplacement feature enabled:

```css
/* Unsafe CSS when Autoplacement is enabled */

.grid-cell {
  grid-column: 2;
  grid-row: 2;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
```

Swapping the rules around will not fix the issue either:

```css
/* Also unsafe to use this CSS */

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.grid-cell {
  grid-column: 2;
  grid-row: 2;
}
```

One way to deal with this issue is to disable autoplacement in the
grid-declaration rule:

```css
/* Disable autoplacement to fix the issue */

.grid {
  /* autoprefixer grid: no-autoplace */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.grid-cell {
  grid-column: 2;
  grid-row: 2;
}
```

The absolute best way to integrate autoplacement into already existing projects
though is to leave autoplacement turned off by default and then use a control
comment to enable it when needed. This method is far less likely to cause
something on the site to break.

```css
/* Disable autoplacement by default in old projects */
/* autoprefixer grid: no-autoplace */

/* Old code will function the same way it always has */
.old-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.old-grid-cell {
  grid-column: 2;
  grid-row: 2;
}

/* Enable autoplacement when you want to use it in new code */
.new-autoplace-friendly-grid {
  /* autoprefixer grid: autoplace */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
}
```

Note that the `grid: "no-autoplace"` setting and the
`/* autoprefixer grid: no-autoplace */` control comment share identical
functionality to the `grid: true` setting and the `/* autoprefixer grid: on */`
control comment. There is no need to refactor old code to use `no-autoplace`
in place of the old `true` and `on` statements.

### Autoplacement limitations

#### Both columns and rows must be defined

Autoplacement only works inside the explicit grid. The columns and rows need to be defined
so that Autoprefixer knows how many `nth-child` selectors to generate.

```css
.not-allowed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.is-allowed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, auto);
}
```

#### Repeat auto-fit and auto-fill are not supported

The `repeat(auto-fit, ...)` and `repeat(auto-fill, ...)` grid functionality relies on
knowledge from the browser about screen dimensions and the number of available grid
items for it to work properly. Autoprefixer does not have access to this information
so unfortunately this little snippet will _never_ be IE friendly.

```css
.grid {
  /* This will never be IE friendly */
  grid-template-columns: repeat(auto-fit, min-max(200px, 1fr));
}
```

#### No manual cell placement or column/row spans allowed inside an autoplacement grid

Elements must not be manually placed or given column/row spans inside
an autoplacement grid. Only the most basic of autoplacement grids are supported.
Grid cells can still be placed manually outside the the explicit grid though.
Support for manually placing individual grid cells inside an explicit
autoplacement grid is planned for a future release.

```css
.autoplacement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
}

/* Grid cells placed inside the explicit grid
   will break the layout in IE */
.not-permitted-grid-cell {
  grid-column: 1;
  grid-row: 1;
}

/* Grid cells placed outside the
   explicit grid will work in IE */
.permitted-grid-cell {
  grid-column: 1 / span 2;
  grid-row: 4;
}
```

If manual cell placement is required, we recommend using `grid-template` or
`grid-template-areas` instead:

```css
.page {
  display: grid;
  grid-gap: 30px;
  grid-template:
    'head head'
    'nav  main' minmax(100px, 1fr)
    'foot foot' /
    200px 1fr;
}
.page__head {
  grid-area: head;
}
.page__nav {
  grid-area: nav;
}
.page__main {
  grid-area: main;
}
.page__footer {
  grid-area: foot;
}
```

#### Do not create `::before` and `::after` pseudo elements

Let's say you have this HTML:

```html
<div class="grid">
  <div class="grid-cell"></div>
</div>
```

And you write this CSS:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

.grid::before {
  content: 'before';
}

.grid::after {
  content: 'after';
}
```

This will be the output:

```css
.grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.grid > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}

.grid > *:nth-child(2) {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
}

.grid::before {
  content: 'before';
}

.grid::after {
  content: 'after';
}
```

IE will place `.grid-cell`, `::before` and `::after` in row 1 column 1.
Modern browsers on the other hand will place `::before` in row 1 column 1,
`.grid-cell` in row 1 column 2, and `::after` in row 2 column 1.

See this [CodePen](https://codepen.io/daniel-tonon/pen/gBymVw) to see a visualization
of the issue. View the CodePen in both a modern browser and IE to see the difference.

Note that you can still create `::before` and `::after` elements as long as you manually
place them outside the explicit grid.

#### When changing the `grid gap` value, columns and rows must be re-declared

If you wish to change the size of a `grid-gap`, you will need to redeclare the grid columns and rows.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
}

/* This will *NOT* work in IE */
@media (max-width: 600px) {
  .grid {
    grid-gap: 20px;
  }
}

/* This will *NOT* work in IE */
.grid.small-gap {
  grid-gap: 20px;
}
```

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
}

/* This *WILL* work in IE */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
  }
}

/* This *WILL* work in IE */
.grid.small-gap {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}
```

## Debug

Run `npx autoprefixer --info` in your project directory to check
which browsers are selected and which properties will be prefixed:

```console
$ npx autoprefixer --info
Browsers:
  Edge: 16

These browsers account for 0.26% of all users globally

At-Rules:
  @viewport: ms

Selectors:
  ::placeholder: ms

Properties:
  appearance: webkit
  flow-from: ms
  flow-into: ms
  hyphens: ms
  overscroll-behavior: ms
  region-fragment: ms
  scroll-snap-coordinate: ms
  scroll-snap-destination: ms
  scroll-snap-points-x: ms
  scroll-snap-points-y: ms
  scroll-snap-type: ms
  text-size-adjust: ms
  text-spacing: ms
  user-select: ms
```

JS API is also available:

```js
console.log(autoprefixer().info())
```

## Security Contact

To report a security vulnerability, please use the [Tidelift security contact].
Tidelift will coordinate the fix and disclosure.

[Tidelift security contact]: https://tidelift.com/security

## For Enterprise

Available as part of the Tidelift Subscription.

The maintainers of `autoprefixer` and thousands of other packages are working
with Tidelift to deliver commercial support and maintenance for the open source
dependencies you use to build your applications. Save time, reduce risk,
and improve code health, while paying the maintainers of the exact dependencies
you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-autoprefixer?utm_source=npm-autoprefixer&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)


---

# eslint

**Repository:** https://github.com/eslint/eslint

[![npm version](https://img.shields.io/npm/v/eslint.svg)](https://www.npmjs.com/package/eslint)
[![Downloads](https://img.shields.io/npm/dm/eslint.svg)](https://www.npmjs.com/package/eslint)
[![Build Status](https://github.com/eslint/eslint/workflows/CI/badge.svg)](https://github.com/eslint/eslint/actions)
<br>
[![Open Collective Backers](https://img.shields.io/opencollective/backers/eslint)](https://opencollective.com/eslint)
[![Open Collective Sponsors](https://img.shields.io/opencollective/sponsors/eslint)](https://opencollective.com/eslint)

# ESLint

[Website](https://eslint.org) |
[Configure ESLint](https://eslint.org/docs/latest/use/configure) |
[Rules](https://eslint.org/docs/rules/) |
[Contribute to ESLint](https://eslint.org/docs/latest/contribute) |
[Report Bugs](https://eslint.org/docs/latest/contribute/report-bugs) |
[Code of Conduct](https://eslint.org/conduct) |
[X](https://x.com/geteslint) |
[Discord](https://eslint.org/chat) |
[Mastodon](https://fosstodon.org/@eslint) |
[Bluesky](https://bsky.app/profile/eslint.org)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

- ESLint uses [Espree](https://github.com/eslint/js/tree/main/packages/espree) for JavaScript parsing.
- ESLint uses an AST to evaluate patterns in code.
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Table of Contents

1. [Installation and Usage](#installation-and-usage)
1. [Configuration](#configuration)
1. [Version Support](#version-support)
1. [Code of Conduct](#code-of-conduct)
1. [Filing Issues](#filing-issues)
1. [Frequently Asked Questions](#frequently-asked-questions)
1. [Releases](#releases)
1. [Security Policy](#security-policy)
1. [Semantic Versioning Policy](#semantic-versioning-policy)
1. [ESM Dependencies](#esm-dependencies)
1. [License](#license)
1. [Team](#team)
1. [Sponsors](#sponsors)
1. [Technology Sponsors](#technology-sponsors) <!-- markdownlint-disable-line MD051 -->

## Installation and Usage

### Prerequisites

To use ESLint, you must have [Node.js](https://nodejs.org/) (`^20.19.0`, `^22.13.0`, or `>=24`) installed and built with SSL and ICU support. (If you are using an official Node.js distribution, both SSL and ICU are always built in.)

If you use ESLint's TypeScript type definitions, TypeScript 5.3 or later is required.

### npm Installation

You can install and configure ESLint using this command:

```shell
npm init @eslint/config@latest
```

After that, you can run ESLint on any file or directory like this:

```shell
npx eslint yourfile.js
```

### pnpm Installation

To use ESLint with pnpm, we recommend setting up a `.npmrc` file with at least the following settings:

```text
auto-install-peers=true
node-linker=hoisted
```

This ensures that pnpm installs dependencies in a way that is more compatible with npm and is less likely to produce errors.

## Configuration

You can configure rules in your `eslint.config.js` files as in this example:

```js
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
		rules: {
			"prefer-const": "warn",
			"no-constant-binary-expression": "error",
		},
	},
]);
```

The names `"prefer-const"` and `"no-constant-binary-expression"` are the names of [rules](https://eslint.org/docs/rules) in ESLint. The first value is the error level of the rule and can be one of these values:

- `"off"` or `0` - turn the rule off
- `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
- `"error"` or `2` - turn the rule on as an error (exit code will be 1)

The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the [configuration docs](https://eslint.org/docs/latest/use/configure)).

## Version Support

The ESLint team provides ongoing support for the current version and six months of limited support for the previous version. Limited support includes critical bug fixes, security issues, and compatibility issues only.

ESLint offers commercial support for both current and previous versions through our partners, [Tidelift][tidelift] and [HeroDevs][herodevs].

See [Version Support](https://eslint.org/version-support) for more details.

## Code of Conduct

ESLint adheres to the [OpenJS Foundation Code of Conduct](https://eslint.org/conduct).

## Filing Issues

Before filing an issue, please be sure to read the guidelines for what you're reporting:

- [Bug Report](https://eslint.org/docs/latest/contribute/report-bugs)
- [Propose a New Rule](https://eslint.org/docs/latest/contribute/propose-new-rule)
- [Proposing a Rule Change](https://eslint.org/docs/latest/contribute/propose-rule-change)
- [Request a Change](https://eslint.org/docs/latest/contribute/request-change)

## Frequently Asked Questions

### Does ESLint support JSX?

Yes, ESLint natively supports parsing JSX syntax (this must be enabled in [configuration](https://eslint.org/docs/latest/use/configure)). Please note that supporting JSX syntax _is not_ the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. We recommend using [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) if you are using React and want React semantics.

### Does Prettier replace ESLint?

No, ESLint and Prettier have different jobs: ESLint is a linter (looking for problematic patterns) and Prettier is a code formatter. Using both tools is common, refer to [Prettier's documentation](https://prettier.io/docs/en/install#eslint-and-other-linters) to learn how to configure them to work well with each other.

### What ECMAScript versions does ESLint support?

ESLint has full support for ECMAScript 3, 5, and every year from 2015 up until the most recent stage 4 specification (the default). You can set your desired ECMAScript syntax and other settings (like global variables) through [configuration](https://eslint.org/docs/latest/use/configure).

### What about experimental features?

ESLint's parser only officially supports the latest final ECMAScript standard. We will make changes to core rules in order to avoid crashes on stage 3 ECMAScript syntax proposals (as long as they are implemented using the correct experimental ESTree syntax). We may make changes to core rules to better work with language extensions (such as JSX, Flow, and TypeScript) on a case-by-case basis.

In other cases (including if rules need to warn on more or fewer cases due to new syntax, rather than just not crashing), we recommend you use other parsers and/or rule plugins. If you are using Babel, you can use [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) and [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin) to use any option available in Babel.

Once a language feature has been adopted into the ECMAScript standard (stage 4 according to the [TC39 process](https://tc39.github.io/process-document/)), we will accept issues and pull requests related to the new feature, subject to our [contributing guidelines](https://eslint.org/docs/latest/contribute). Until then, please use the appropriate parser and plugin(s) for your experimental feature.

### Which Node.js versions does ESLint support?

ESLint updates the supported Node.js versions with each major release of ESLint. At that time, ESLint's supported Node.js versions are updated to be:

1. The most recent maintenance release of Node.js
1. The lowest minor version of the Node.js LTS release that includes the features the ESLint team wants to use.
1. The Node.js Current release

ESLint is also expected to work with Node.js versions released after the Node.js Current release.

Refer to the [Quick Start Guide](https://eslint.org/docs/latest/use/getting-started#prerequisites) for the officially supported Node.js versions for a given ESLint release.

### Where to ask for help?

Open a [discussion](https://github.com/eslint/eslint/discussions) or stop by our [Discord server](https://eslint.org/chat).

### Why doesn't ESLint lock dependency versions?

Lock files like `package-lock.json` are helpful for deployed applications. They ensure that dependencies are consistent between environments and across deployments.

Packages like `eslint` that get published to the npm registry do not include lock files. `npm install eslint` as a user will respect version constraints in ESLint's `package.json`. ESLint and its dependencies will be included in the user's lock file if one exists, but ESLint's own lock file would not be used.

We intentionally don't lock dependency versions so that we have the latest compatible dependency versions in development and CI that our users get when installing ESLint in a project.

The Twilio blog has a [deeper dive](https://www.twilio.com/blog/lockfiles-nodejs) to learn more.

## Releases

We have scheduled releases every two weeks on Friday or Saturday. You can follow a [release issue](https://github.com/eslint/eslint/issues?q=is%3Aopen+is%3Aissue+label%3Arelease) for updates about the scheduling of any particular release.

## Security Policy

ESLint takes security seriously. We work hard to ensure that ESLint is safe for everyone and that security issues are addressed quickly and responsibly. Read the full [security policy](https://github.com/eslint/.github/blob/master/SECURITY.md).

## Semantic Versioning Policy

ESLint follows [semantic versioning](https://semver.org). However, due to the nature of ESLint as a code quality tool, it's not always clear when a minor or major version bump occurs. To help clarify this for everyone, we've defined the following semantic versioning policy for ESLint:

- Patch release (intended to not break your lint build)
    - A bug fix in a rule that results in ESLint reporting fewer linting errors.
    - A bug fix to the CLI or core (including formatters).
    - Improvements to documentation.
    - Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test coverage.
    - Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
- Minor release (might break your lint build)
    - A bug fix that results in ESLint reporting more linting errors (e.g., fixing false negatives in a core rule, or linting additional files that were previously incorrectly skipped).
    - A new rule is created.
    - A new option to an existing rule that does not result in ESLint reporting more linting errors by default.
    - A new addition to an existing rule to support a newly-added language feature (within the last 12 months) that will result in ESLint reporting more linting errors by default.
    - An existing rule is deprecated.
    - A new CLI capability is created.
    - New capabilities to the public API are added (new classes, new methods, new arguments to existing methods, etc.).
    - A new formatter is created.
    - `eslint:recommended` is updated and will result in strictly fewer linting errors (e.g., rule removals).
- Major release (likely to break your lint build)
    - `eslint:recommended` is updated and may result in new linting errors (e.g., rule additions, most rule option updates).
    - A new option to an existing rule that results in ESLint reporting more linting errors by default.
    - An existing formatter is removed.
    - Part of the public API is removed or changed in an incompatible way. The public API includes:
        - Rule schemas
        - Configuration schema
        - Command-line options
        - Node.js API
        - Rule, formatter, parser, plugin APIs

According to our policy, any minor update may report more linting errors than the previous release (ex: from a bug fix). As such, we recommend using the tilde (`~`) in `package.json` e.g. `"eslint": "~3.1.0"` to guarantee the results of your builds.

## ESM Dependencies

Since ESLint is a CommonJS package, there are restrictions on which ESM-only packages can be used as dependencies.

Packages that are controlled by the ESLint team and have no external dependencies can be safely loaded synchronously using [`require(esm)`](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require) and therefore used in any contexts.

For external packages, we don't use `require(esm)` because a package could add a top-level `await` and thus break ESLint. We can use an external ESM-only package only in case it is needed only in asynchronous code, in which case it can be loaded using dynamic `import()`.

These policies don't apply to packages intended for our own usage only, such as `eslint-config-eslint`.

## License

MIT License

Copyright OpenJS Foundation and other contributors, <www.openjsf.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Team

These folks keep the project moving and are resources for help.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->

<!--teamstart-->

### Technical Steering Committee (TSC)

The people who manage releases, review feature requests, and meet regularly to ensure ESLint is properly maintained.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/nzakas">
<img src="https://github.com/nzakas.png?s=75" width="75" height="75" alt="Nicholas C. Zakas's Avatar"><br />
Nicholas C. Zakas
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/fasttime">
<img src="https://github.com/fasttime.png?s=75" width="75" height="75" alt="Francesco Trotta's Avatar"><br />
Francesco Trotta
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/mdjermanovic">
<img src="https://github.com/mdjermanovic.png?s=75" width="75" height="75" alt="Milos Djermanovic's Avatar"><br />
Milos Djermanovic
</a>
</td></tr></tbody></table>

### Reviewers

The people who review and implement new features.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/aladdin-add">
<img src="https://github.com/aladdin-add.png?s=75" width="75" height="75" alt="唯然's Avatar"><br />
唯然
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/snitin315">
<img src="https://github.com/snitin315.png?s=75" width="75" height="75" alt="Nitin Kumar's Avatar"><br />
Nitin Kumar
</a>
</td></tr></tbody></table>

### Committers

The people who review and fix bugs and help triage issues.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/DMartens">
<img src="https://github.com/DMartens.png?s=75" width="75" height="75" alt="fnx's Avatar"><br />
fnx
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/JoshuaKGoldberg">
<img src="https://github.com/JoshuaKGoldberg.png?s=75" width="75" height="75" alt="Josh Goldberg ✨'s Avatar"><br />
Josh Goldberg ✨
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/SwetaTanwar">
<img src="https://github.com/SwetaTanwar.png?s=75" width="75" height="75" alt="Sweta Tanwar's Avatar"><br />
Sweta Tanwar
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/Tanujkanti4441">
<img src="https://github.com/Tanujkanti4441.png?s=75" width="75" height="75" alt="Tanuj Kanti's Avatar"><br />
Tanuj Kanti
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/lumirlumir">
<img src="https://github.com/lumirlumir.png?s=75" width="75" height="75" alt="lumir's Avatar"><br />
lumir
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/Pixel998">
<img src="https://github.com/Pixel998.png?s=75" width="75" height="75" alt="Pixel's Avatar"><br />
Pixel
</a>
</td></tr></tbody></table>

### Website Team

Team members who focus specifically on eslint.org

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/amareshsm">
<img src="https://github.com/amareshsm.png?s=75" width="75" height="75" alt="Amaresh  S M's Avatar"><br />
Amaresh  S M
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/harish-sethuraman">
<img src="https://github.com/harish-sethuraman.png?s=75" width="75" height="75" alt="Harish's Avatar"><br />
Harish
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/kecrily">
<img src="https://github.com/kecrily.png?s=75" width="75" height="75" alt="Percy Ma's Avatar"><br />
Percy Ma
</a>
</td></tr></tbody></table>

<!--teamend-->

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->

## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate)
to get your logo on our READMEs and [website](https://eslint.org/sponsors).

<h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://qlty.sh/"><img src="https://images.opencollective.com/qltysh/33d157d/logo.png" alt="Qlty Software" height="96"></a> <a href="https://shopify.engineering/"><img src="https://avatars.githubusercontent.com/u/8085" alt="Shopify" height="96"></a> <a href="https://www.coderabbit.ai/?utm_source=cr_org&utm_medium=github"><img src="https://avatars.githubusercontent.com/u/132028505" alt="CodeRabbit" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://vite.dev/"><img src="https://images.opencollective.com/vite/d472863/logo.png" alt="Vite" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/2d6c3b6/logo.png" alt="Liftoff" height="64"></a> <a href="https://stackblitz.com"><img src="https://avatars.githubusercontent.com/u/28635252" alt="StackBlitz" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://cybozu.co.jp/"><img src="https://images.opencollective.com/cybozu/933e46d/logo.png" alt="Cybozu" height="32"></a> <a href="https://opensource.sap.com"><img src="https://avatars.githubusercontent.com/u/2531208" alt="SAP" height="32"></a> <a href="https://www.crawljobs.com/"><img src="https://images.opencollective.com/crawljobs-poland/fa43a17/logo.png" alt="CrawlJobs" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340" alt="GitBook" height="32"></a> <a href="https://citadel-ai.com"><img src="https://avatars.githubusercontent.com/u/75781367" alt="Citadel AI" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>

<!--sponsorsend-->

[tidelift]: https://tidelift.com/funding/github/npm/eslint
[herodevs]: https://www.herodevs.com/support/eslint-nes?utm_source=ESLintWebsite&utm_medium=ESLintWebsite&utm_campaign=ESLintNES&utm_id=ESLintNES


---

# @rainbow-me/rainbowkit

**Repository:** https://github.com/rainbow-me/rainbowkit

<a href="https://rainbowkit.com">
  <img alt="rainbowkit" src="https://user-images.githubusercontent.com/372831/168174718-685980e0-391e-4621-94a1-29bf83979fa5.png" />
</a>

# RainbowKit &nbsp; [![Version](https://img.shields.io/npm/v/@rainbow-me/rainbowkit?colorA=1f2937&colorB=3b82f6&labelColor=1f2937)](https://www.npmjs.com/package/@rainbow-me/rainbowkit) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/rainbow-me/rainbowkit)

**The best way to connect a wallet 🌈**

RainbowKit is a [React](https://reactjs.org/) library that makes it easy to add wallet connection to your dapp.

- 🔥 Out-of-the-box wallet management
- ✅ Easily customizable
- 🦄 Built on top of [wagmi](https://wagmi.sh) and [viem](https://viem.sh)

## Quick start

You can scaffold a new RainbowKit + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org) app with one of the following commands, using your package manager of choice:

```bash
npm init @rainbow-me/rainbowkit@latest
# or
pnpm create @rainbow-me/rainbowkit@latest
# or
yarn create @rainbow-me/rainbowkit
```

## Documentation

For full documentation, visit [rainbowkit.com](https://rainbowkit.com).

### Try it out

You can use the CodeSandbox links below to try out RainbowKit:

- with [Create React App](https://codesandbox.io/p/sandbox/github/rainbow-me/rainbowkit/tree/main/examples/with-create-react-app)
- with [Next.js](https://codesandbox.io/p/sandbox/github/rainbow-me/rainbowkit/tree/main/examples/with-next)
- with [Next.js App Router](https://codesandbox.io/p/sandbox/github/rainbow-me/rainbowkit/tree/main/examples/with-next-app)
- with [Remix](https://codesandbox.io/p/sandbox/github/rainbow-me/rainbowkit/tree/main/examples/with-remix)
- with [Vite](https://codesandbox.io/p/sandbox/github/rainbow-me/rainbowkit/tree/main/examples/with-vite)
- with [React Router](https://codesandbox.io/p/sandbox/github/rainbow-me/rainbowkit/tree/main/examples/with-react-router)

## Examples

The following examples are provided in the [examples](./examples/) folder of this repo.

- `with-create-react-app`
- `with-next`
- `with-next-app`
- `with-next-custom-button`
- `with-next-mint-nft`
- `with-next-siwe-next-auth`
- `with-next-siwe-iron-session`
- `with-remix`
- `with-vite`
- `with-react-router`

### Running examples

To run an example locally, install dependencies.

```bash
pnpm install
```

Then go into an example directory, eg: `with-next`.

```bash
cd examples/with-next
```

Then run the dev script.

```bash
pnpm run dev
```

## Contributing

Please follow our [contributing guidelines](/.github/CONTRIBUTING.md).

## License

Licensed under the MIT License, Copyright © 2022-present [Rainbow](https://rainbow.me).

See [LICENSE](/LICENSE) for more information.


---

# viem

**Repository:** https://github.com/wevm/viem

src/README.md

---

# @tanstack/react-query

**Repository:** https://github.com/TanStack/query

<img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=be2d8a11-9712-4c1d-9963-580b2d4fb133" />

<div align="center">
  <img src="./media/header_query.png" alt="TanStack Query" />
</div>

<br />

<div align="center">
<a href="https://www.npmjs.com/package/@tanstack/query-core" target="_parent">
  <img alt="" src="https://img.shields.io/npm/dm/@tanstack/query-core.svg" alt="npm downloads" />
</a>
 <a href="https://github.com/TanStack/query/stargazers" target="_parent">
  <img alt="" src="https://img.shields.io/github/stars/TanStack/query.svg?style=social&label=Star" alt="GitHub stars" />
</a>
<a href="https://bundlejs.com/?q=%40tanstack%2Freact-query&config=%7B%22esbuild%22%3A%7B%22external%22%3A%5B%22react%22%2C%22react-dom%22%5D%7D%7D&badge=" target="_parent">
  <img alt="" src="https://deno.bundlejs.com/?q=@tanstack/react-query&config={%22esbuild%22:{%22external%22:[%22react%22,%22react-dom%22]}}&badge=detailed" alt="Bundle size" />
</a>
</div>

<div align="center">
<a href="#badge">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release">
  </a>
<a href="https://bestofjs.org/projects/tanstack-query"><img src="https://img.shields.io/endpoint?url=https://bestofjs-serverless.now.sh/api/project-badge?fullName=TanStack%2Fquery%26since=daily" alt="Best of JS" /></a>
  <a href="https://twitter.com/tan_stack"><img src="https://img.shields.io/twitter/follow/tan_stack.svg?style=social" alt="Follow @TanStack"/></a>
</div>

<div align="center">

### [Become a Sponsor!](https://github.com/sponsors/tannerlinsley/)

</div>

# TanStack Query

An async state management library built to simplify fetching, caching, synchronizing, and updating server state.

- Protocol‑agnostic fetching (REST, GraphQL, promises, etc.)
- Caching, refetching, pagination & infinite scroll
- Mutations, dependent queries & background updates
- Prefetching, cancellation & React Suspense support

### <a href="https://tanstack.com/query">Read the docs →</b></a>

## Get Involved

- We welcome issues and pull requests!
- Participate in [GitHub discussions](https://github.com/TanStack/query/discussions)
- Chat with the community on [Discord](https://discord.com/invite/WrRKjPJ)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions

## Partners

<table align="center">
  <tr>
    <td>
      <a href="https://www.coderabbit.ai/?via=tanstack&dub_id=aCcEEdAOqqutX6OS" >
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://tanstack.com/assets/coderabbit-dark-D643Zkrv.svg" />
          <source media="(prefers-color-scheme: light)" srcset="https://tanstack.com/assets/coderabbit-light-CIzGLYU_.svg" />
          <img src="https://tanstack.com/assets/coderabbit-light-CIzGLYU_.svg" height="40" alt="CodeRabbit" />
        </picture>
      </a>
    </td>
    <td>
      <a href="https://www.cloudflare.com?utm_source=tanstack">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://tanstack.com/assets/cloudflare-white-Co-Tyjbl.svg" />
          <source media="(prefers-color-scheme: light)" srcset="https://tanstack.com/assets/cloudflare-black-6Ojsn8yh.svg" />
          <img src="https://tanstack.com/assets/cloudflare-white-Co-Tyjbl.svg" height="60" alt="Cloudflare" />
        </picture>
      </a>
    </td>
  </tr>
</table>

<div align="center">
<img src="./media/partner_logo.svg" alt="Query & you?" height="65">
<p>
We're looking for TanStack Query Partners to join our mission! Partner with us to push the boundaries of TanStack Query and build amazing things together.
</p>
<a href="mailto:partners@tanstack.com?subject=TanStack Query Partnership"><b>LET'S CHAT</b></a>
</div>

</div>

## Explore the TanStack Ecosystem

- <a href="https://github.com/tanstack/config"><b>TanStack Config</b></a> – Tooling for JS/TS packages
- <a href="https://github.com/tanstack/db"><b>TanStack DB</b></a> – Reactive sync client store
- <a href="https://github.com/tanstack/devtools"><b>TanStack DevTools</b></a> – Unified devtools panel
- <a href="https://github.com/tanstack/form"><b>TanStack Form</b></a> – Type‑safe form state
- <a href="https://github.com/tanstack/pacer"><b>TanStack Pacer</b></a> – Debouncing, throttling, batching <br/>
- <a href="https://github.com/tanstack/query"><b>TanStack Query</b></a> – Async state & caching
- <a href="https://github.com/tanstack/ranger"><b>TanStack Ranger</b></a> – Range & slider primitives
- <a href="https://github.com/tanstack/router"><b>TanStack Router</b></a> – Type‑safe routing, caching & URL state
- <a href="https://github.com/tanstack/router"><b>TanStack Start</b></a> – Full‑stack SSR & streaming
- <a href="https://github.com/tanstack/store"><b>TanStack Store</b></a> – Reactive data store
- <a href="https://github.com/tanstack/table"><b>TanStack Table</b></a> – Headless datagrids
- <a href="https://github.com/tanstack/virtual"><b>TanStack Virtual</b></a> – Virtualized rendering

… and more at <a href="https://tanstack.com"><b>TanStack.com »</b></a>

<!-- Use the force, Luke -->


---

# framer-motion

**Repository:** https://github.com/motiondivision/motion

<h1 align="center"> <img width="35" height="35" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" /><br />Motion</h1>
<h3 align="center">
  An open source animation library<br />for JavaScript, React and Vue
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/motion" rel="noopener noreferrer nofollow" ><img src="https://img.shields.io/npm/v/motion?color=0368FF&label=version" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/motion" rel="noopener noreferrer nofollow" ><img src="https://img.shields.io/npm/dm/framer-motion?color=8D30FF&label=npm" alt="npm downloads per month"></a>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.jsdelivr.com/package/npm/motion"><img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hm/framer-motion?logo=jsdeliver&color=FF4FBA"></a>
  <img alt="NPM License" src="https://img.shields.io/npm/l/motion?color=FF2B6E">
</p>

```bash
# React / JavaScript
npm install motion

# Vue
npm install motion-v
```

## Table of Contents

1. [Why Motion?](#why-motion)
2. [🍦 Platforms](#-platforms)
3. [🎓 Examples](#-examples)
4. [⚡️ Motion+](#-motion)
5. [👩🏻‍⚖️ License](#-license)
6. [💎 Contribute](#-contribute)
7. [✨ Sponsors](#-sponsors)

## Why Motion?

-   **Simple API:** First-class React, JavaScript, and Vue packages.
-   **Hybrid engine:** Power of JavaScript combined with native browser APIs for 120fps, GPU-accelerated animations.
-   **Production-ready:** TypeScript, extensive test suite, tree-shakable, tiny footprint.
    **Batteries included:** Gestures, springs, layout transitions, scroll-linked effects, timelines.

## 🍦 Platforms

Motion is available for [React](https://motion.dev/docs/react), [JavaScript](https://motion.dev/docs/quick-start) and [Vue](https://motion.dev/docs/vue).

### React

```jsx
import { motion } from "motion/react"

function Component() {
    return <motion.div animate={{ x: 100 }} />
}
```

Get started with [Motion for React](https://motion.dev/docs/react).

**Note:** Framer Motion is now Motion. Import from `motion/react` instead of `framer-motion`.

### JS

```javascript
import { animate } from "motion"

animate("#box", { x: 100 })
```

Get started with [JavaScript](https://motion.dev/docs/quick-start).

### Vue

```html
<script>
    import { motion } from "motion-v"
</script>

<template> <motion.div :animate={{ x: 100 }} /> </template>
```

Get started with [Motion for Vue](https://motion.dev/docs/vue).

## 🎓 Examples & tutorials

Browse 330+ [official examples](https://motion.dev/examples), with copy-paste code that'll level-up your animations whether you're a beginner or an expert.

Over 100 examples come with a full step-by-step [tutorial](https://motion.dev/tutorials).

## ⚡️ Motion+

A one-time payment, lifetime-updates membership:

-   **330+ examples**
-   **100+ tutorials**
-   **Premium APIs** like [Cursor](https://motion.dev/docs/cursor) and [Ticker](https://motion.dev/docs/react-ticker)
-   **Transition editor** for Cursor and VS Code
-   **AI skills**
-   **Private Discord**
-   **Early access content**

[Get Motion+](https://motion.dev/plus)

## 👩🏻‍⚖️ License

-   Motion is MIT licensed.

## 💎 Contribute

-   Want to contribute to Motion? Our [contributing guide](https://github.com/motiondivision/motion/blob/master/CONTRIBUTING.md) has you covered.

## ✨ Sponsors

Motion is sustainable thanks to the kind support of its sponsors.

[Become a sponsor](https://motion.dev/sponsor)

### Partners

Motion powers the animations for all websites built with Framer, the web builder for creative pros. The Motion website itself is built on Framer, for its delightful canvas-based editing and powerful CMS features.

<a href="https://framer.link/FlnUbQY">
  <img alt="Framer" src="https://github.com/user-attachments/assets/22a79be7-672e-4336-bfb7-5d55d1deb917" width="250px" height="150px">
</a>

Motion drives the animations on the Cursor homepage, and is working with Cursor to bring powerful AI workflows to the Motion examples and docs.

<a href="https://cursor.com">
  <img alt="Cursor" src="https://github.com/user-attachments/assets/81c482d3-c2c2-4b35-bbcf-933b28d5b448" width="250px" height="150px" />
</a>

### Platinum

<a href="https://linear.app"><img alt="Linear" src="https://github.com/user-attachments/assets/f9ce44b4-af28-4770-bb6e-9515b474bfb2" width="250px" height="150px"></a> <a href="https://figma.com"><img alt="Figma" src="https://github.com/user-attachments/assets/1077d0ab-4305-4a1f-81c8-d5be8c4c6717" width="250px" height="150px"></a> <a href="https://sanity.io"><img alt="Sanity" src="https://github.com/user-attachments/assets/80134088-f456-483f-8edd-940593c120ce" width="250px" height="150px"></a> <a href="https://animations.dev"><img alt="Sanity" src="https://github.com/user-attachments/assets/7c5ab87d-c7d9-44b4-9c7e-f9e6a9f3ba3b" width="250px" height="150px"></a> <a href="https://clerk.com?utm_campaign=motion"><img alt="Clerk" src="https://github.com/user-attachments/assets/16789f85-eaf4-46fb-9961-b3e66d33afbc" width="250px" height="150px"></a>

### Gold

### Silver

<a href="https://liveblocks.io"><img alt="Liveblocks" src="https://github.com/user-attachments/assets/28eddbe5-1617-4e74-969d-2eb6fcd481af" width="150px" height="100px"></a> <a href="https://www.frontend.fyi/?utm_source=motion"><img alt="Frontend.fyi" src="https://github.com/user-attachments/assets/f16e3eb9-f0bd-4ad1-8049-f079a3d65c69" width="150px" height="100px"></a> <a href="https://firecrawl.dev"><img alt="Firecrawl" src="https://github.com/user-attachments/assets/2c44e7f4-5c2a-4714-9050-1570538665ff" width="150px" height="100px"></a> <a href="https://bolt.new"><img alt="Bolt.new" src="https://github.com/user-attachments/assets/7932d4b2-bb6c-422e-82b9-6ad78a7e3090" width="150px" height="100px"></a>

### Personal sponsors

-   [OlegWock](https://sinja.io)
-   [Lambert Weller](https://github.com/l-mbert)
-   [Jake LeBoeuf](https://jklb.wf)


---

# lucide-react

**Repository:** https://github.com/lucide-icons/lucide

<p align="center">
  <a href="https://github.com/lucide-icons/lucide#gh-light-mode-only">
    <img src="https://lucide.dev/lucide-logo-repo.svg#gh-light-mode-only" alt="Lucide - Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons." width="480">
  </a>
  <a href="https://github.com/lucide-icons/lucide#gh-dark-mode-only">
    <img src="https://lucide.dev/lucide-logo-repo-dark.svg#gh-dark-mode-only" alt="Lucide - Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons." width="480">
  </a>
</p>
<p align="center">
  <a href="https://github.com/lucide-icons/lucide/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-green" alt="license"></a>
  <a href="https://www.figma.com/community/plugin/939567362549682242/Lucide-Icons"><img src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white" alt="figma installs"></a>
  <a href="https://github.com/lucide-icons/lucide/actions/workflows/ci.yml"><img src="https://github.com/lucide-icons/lucide/actions/workflows/ci.yml/badge.svg" alt="build status"></a>
  <a href="https://discord.gg/EH6nSts"><img src="https://img.shields.io/discord/723074157486800936?label=chat&logo=discord&logoColor=%23ffffff&colorB=%237289DA" alt="discord chat"></a>
</p>
<p align="center">
  <a href="https://lucide.dev/icons/">Icons</a>
  ·
  <a href="https://lucide.dev/guide/">Guide</a>
  ·
  <a href="https://lucide.dev/packages">Packages</a>
  ·
  <a href="https://lucide.dev/license">License</a>
  ·
  <a href="https://lucide.dev/showcase">Showcase</a>
</p>

# Lucide

Lucide is an open-source icon library that provides 1600+ vector (svg) files for displaying icons and symbols in digital and non-digital projects. The library aims to make it easier for designers and developers to incorporate icons into their projects by providing several official [packages](https://lucide.dev/packages) to make it easier to use these icons in your project.

## Packages

| Logo | Package | Version | Downloads | Links |
| ---- | ------- | ------- | --------- | ----- |
| <img src="https://lucide.dev/framework-logos/js.svg" alt="JS logo" width="48"> | **`lucide`** | [![npm](https://img.shields.io/npm/v/lucide)](https://www.npmjs.com/package/lucide) | ![NPM Downloads](https://img.shields.io/npm/dw/lucide) | [Docs](https://lucide.dev/guide/lucide) · [Source](./packages/lucide) |
| <img src="https://lucide.dev/framework-logos/react.svg" alt="React logo" width="48"> | **`lucide-react`** | [![npm](https://img.shields.io/npm/v/lucide-react)](https://www.npmjs.com/package/lucide-react) | ![NPM Downloads](https://img.shields.io/npm/dw/lucide-react) | [Docs](https://lucide.dev/guide/react) · [Source](./packages/lucide-react) |
| <img src="https://lucide.dev/framework-logos/vue.svg" alt="Vue logo" width="48"> | **`@lucide/vue`** | [![npm](https://img.shields.io/npm/v/@lucide/vue)](https://www.npmjs.com/package/@lucide/vue) | ![NPM Downloads](https://img.shields.io/npm/dw/@lucide/vue) | [Docs](https://lucide.dev/guide/vue) · [Source](./packages/vue) |
| <img src="https://lucide.dev/framework-logos/svelte.svg" alt="Svelte logo" width="48"> | **`@lucide/svelte`** | [![npm](https://img.shields.io/npm/v/@lucide/svelte)](https://www.npmjs.com/package/@lucide/svelte) | ![NPM Downloads](https://img.shields.io/npm/dw/@lucide/svelte) | [Docs](https://lucide.dev/guide/svelte) · [Source](./packages/svelte) |
| <img src="https://lucide.dev/framework-logos/solid.svg" alt="Solid logo" width="48"> | **`lucide-solid`** | [![npm](https://img.shields.io/npm/v/lucide-solid)](https://www.npmjs.com/package/lucide-solid) | ![NPM Downloads](https://img.shields.io/npm/dw/lucide-solid) | [Docs](https://lucide.dev/guide/solid) · [Source](./packages/lucide-solid) |
| <img src="https://lucide.dev/framework-logos/preact.svg" alt="Preact logo" width="48"> | **`lucide-preact`** | [![npm](https://img.shields.io/npm/v/lucide-preact)](https://www.npmjs.com/package/lucide-preact) | ![NPM Downloads](https://img.shields.io/npm/dw/lucide-preact) | [Docs](https://lucide.dev/guide/preact) · [Source](./packages/lucide-preact) |
| <img src="https://lucide.dev/framework-logos/react-native.svg" alt="React Native logo" width="48"> | **`lucide-react-native`** | [![npm](https://img.shields.io/npm/v/lucide-react-native)](https://www.npmjs.com/package/lucide-react-native) | ![NPM Downloads](https://img.shields.io/npm/dw/lucide-react-native) | [Docs](https://lucide.dev/guide/react-native) · [Source](./packages/lucide-react-native) |
| <img src="https://lucide.dev/framework-logos/angular.svg" alt="Angular logo" width="48"> | **`@lucide/angular`** | [![npm](https://img.shields.io/npm/v/@lucide/angular)](https://www.npmjs.com/package/@lucide/angular) | ![NPM Downloads](https://img.shields.io/npm/dw/@lucide/angular) | [Docs](https://lucide.dev/guide/angular) · [Source](./packages/angular) |
| <img src="https://lucide.dev/framework-logos/astro.svg" alt="Astro logo" width="48"> | **`@lucide/astro`** | [![npm](https://img.shields.io/npm/v/@lucide/astro)](https://www.npmjs.com/package/@lucide/astro) | ![NPM Downloads](https://img.shields.io/npm/dw/@lucide/astro) | [Docs](https://lucide.dev/guide/astro) · [Source](./packages/astro) |
| <img src="https://lucide.dev/framework-logos/svg.svg" alt="SVG logo" width="48"> | **`lucide-static`** | [![npm](https://img.shields.io/npm/v/lucide-static)](https://www.npmjs.com/package/lucide-static) | ![NPM Downloads](https://img.shields.io/npm/dw/lucide-static) | [Docs](https://lucide.dev/guide/static) · [Source](./packages/lucide-static) |

### Figma

The Lucide Figma plugin.

Visit [Figma community page](https://www.figma.com/community/plugin/939567362549682242/Lucide-Icons) to install the plugin.

<img width="420" src="https://www.figma.com/community/plugin/939567362549682242/thumbnail" alt="Figma Lucide Cover">

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/lucide-icons/lucide/blob/main/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/lucide-icons/lucide/blob/main/README.md)

## About brand logos

Lucide **does not accept** brand logos, and we do not plan to add them in the future. This is due to a combination of **legal restrictions**, **design consistency concerns**, and **practical maintenance reasons**.

[Click here to read our official statement about brand logos in Lucide.](./BRAND_LOGOS_STATEMENT.md)

## Community

Join the community on our [Discord](https://discord.gg/EH6nSts) server!

## License

Lucide is totally free for commercial use and personal use, this software is licensed under the [ISC License](https://github.com/lucide-icons/lucide/blob/main/LICENSE).

## Credits

Thank you to all the people who contributed to Lucide!

<a href="https://github.com/lucide-icons/lucide/graphs/contributors">

<img src="https://opencollective.com/lucide-icons/contributors.svg?width=800" />
</a>

[//]: <> (Sponsors)

## Sponsors

<a href="https://vercel.com?utm_source=lucide&utm_campaign=oss">
  <img src="docs/public/vercel.svg" alt="Powered by Vercel" width="200" />
</a>

<a href="https://www.digitalocean.com/?refcode=b0877a2caebd&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="docs/public/digitalocean.svg" width="200" alt="DigitalOcean Referral Badge" /></a>

### Hero backers 🦸

<a href="https://zephyr-cloud.io/"><img src="docs/public/sponsors/zephyr-cloud.svg" width="180" alt="Zephyr Cloud – From idea to prod: fast micro-frontend delivery!" /></a>

### Awesome backers 🍺

<a href="https://github.com/pdfme/pdfme"><img src="docs/public/sponsors/pdfme.svg" width="180" alt="pdfme – Open-source PDF generation library built with TypeScript and React." /></a>
<a href="https://www.paxhistoria.co/"><img src="docs/public/sponsors/paxhistoria.svg?" width="180" alt="Pax Historia – An alternate history sandbox game" /></a>

### Backers ☕

<a href="https://www.fina.money/"><img src="docs/public/sponsors/fina-money.png" width="180" alt="Fina Money – Modular Finance Tracker" /></a>

### Other contributors 💸

You can find all our past and non-recurring financial contributors at [our Open Collective page](https://opencollective.com/lucide-icons).


---

# tailwind-merge

**Repository:** https://github.com/dcastil/tailwind-merge

<!-- This file is autogenerated. If you want to change this content, please do the changes in `./docs/README.md` instead. -->

<div align="center">
    <br />
    <a href="https://github.com/dcastil/tailwind-merge">
        <img src="https://github.com/dcastil/tailwind-merge/raw/v3.6.0/assets/logo.svg" alt="tailwind-merge" height="150px" />
    </a>
</div>

# tailwind-merge

Utility function to efficiently merge [Tailwind CSS](https://tailwindcss.com) classes in JS without style conflicts.

```ts
import { twMerge } from 'tailwind-merge'

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
```

- Supports Tailwind v4.0 up to v4.3 (if you use Tailwind v3, use [tailwind-merge v2.6.0](https://github.com/dcastil/tailwind-merge/tree/v2.6.0))
- Works in all modern browsers and maintained Node versions
- Fully typed
- [Check bundle size on Bundlephobia](https://bundlephobia.com/package/tailwind-merge)

## Get started

- [What is it for](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/what-is-it-for.md)
- [When and how to use it](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/when-and-how-to-use-it.md)
- [Features](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/features.md)
- [Limitations](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/limitations.md)
- [Configuration](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/configuration.md)
- [Recipes](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/recipes.md)
- [API reference](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/api-reference.md)
- [Writing plugins](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/writing-plugins.md)
- [Versioning](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/versioning.md)
- [Contributing](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/contributing.md)
- [Similar packages](https://github.com/dcastil/tailwind-merge/blob/v3.6.0/docs/similar-packages.md)

