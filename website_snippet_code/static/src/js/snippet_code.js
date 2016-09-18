odoo.define('website_snippet_code.snippet_code', function (require) {
"use strict";

    var apply = function($block) {
        var $pre = $block.closest('pre');
        var original = $block.clone();
        original.css('display', 'none');

        hljs.highlightBlock($block[0]);
        $pre.append(original);
    };

    $(document).ready(function() {

        // Setup code highlighting (saving original)
        $('pre.code').each(function(i, pre) {
            var $pre = $(pre);
            var $first_code = $pre.find('code').first();
            $first_code.nextAll().each(function(i, block) {
                $first_code.html($first_code.html() + $(block).html());
            });
            $first_code.nextAll().each(function(i, block) {
                $(block).remove();
            });

            apply($first_code);
        });
    
    });

    return apply;
});