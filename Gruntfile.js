module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['assets/js/custom/*.js'],
                dest: 'assets/js/main.js',
                nonull: true,
            }
        },

        compass: {
            dist: {
                options: {
                    noLineComments: true,
                    sassDir: 'assets/scss',
                    cssDir: 'assets/css'
                }
            }
        },

        imagemin: {
            options: {
                cache: false
            },

            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/images/modules/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'assets/images/opt/'
                    }
                ]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'assets/js/main.min.js': ['assets/js/main.js']
                }
            }
        },

        /* ======[ configuration ]====== */
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
	
        //,scripts: {
        //    files: '***/*//*.js',
        //    tasks: ['concat']
        //}
        //,images: {
        //    files: ['**/*'],
        //    tasks: ['imagemin'],
        //    options: {
        //        spawn: false
        //    }
        //}

        //,minjs: {
        //    files: 'assets/js/main.js',
        //    tasks: ['uglify']
       // }
    }
}
);

	/* ======[ dependent plugins ]====== */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	
	grunt.registerTask('default',['watch']);
	//grunt.registerTask('default', ['imagemin']);
	//grunt.registerTask('default', ['uglify']);
	//grunt.registerTask('default', ['concat']);
}

