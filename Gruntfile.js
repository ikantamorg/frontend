module.exports = function(grunt) {
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
				outputStyle: 'compact',
				sassDir: 'assets/scss',
				cssDir: 'css'
			}
		}
	},

	imagemin: {                  
		dynamic: {               
			files: [{
				expand: true,        
				cwd: 'assets/images/modules',  
				src: ['assets/images/modules/**/*.{png,jpg,gif}'], 
				dest: 'assets/images'     
			}]
		}
		/*
		,single: {
		cwd: 'images/modules',
		files: 'images/modules/specific.png': 'images/modules/specific2.png', 
		dest: 'images/modules'
		}
		*/
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
		},
		scripts: {
			files: '**/*.js',
			tasks: ['concat']
		},
		images: {
			files: ['assets/images/modules/**/*.{png,jpg,gif}'],
			tasks: ['imagemin:dynamic'],
			options: {
				spawn: false
			}
		},
		
		minjs: {
			files: 'assets/js/main.js',
			tasks: ['uglify']
		}
	}
	});

	/* ======[ dependent plugins ]====== */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default',['watch']);
}