/*
  
  GruntJS task runner for Egeo Base Framework

  author: Alejandro Rodriguez (alejandrorodriguez@stratio.com)
  version: 0.1


  Tasks

  grunt sass-watch................Launch the sass-dev task every time a Sass file
                                  changes
  grunt sass-dev..................Compiles the sass, the files and creates an
                                  expanded version of the CSS to check that all is ok. 
  grunt sass-dist.................Compiles the sass and creates the distribution 
                                  folder with all files needed.
  grunt default...................Launch the sass-dist task


  Plugins

  time-grunt......................Measure the time used in each subtask
  grunt-sass......................Sass compiler
  grunt-contrib-watch.............Watcher to automatize tasks if files changed
  grunt-contrib-clean.............Clean files and directories
  grunt-contrib-copy..............Copy files and directories


*/

'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  /*

    Configurable paths for the application

    Note that the bat command needs to be typed exactly as it will be executed, so
    it doesn't support the use of vars inside the command. Then, keep in mind that
    if you change the paths, you should check the bat command to ensure that all 
    will be executed as expected. Check in the "batch" subtask.

  */
  var appConfig = {
    src: 'src',               // Folder of the source
    dist: 'dist',             // Folder of the distributable deliverables.
    sass: 'egeo',             // Folder of the Sass deliverables inside dist.
    js: 'egeo',               // Folder of the Js deliverables inside dist.
    assets: 'assets',         // Folder where the assets will be included.
    npm: 'node_modules',      // Folder where the Npm modules will be included.
    vendors: 'vendors'        // Folder of the vendors not included in npm or bower
  };

  grunt.initConfig({
    // Set the paths to be available inside the grunt tasks
    app: appConfig,

    //Sass compile
    sass: {
      dev: {
        options: {
          sourceMap: 'auto',  // The sourcemaps are a way to map the compiled and
                              // minified files to let the browser to know when
                              // inspect code the original file and line we are
                              // inspecting
          outputStyle: 'expanded'   // Minify the Sass as much as possible
        },
        files: {
            '<%= app.dist %>/egeo.ui.base.min.css': '<%= app.src %>/index.scss'
        }
      },
      dist: {
        options: {
          sourceMap: 'auto',  // The sourcemaps are a way to map the compiled and
                              // minified files to let the browser to know when
                              // inspect code the original file and line we are
                              // inspecting
          outputStyle: 'compressed' // Minify the Sass as much as possible
        },
        files: {
          '<%= app.dist %>/egeo.ui.base.min.css': '<%= app.src %>/index.scss'
        }
      }
    },

    /* 

      Watch task to automatically refresh the documentation when any Sass file 
      changes in any subfolder.

        Warning: Sometimes it fails on Windows due to the antivirus is checking 
        the files and are blocked. So it is needed create another change in a 
        Sass file to the watch repeat the task and write the compiled 
        documentation properly.

    */
    watch: {
      sass: {
        files: ['<%= app.src %>/*.scss', '<%= app.src %>/**/*.scss'], // Files to watch
        tasks: ['sass-dev'],                                          // Taks to execute when changes detected
        options: {
          spawn: true   // If the spawn property is established to false, the 
                        // system is faster but also  more prone to fail due to 
                        // it opens a second thread to treat the files and can 
                        // result in the warning explained above.
        },
      },
    },

    /* It cleans the files and folders */
    clean: {
      options: {
        force: true
      },
      dist: 'dist'
    },

    /* It copies the vendors needed to the documentation be viewed properly. */
    copy: {
      dist: {
        files: [
          // Includes font files within path and its sub-directories
          {expand: true, cwd: '<%= app.src %>/<%= app.vendors %>/', src: ['fonts/**'], dest: '<%= app.dist %>/<%= app.assets %>'},
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.scss', '*.scss', '!fonts'], dest: '<%= app.dist %>/<%= app.sass %>'},
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.html', '*.html'], dest: '<%= app.dist %>/<%= app.js %>'},
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.js', '*.js'], dest: '<%= app.dist %>/<%= app.js %>'},
          {expand: true, cwd: '<%= app.npm %>', src: ['angular-animate/*.js', 'angular/*.js', 'angular/*.js'], dest: '<%= app.dist %>/vendors'},
          {expand: true, cwd: '<%= app.npm %>', src: ['angular-sanitize/*.js', 'angular/*.js', 'angular/*.js'], dest: '<%= app.dist %>/vendors'}
        ],
      },
    },
  });

  // Load the npm tasks needed
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  /*

    Define the tasks

  */
  grunt.registerTask('sass-watch', [
    'watch:sass'  // Launch the doc task every time a Sass file changes
  ]);

  grunt.registerTask('sass-dev', [
    'clean',      // Clean the directory to ensure all files are generated 
                  // from scratch
    'sass:dev',   // Generate custom CSS to customize the documentation
    'copy'        // Copy files needed
  ]);

  grunt.registerTask('sass-dist', [
    'clean',      // Clean the directory to ensure all files are generated 
                  // from scratch
    'sass:dist',  // Generate custom CSS to customize the documentation
    'copy'        // Copy files needed
  ]);

  grunt.registerTask('default', [
    'sass-dist'   // Compile Sass
  ]);
};
