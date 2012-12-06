/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('TestBinderIndex', function(Y, NAME) {

/**
 * The TestBinderIndex module.
 *
 * @module TestBinderIndex
 */

    /**
     * Constructor for the TestBinderIndex class.
     *
     * @class TestBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;

            node.one('#update').on('click', function () {
                me.mojitProxy.refreshView({
                    params: {
                        body: {
                            message: node.one('#message').get('value')
                        }
                    }
                });
            });
        },

        onRefreshView: function (node) {
            this.bind(node);
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
