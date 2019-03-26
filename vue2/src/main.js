

//导入jquery

import $ from 'jquery'

import './css/index.css'

import './css/less.less'

import './css/sass.scss'

import 'bootstrap/dist/css/bootstrap.css'
$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor', function(){
        return 'pink'
    })
})