# Egeo CSS Base Framework

Hi! This is the repository of the Egeo Base Framework. The framework is divided in two areas mainly: *principles and methodology* and *code and components*. The first one is related to the principles and methodologies used to built the framework and the components which forms the Egeo UI Kit. This principles and methodologies can be used to build apps that uses the UI Kit but it is not mandatory. They are defined and explained in detail in the proper section of the Egeo UI Documentation.

## How to install Egeo as a dependency of your project

If you work with Npm or Bower, the only thing to do is to configure the Github project of Egeo as a git repository as it shown below:

### With Npm

Include the Egeo Base Framework dependency in the *dependencies* section of your package.json file:
```
  "dependencies": {
    ...
    "egeo.ui.base": "git://github.com/Stratio/egeo.ui.base.git#v0.2-rc.0",
    ...
  }
```
And launch `npm install`. You can also update the library using `npm update egeo.ui.base`.

### With Bower

Include the Egeo Base Framework dependency in the *dependencies* section of your bower.json file:
```
  "dependencies": {
    ...
    "egeo.ui.base": "git://github.com/Stratio/egeo.ui.base.git#v0.2-rc.0",
    ...
  }
```
And launch `bower install`. You can also update the library using `bower update egeo.ui.base`.

## How to install Egeo locally

Download the project to any folder via `git clone` or using the ZIP button and launch `npm install` to install all dependencies needed to build the website ([NodeJS](https://nodejs.org) and [Git client](https://git-scm.com/download/) are required to be installed first to can use these commands on your console).

```
git clone https://github.com/Stratio/egeo.ui.base.git

npm install
```

## How to use

The Base Framework is a set of Sass libraries designed to be included in other projects and not as a project itself so has no sense to build the final CSS. The only reason to do it here is to ensure that the project compiles and there are no errors.

There are three tasks we can launch from the command line to work with the project.

### dist

```
npm run-script dist
```

This command compiles the framework and creates a distribution with all files needed. The distribution will be set in the *dist* folder and will include the whole assets needed as well as the Sass files to be imported in the final projects and a minified version of the CSS generated.

### dev

```
npm run-script dev
```

This command works almost equal the dist one except because the CSS file is created in an expanded format to check easily if errors occurred.

### watch

```
npm run-script watch
```

This command creates a watcher that launches the sass-dev task every time a Sass file changes.

### How to test

The Kit includes a command to test the Sass code. Egeo uses [Sass-True](https://github.com/oddbird/true) by [Miriam Eric Suzanne](http://www.miriamsuzanne.com/) and [Mocha](https://mochajs.org/) as unit testing framework.

The command below will launch the suite of tests:

```
npm run-script test
```

This command launches the suit of unit tests to test the Sass code.
