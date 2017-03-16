/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(function($){
    var windowWidth = $(window).width();

    $(window).resize(function() {
        if(windowWidth != $(window).width()){
            location.reload();
            return;
        }
    });
});


