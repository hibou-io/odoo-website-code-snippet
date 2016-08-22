odoo.define('website_snippet_code.snippet_code_editor', function (require) {
"use strict";

    var options = require('web_editor.snippets.options');
    var apply = require('website_snippet_code.snippet_code');

    var reverse = function($block) {
        $block.find('code.hljs').remove();
        $block.find('code').css('display', 'block');
    }

    options.registry.snippet_code_editor = options.Class.extend({
        on_focus : function() {
            var originalClass = this.$target.find('code:not(.hljs)').attr('class');
            var newClass = prompt('Set Language:', originalClass);
            var originalContent = this.$target.find('code:not(.hljs)').text();
            var newContent = prompt('Set Content:', originalContent);

            this.$target.addClass('o_dirty');

            reverse(this.$target);

            var $original = this.$target.find('pre code');
            $original.attr('class', newClass);
            $original.text(newContent);
            apply($original);
        },

        clean_for_save : function() {
            this.$target.removeClass('o_dirty');
            reverse(this.$target);
        },
    });

});