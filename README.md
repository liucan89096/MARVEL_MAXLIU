# MARVEL's Comics info Source

[![Greenkeeper badge](https://badges.greenkeeper.io/nerdmax/MARVEL_MAXLIU.svg)](https://greenkeeper.io/)

This repository holds the source code of Max LIU's answer for Premonition_IO's test. The whole project is built with angular2 and bootstrap framework.

This is an interface that can display the comics' information by fetching data from MARVEL's API (http://developer.marvel.com).

It includes - Search - Sorting - Pagination - Thumbnails features and it is fully responsive.

Any suggestions are welcomed!

## Frontend Coding Task requirement

Using the following API (http://developer.marvel.com) create a simple interface for *ONE* of the following subsets:
 - Characters
 - Comics
 - Stories
 - Creaters
 - Stories

Please use a JS framework of your choosing (eg: Ember.js, Angular2, React, Angular1) and if required any CSS frameworks or libraries.

Features are up to you to decide, though examples include:
- Search
- Sorting
- Pagination
- Thumbnails

*Minimum Requirements:*
  - A ReadMe

*Submission:* Please send us a link to a github or bitbucket repository with the code.

*Note:* This is not a pass/fail test. We would just like to get a sense of how you write code and solve problems. If you have any questions, please don't hesitate to ask.

## Installation guid

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`** by running `node -v` and `npm -v` in a terminal/console window. 
Older versions produce errors.

[nvm](https://github.com/creationix/nvm) are recommended for managing multiple versions of node and npm.

### Create a new project based on this repository

Clone this repo into new project folder (e.g., `MARVEL_MAXLIU`).
```bash
git clone  git@github.com:liucan89096/MARVEL_MAXLIU.git  MARVEL_MAXLIU
cd MARVEL_MAXLIU
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.
