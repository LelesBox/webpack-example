/**
 * Created by blake on 4/17/16.
 */
'use strict'
//import cm from './dommon'
import _ from 'ramda'
import __ from "$"
require('./style/index.css')

console.log(__)
console.log(is)
var Foo = function () {
    console.log("FOOL")
    console.log(is)
    //console.log(moment)
    require.ensure(['./asset/a'], (require)=> {
        var X = require('./asset/a')
        console.log(X)
    })
}

if (__DEV__) {
    console.log("XXXX")
} else {
    console.log("TTTTT")
}
console.log("__X___:" + __DEV__)

let x = "hello world hot replacement!!!!"

let log = x=> {
    console.log(x)
}

log(x)

module.exports = Foo
