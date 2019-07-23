module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    babel: {
      // Used to convert the TypeScript into Javascript
      options: {
        sourceMap: false,
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["transform-es2015-modules-amd"]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "./src",
            src: ["*.js", "*.*.js"],
            dest: "./dist/babel",
            ext: ".js"
          }
        ]
      }
    },
    uglify: {
      // Minifys the javascript code
      app: {
        options: {
          sourceMap: true
        },
        files: {
          "dist/js/App.min.js": ["dist/babel/**/*.js"]
        }
      },
      options: {
        mangle: true,
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      }
    },
    less: {
      app: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/css/App.min.css": ["src/*.css"]
        }
      }
    },
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
          use: [] // Example plugin usage
        },
        files: {
          "./dist/img": "src/*.png"
        }
      },
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "./src",
            src: ["*.png"],
            dest: "./public/img"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // React is already minifying the code, so this task is
  // just for show. It converts REACT to JS, UGLIFIES
  // the contents of dist/babel, then it combines all
  // of our CSS files into dist/css.
  grunt.registerTask("default", ["babel", "uglify", "less"]);

  // This task converts raw images into compressed images
  // and places them in /public/img.
  grunt.registerTask("images", ["imagemin:dynamic"]);
};
