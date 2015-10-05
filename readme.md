# Egeo UI Base

Hi! This is the repository of the Egeo Base Framework. The framework is divided in two areas mainly: *principles and methodology* and *code and components*. The first one is related to the principles and methodologies used to built the framework and the components which forms the Egeo UI Kit. This principles and methodologies can be used to build apps that uses the UI Kit but it is not mandatory. They are defined and explained in detail in the proper section of the Egeo UI Documentation.

## How to install

Download the project to any folder via `git clone` or using the ZIP button and launch `npm install` to install all dependencies needed to build the website ([NodeJS](https://nodejs.org) and [Git client](https://git-scm.com/download/) are required to be installed first to can use these commands on your console).

```
git clone https://github.com/Stratio/egeo.ui.documentation.git

npm install
```

## How to use

The Base Framework is a set of Sass libraries designed to be included in other projects and not as a project itself so has no sense to build the final CSS. The only reason to do it here is to ensure that the project compiles and there are no errors.

There are three tasks we can launch from the command line to work with the project.

### sass-dist

```
npm run-script sass-dist
```

This command compiles the framework and creates a distribution with all files needed. The distribution will be set in the *dist* folder and will include the whole assets needed as well as the Sass files to be imported in the final projects and a minified version of the CSS generated.

### sass-dev

```
npm run-script sass-dev
```

This command works almost equal the sass-dist one except because the CSS file is created in an expanded format to check easily if errors occurred.

### sass-watch

```
npm run-script sass-watch
```

This command creates a watcher that launches the sass-dev task every time a Sass file changes.
