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
    styleguide: 'styleguide', // Warning: This name is used to reference files 
    dist: 'dist',             // Folder of the distributable deliverables.
    sass: 'egeo',             // Folder of the Sass deliverables inside dist.
    docs: 'docs',             // Folder of the Docs deliverables inside dist.
    js: 'egeo',               // Folder of the Js deliverables inside dist.
    assets: 'assets',         // Folder where the assets will be included.
    upload: '\\\\azufre\\guide\\web\\ui-base',             // Folder of the distributable deliverables.
    kssTemplate: 'node_modules/egeo.website.template/dist/',  // Folder of the KSS Template
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

    /*

      The batch task executes a command like we were using the command line directly.
      It launches the kss-node compiler.

        NOTE: Only tested in Windows 8.1. Probably we will must adapt it to work
              under unix systems.

               --source src/components --source src/managers --source src/objects --source src/settings --source src/themes --source src/tools --source src/utils --source src/vendors

    */
    batch : {
      doc: {
        options: {
          cmd: function(f) {
            return '.\\node_modules\\.bin\\kss-node --source src --destination dist/docs --template node_modules/egeo.website.template/dist/kss-template --homepage readme.md --css public/styleguide.css';
          }
        },
        files: [{
          cwd: 'src',
          src: ['*.scss', '!index.scss', '!_rules.scss', '!_vars.scss', '!<%= app.styleguide %>.scss']
        }]
      }
    },

    /* It cleans the files and folders */
    clean: {
      options: {
        force: true
      },
      dist: 'dist',
      styleguide: ['<%= app.dist %>/<%= app.docs %>'],
      upload: ['<%= app.upload %>']
    },

    /* It copies the vendors needed to the documentation be viewed properly. */
    copy: {
      styleguide: {
        files: [
          // Includes font files within path and its sub-directories
          {expand: true, cwd: '<%= app.kssTemplate %>/public', src: ['**/*'], dest: '<%= app.dist %>/<%= app.docs %>/public'},
          {expand: true, cwd: '<%= app.src %>', src: ['<%= app.assets %>/**'], dest: '<%= app.dist %>/<%= app.docs %>/public'}
        ],
      },
      upload: {
        files: [
          {expand: true, cwd: '<%= app.dist %>/<%= app.docs %>', src: ['**'], dest: '<%= app.upload %>'}
        ]
      },
      dist: {
        files: [
          // Includes font files within path and its sub-directories
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.scss', '*.scss', '!fonts'], dest: '<%= app.dist %>/<%= app.sass %>'}
        ],
      },
    },

    /* It launches a local webserver to view the compiled documentation. */
    connect: {
      server: {
        options: {
          port: 9001,
          base: '<%= app.dist %>/<%= app.docs %>',
          keepalive: true
        }
      }
    }
  });

  // Load the npm tasks needed
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-batch');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  /*

    Define the tasks

  */
  grunt.registerTask('serve', [
    'connect'           // Launch the local webserver in http://localhost:9001 
                        // to view the documentation
  ]);

  grunt.registerTask('sass-watch', [
    'watch:sass'  // Launch the doc task every time a Sass file changes
  ]);

  grunt.registerTask('sass-dev', [
    'clean',      // Clean the directory to ensure all files are generated 
                  // from scratch
    'sass:dev',   // Generate custom CSS to customize the documentation
    'copy'        // Copy files needed
  ]);

  grunt.registerTask('dist', [
    'clean:dist',      // Clean the directory to ensure all files are generated 
                  // from scratch
    'sass:dist',  // Generate custom CSS to customize the documentation
    'copy:dist'   // Copy files needed
  ]);

  grunt.registerTask('upload', [
    'clean:upload',     // Clean the directory to ensure all files are generated 
                        // from scratch
    'copy:upload',      // Copy files needed
  ]);

  grunt.registerTask('doc', [
    'clean:styleguide', // Clean the directory to ensure all files are generated 
                        // from scratch
    'batch:doc',        // Generate KSS documentation
    'copy:styleguide'   // Copy files needed
  ]);

  grunt.registerTask('default', [
    'dist',   // Compile Sass
    'doc'     // Compile Documentation
  ]);
};
