# Introduction

Welcome to the Stratio UI official documentation. In this document you will find all the information needed to begin build apps following the Stratio Visual Guidelines and the UX Guidelines, Patterns and Best Practices with ease.

## About the use of tags

Along the whole documentation you will find different tags with a specific meaning you should know. You can see in detail the meaning of each below:

| tag           | meaning  |
|-------------------|-----------|
| <span class="tag tag--untested">untested</span> | The component, directive, mixin or function related to is untested.       |
| <span class="tag tag--tested">tested</span> | The component, directive, mixin or function related to is full covered by tests.       |
| <span class="tag tag--warn">partially tested</span> | The component, directive, mixin or function related to is partially tested definitively for some reason.       |
| <span class="tag tag--danger">in progress</span> | The component, directive, mixin or function related to is a work in progress. It is not recommended to work with.       |
| <span class="tag tag--danger">alpha version</span> | The component, directive, mixin or function related to is developed in an alpha version. It is not recommended to work with in production but could be used for testing purposes and to find bugs.       |
| <span class="tag tag--warn">beta version</span> | The component, directive, mixin or function related to is developed in a beta version. It could be used in production but could has some minor changes in the final version. A piece of code should be tested to get its final version.         |
| <span class="tag tag--danger">internal</span> | The component, directive, mixin or function related to is used internally by other components of Egeo.       |
| <span class="tag tag--default">!default</span> | Related to a variables declared as default in Sass.       |
| <span class="tag tag--type">@mixin</span> | Related to a Sass mixin.       |
| <span class="tag tag--type">@function</span> | Related to a Sass function.       |
| <span class="tag tag--type">@placeholder</span> | Related to a Sass placeholder.       |
| <span class="tag tag--type">@class</span> | Related to a CSS class.       |
| <span class="tag tag--type">@directive</span> | Related to an AngularJS directive.       |
| <span class="tag tag--type">@provider</span> | Related to an AngularJS provider.       |
| <span class="tag tag--type">@service</span> | Related to an AngularJS service.       |
| <span class="tag tag--type">@factory</span> | Related to an AngularJS factory.       |
| <span class="tag tag--not-supported">not supported</span> | The element or functionality is not supported.       |

## Minimum Requirements

For now, these are the browsers officialy supported by Egeo:

| browser 			| versions 	|
|-------------------|-----------|
| Internet Explorer	| 10+		|
| Google Chrome		| Latest	|
| Mozilla Firefox	| Latest	|
| Safari			| Latest	|

## Begin to work with Egeo

Egeo is built around the modularization principle so depending of the items you need to work with, you would need to load different packages and load differente archives in your code.

The main of all of them is the Egeo Base Framework which is the foundation of the rest of the components. This package is always mandatory to be included (and, at this moment, is the only one).

Install the Base Framework to begin to work with Egeo following the installation instructions included in [its Github repository](https://github.com/Stratio/egeo.ui.base).

### Example

Create a simple AngularJS app with the two dependencies we currently have in the framework; the EgeoConfigProvider to config the path where Egeo files are deployed and the egeo-c-button directive. Change the `public/js/egeo` by your own path in the line 11:

```
(function() {
    'use strict';

    angular
        .module('myApp', [
            'egeo.config',
            'egeo.buttons'
        ])

        .config(function(EgeoConfigProvider){
            EgeoConfigProvider.setEgeoPath('public/js/egeo');
        });
})();
```
Create a button in the HTML of the project:
```
<body>
	...
   <egeo-c-button type="submit" modifier="main-1" label="AngularJS Button: Click to test ({{count}})" data-ng-click="count = count + 1"></egeo-c-button>
	...
</body>
```

## Technologies used

Egeo is developed under [node-sass 3.3](https://github.com/sass/node-sass) to avoid dependencies from Ruby and official Sass ruby gem. Node-sass is an official port to C developed by the team of Sass so it is fully stable and reliable. The Sass code is tested using the [True framework](http://www.ericsuzanne.com/true/) created by [Eric Suzanne](https://twitter.com/ericmsuzanne).

At the Javascript side, Egeo uses [AngularJS 1.4.7](https://angularjs.org/) and is tested with [Jasmine](http://jasmine.github.io/) as a BDD testing framework and [Karma](http://karma-runner.github.io/0.13/index.html) as the task runner.

## Methodologies and principles

Egeo follows a set of principles and methodologies that guide the development of the library. Below, you can see a reference to this methods and more information about each.

Egeo also includes components in AngularJS but the CSS is fully decoupled, so it's perfectly possible migrate this components to Backbone, Ember or Vanilla JS or even use only the CSS framework directly.

Some talks and resources you can see to learn more about the principles which guides the development are:
* [10 Principles for Effective Front-end Development](https://www.youtube.com/watch?v=8adsZeMQjGQ) (by [Harry Roberts](http://www.csswizardry.com))
* [CSS for Software Engineers for CSS Developers](https://vimeo.com/140641366) (by [Harry Roberts](http://www.csswizardry.com))
* [Architecting Scalable CSS](https://www.youtube.com/watch?v=1dJRQuMIFik) (by [Harry Roberts](http://www.csswizardry.com))
* [4½ Methods for Theming in (S)CSS](https://www.youtube.com/watch?v=oy1IUEwosL0) (by [Harry Roberts](http://www.csswizardry.com))
* [Adaptation and Components](https://www.youtube.com/watch?v=m0oMHG6ZXvo&index=17&list=WL) (by [Nicolas Gallagher](http://nicolasgallagher.com))
* [Adaptable Systems and UI Components](https://www.youtube.com/watch?v=3_xYQsA-GNk) (by [Nicolas Gallagher](http://nicolasgallagher.com))
* [Thinking Beyond Scalable CSS](https://www.youtube.com/watch?v=L8w3v9m6G04) (by [Nicolas Gallagher](http://nicolasgallagher.com))
* [Style Guide Driven Development](https://www.youtube.com/watch?v=ldW7zVmqu5g) (by [Nicole Sullivan](http://www.stubbornella.org))
* [Object Oriented CSS for high performance websites and applications](https://www.youtube.com/watch?v=BjAdHyA9nIY) (by [Nicole Sullivan](http://www.stubbornella.org))

### Namespace protected

In order to avoid clashes with your own code, all of Egeo mixins and variables are namespaced with egeo-, for example: `$egeo-colors`. It is possible but not recommended change the settings variable `$egeo-namespace`. `$egeo-namespace` has the default value `egeo-` and this namespace will be added as a prefix in all classes and placeholders generated by Egeo. However, Sass doesn't allow to use this namespace to include it dinamically in the variables and mixins so it is hardcoded in these cases. This means that if you modify the `$egeo-namespace` value, the classes and placeholders will change this prefix but not the variables and mixins. It's up to you but keep it in mind.

### BEM

BEM is a naming system created by [Yandex](https://www.yandex.com) that ensures that your specificity will be kept as low as possible along the whole project. This methodology provides a powerful way to ensure consistency and at same time avoid one of the biggest problems the developers have to deal with in every CSS project.

Learn more about BEM:
* [Official BEM site](https://en.bem.info/method/). Keep in mind that BEM is a big framework that includes its own components. We will user only the naming system for Egeo.
* [MindBEMding](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). One of the best articles about BEM, easy to understand in a quick read.

### BEM Extended for Sass variables

The BEM Extended method to apply naming in Sass variables helps the developers to know what BEM class is affected by the variable when it changes.

Learn more about BEM Extended
* More info soon.

### CSS Namespaces

CSS Namespaces is a technique created by [Harry Roberts](https://www.csswizardry.com) to do the class name meaningful, adding a prefix that represents part of the functionality.

Learn more about CSS Namespaces:
* [More transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

### OOCSS

Object Oriented CSS is a methodology created by [Nicolle Sullivan](http://stubbornella.org/) to create a CSS architecture scalable following the principles of traditional Object Oriented programming languages. Basically, OOCSS creates objects based in visual patterns that can be abstracted into an independent snippets. These snippets can be created using only CSS or also HTML and Javascript as our owns.

Learn more about OOCSS:
* [Object Oriented CSS Official site](https://github.com/stubbornella/oocss/wiki)
* [An introduction to Object Oriented CSS](http://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
* [Using Object-Oriented CSS with Sass](http://thesassway.com/intermediate/using-object-oriented-css-with-sass)

### DRY

> Every piece of knowledge must have a single unambiguous, authoritative representation within a system.

Every discrete piece of information should exist only once. You shouldn't need to make the same change several times. Repetition is extra overhead: more to maintain, to go wrong. Increases cognitive overhead and contributes to bloat.

DRY is a principle that is based in two things.

1. Less actual code, meaning smaller file sizes, less for the user to have to download, more efficient code, etc.
2. Less to have to maintain; not repeating yourself means that you can make fewer changes to your codebase.

When this principle is included in Sass, is possible have DRYSass but not DRYCSS or viceversa. In our case, the first directive is keep our Sass as DRY as possible and, in second term, the CSS due to the performance is subject to the maintainability. So, the idea is not repeat code twice in our Sass code.

Learn more about DRY:
* [Writing DRYer vanilla CSS](http://csswizardry.com/2013/07/writing-dryer-vanilla-css/)
* [DRY CSS Principles](http://vanseodesign.com/css/dry-principles/)
* [Don't Repeat Yourself in Wikipedia](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

### ITCSS

Inverted Triangle CSS is a methodology created by [Harry Roberts](https://www.csswizardry.com) to have a maintainable and scalable css architecture in large projects. All the CSS in Egeo is organized following the ITCSS architecture with a couple of modifications. We change the layer *generic* by *vendors* and remove the layer *themes* due to we will use a theming system based in Sass variables and a scenario with different themes is not contemplated.

Learn more about ITCSS:
* [Manage large-scale web projects with new CSS architecture ITCSS](http://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731)
* [Managing CSS Projects with ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4) (Youtube video)

### Single source of truth

> In Information Systems design and theory Single Source Of Truth (SSOT) refers to the practice of structuring information models and associated schemata such that every data element is stored exactly once (e.g., in no more than a single row of a single table). Any possible linkages to this data element (possibly in other areas of the relational schema or even in distant federated databases) are by reference only. Because all other locations of the data just refer back to the primary "source of truth" location, updates to the data element in the primary location propagate to the entire system without the possibility of a duplicate value somewhere being forgotten.

This is the more philisophical principle behind DRY. Key data should only exist once in source to increases confidence, prevent anomalies and disparity, make changes simpler and keep the house in order. But...

Be DRY in source, not in production. DRY is not about avoiding repetition, It's about avoiding repeating yourself. Automation of repetition is fine.

In our Sass, this means that the values of our variables will be defined only once and when a developer modify them in any sense, he or she will have the return exactly as expected. Also avoid the repetition of code patterns abstracting them in functions or mixins that can be reused again and again.

*Example*

*If you manually type a declaration 50 times in a project, you are repeating yourself: this is not DRY. If you can generate that declaration 50 times without having to manually repeat it, this is DRY: you are generating repetition without actually repeating yourself. This is quite subtle but important distinction to be aware of.*

**Note**: Don't DRY if it's repeated coincidentally. DRY should be applicated over a solid and recognizable pattern. If you apply it in coincidences then you will sure create confusion.

Learn more about the Single source of truth:
* [Single source of truth in Wikipedia](https://en.wikipedia.org/wiki/Single_Source_of_Truth)

### The Single Responsibility Principle

> In object-oriented programming, the single responsibility principle states that every class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility.

AKA: Do one thing, one thing only, and one thing well. Break bigger monoliths down into individual concerns. It is easy to reason about and provides higher composability.

Learn more about the single responsibility principle:
* [The single responsibility principle in Wikipedia](https://en.wikipedia.org/wiki/Single_responsibility_principle)

### The separation of concerns

> In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program. A concern can be as general as the details of the hardware the code is being optimized for, or as specific as the name of a class to instantiate. A program that embodies SoC well is called a modular program. Modularity, and hence separation of concerns, is achieved by encapsulating information inside a section of code that has a well-defined interface. Encapsulation is a means of information hiding. Layered designs in information systems are another embodiment of separation of concerns (e.g., presentation layer, business logic layer, data access layer, persistence layer).

Each thing responsible for itself and nothing more. Reason about and study features in isolation.

In CSS this means:
* Only bind CSS onto CSS-based classes only
* Don't write DOM-like selectors
* Don't bind CSS onto data-* attributes
* Don't bind JS onto CSS classes

This also means avoid to use Javascript or AngularJS methods to apply style info like hide/show. It is the same effort applying a class with ng-class that using ng-if to hide/show but the with ng-class the separation of concerns is full and clear.

Learn more about the separation of concerns:
* [The separation of concerns in Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns)

### Immutability

> In object-oriented and functional programming, an immutable object is an object whose state cannot be modified after it is created. This is in contrast to a mutable object, which can be modified after it is created. In some cases, an object is considered immutable even if some internally used attributes change but the object's state appears to be unchanging from an external point of view. For example, an object that uses memoization to cache the results of expensive computations could still be considered an immutable object.

There are a set of items in our code that should be immutable because the modifications could affect to a lot of things and cause unexpected effects. In CSS is the case of objects (mark as o- namespace), utils (u-) and hacks (_). It is also the case of abstract parent components like c-component.

Keep safe the immutability of this objects provides confidence, makes things predictable, helps debugging, reduces cognitive overhead and removes caveats, states and conditions. This condition includes the changes due to media queries. Take a look at this example:

```
.col-6 {
	width: 50%;
} 

@media screen and (max-width: 480px) {
	.col-6 {
		float: none;
		width: 100%; //This has mutated!!!!
	}
}
```

In our sample, .col-6 has one input, but two potential outputs. Outcome depends on how/when you observe it. Mutable state leads to confusion and unexpected outcomes, particularly common in CSS. Take it a look now to this example.


```
.col-6 {
	width: 50%;
} 

@media screen and (max-width: 480px) {
	.col-6@sm {
		float: none;
		width: 100%; //This has mutated!!!!
	}
}
```

Now, we are using a different class that, although, helps the user to know what will be the behavior depending of the media query. So our HTML code looks like this:

```
<div class="col-6 col-6@sm">
	...
</div>
```

Now, we are applying a behavior in general conditions, and other one specifically when a media query is applicable. The use of @ between the name of the column and the identifier of a media query is a convention.

However, frequently we need to change this immutability in some way. This is perfectly possible but in a control way. Parts of our codebase should be able to mutate other parts but we need to take under control the unpredictable outcomes and unexpected side effects so, in CSS, we will use commonly the utils library (with the u- namespace) to apply !important flag in the only case that should !important be used.

```
.sub-content {
	text-align: left;
}

.u-text-center {
	text-align: center !important;
}

<section class="sub-content">
	<h2 class="u-text-center">...</h2>
</section>
```

Summary:
* Don't have several states of the same thing
* Use modifiers or responsive suffixes
* Use !important to force immutability

Learn more about immutability:
* [Immutability in Wikipedia](https://en.wikipedia.org/wiki/Immutable_object)

### Cyclomatic Complexity

> Cyclomatic complexity is a software metric (measurement), used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. Cyclomatic complexity is computed using the control flow graph of the program: the nodes of the graph correspond to indivisible groups of commands of a program, and a directed edge connects two nodes if the second command might be executed immediately after the first command. Cyclomatic complexity may also be applied to individual functions, modules, methods or classes within a program.

Basically just the number of IFs/ELSEs. It is a form of static analysis counting the number of paths through a program, the amount of potential outcomes given certain conditions. Higher complexity is bad, simpler is always better.

Every part of a CSS selector is an IF condition for the render engine of a browser.

```
div.main h1 {
	...
}
```

It's the same of

```
@if div {
	@if main {
		@if h1 {
			...
		}
	}
}
```

Deeply nested or qualified selectors are bad. They carry a higher Cyclomatic Complexity. Reduce it by using much shorter selectors, get straight to the point, remove as many conditions and caveats as possible and start with the correct subject. BEM is the answer to solve this problem.

Learn more about Cyclomatic Complexity:
* [Cyclomatic Complexity in Wikipedia](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

### The Open/Closed principle

> Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

* Never change anything at its source
* Avoid the Domino Effect
* Doing so causes visual regressions
* Hard to keep track of the knock-on effects
* Always make changes via extension
* Possibly the most useful principle for dealing with other people's code

> Once completed, the implementation of a class could only be modified to correct errors; new or changed features would require that a different class be created. That class could reuse from the original class through inheritance.

Again, BEM comes to us to help with this principle. Below, we can see a bad case, created with non-BEM methodology. The code is modifying the .btn base class when is inside .promo. Not only we are working with specificity issues, but the HTML coder could find an unexpected effect when he puts the button inside the promo. He should know the code in a perfect way to know all possible outcomes of a class. A CSS hell.

```
.btn {
	...
	padding: 1em 2em;
}

.promo .btn {
	padding: 2em 4em;
}
```

With BEM, a new class is generated with the new effect and the HTML coder can perfectly manage when the button will be larger or not, in every situation.

```
.btn {
	...
	padding: 1em 2em;
}

.btn--large {
	padding: 2em 4em;
}
```

This is a safe way to make changes, everything gets opted into explicitly, prevents changes from happening one-sidedly due to the developer has to add the class into the markup as well. A second layer of safety is that changes can't be actioned from one place alone. It is a safe way of working with legacy.

Learn more about Open/Closed principle:
* [Open/Closed principle in Wikipedia](https://en.wikipedia.org/wiki/Open/closed_principle)

### Orthogonality

> In computer programming, orthogonality in a programming language means that a relatively small set of primitive constructs can be combined in a relatively small number of ways to build the control and data structures of the language.

Some benefits of apply orthogonality are:
* Reduces interdependence
* Improves composability
* Separate concerns
* Reduce collisions
* Removes side effects

The idea is that the classes can be combined in any way in the HTML, doesn't case about the order of nesting. The same is applied in the imports in the Sass. Obviously, this can't be applied 100% due to inheritance and addition but should be applied as much as possible. The implication is that the components, objects, etc. don't rely on one another. It is the hallmark of a flexible and modular system.

Learn more about Orthogonality:
* [Orthogonality in Wikipedia](https://en.wikipedia.org/wiki/Orthogonality_(programming))

### The Moustache Principle

> Just because you can, it doesn't mean that you should.
