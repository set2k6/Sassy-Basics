'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const jshint = require('gulp-jshint')

gulp.task('js:lint', () => (
  gulp.src(sassPath)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
  ))

gulp.task('sass:lint', () => (
  gulp.src(sassPath)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
  ))


gulp.task('sass:compile', () => (
  gulp.src(sassPath)
    .pipe(sass())
    .pipe(gulp.dest('./static'))
))

gulp.task('sass:watch', () => (
  gulp.watch(sassPath,
    ['sass:lint', 'sass:compile']
  )
))

gulp.task('sass', ['sass:lint', 'sass:compile', 'sass:watch'])
gulp.task('lint', ['js:lint', 'sass:lint'])
gulp.task('default', ['js', 'sass'])