module.exports = function(grunt) {

  grunt.initConfig({
    
    //clean
    clean: {
      build: ["build"]
    },
  
    //copy
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src",
          src: [
            "images/**",
            "js/**",
            "fonts/**",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },

    //less
    less: {
      style: {
        files: {
          "build/css/styles.css": ["src/less/styles.less"]
        }
      }
    },

    //autoprefixer
    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "build/css/styles.css"
      }
    },

    //media-queries
    cmq: {
      style: {
        files: {
          "build/css/styles.css": ["build/css/styles.css"]
        }
      }
    },

    //css-min
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/styles.min.css": ["build/css/styles.css"]
        }
      }
    },

    //image-min
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/images/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    //watch
    watch: {
      watching: {
      files: ["src/**/*"],
      tasks: ["build"],
      options: {
        livereload: true,
        },
      },
    },

  });

  require("load-grunt-tasks")(grunt);

  //build
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    //"imagemin"
  ]);

};