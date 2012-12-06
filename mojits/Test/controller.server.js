/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Test', function(Y, NAME) {

/**
 * The Test module.
 *
 * @module Test
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.done({
                message: ac.params.getFromBody('message')
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-params-addon']});
