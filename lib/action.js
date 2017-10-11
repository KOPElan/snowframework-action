/*!
 * snowframework
 * Copyright(c) 2017 KOPElan
 * MIT Licensed
 */

'use strict';

exports.view = function (context) {
    return {
        actionResult: 'view',
        data: context
    }
};

exports.file = function (path) {
    return {
        actionResult: 'file',
        path: path
    }
};
exports.content = function (data, contentType) {
    return {
        actionResult: 'content',
        data: data,
        contentType: contentType
    }
}