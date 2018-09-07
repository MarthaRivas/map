var crel = require ('crel')
var tabletop = require ('tabletop')
var render = require ('./require')


tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/14GTxRdrZgGe2sLrxX-KErQnWuNR2St25qgJHZXLNrhk/pubhtml',
    callback: function (tabletopData, tabletop) {


      console.log("render:", render)
      document.body.appendChild (render ( tabletopData))
    },
    simpleSheet: true
   })



   console.log('data')