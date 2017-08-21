/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                                            
        $("#btn_new").click(function () {
            csInterface.evalScript('newLayer()');
        });
    }
    init();
}());
    
(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                                            
        $("#btn_sel").click(function () {
            csInterface.evalScript('selection()');
        });
    }
    init();
}());

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                                            
        $("#btn_mer").click(function () {
            csInterface.evalScript('merge()');
        });
    }
    init();
}());
        