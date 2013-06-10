/* Copyright 2012 by Gordon Food Service, Inc.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Gordon
 * Food Service, Inc. ("Confidential Information"). You shall not disclose
 * such Confidential Information and shall use it only in accordance with
 * the terms specified by Gordon Food Service.
 *
 */
(function ($) {
    $.fn.focusNextInputField = function () {
        return this.each(function () {
            var fields = $(this).parents('form:eq(0),body').find('button,input,textarea,select');
            var index = fields.index(this);
            if (index > -1 && ( index + 1 ) < fields.length) {
                fields.eq(index + 1).focus().select();
            } else {
                fields.first().focus().select();
            }
            return false;
        });
    };
}(jQuery));