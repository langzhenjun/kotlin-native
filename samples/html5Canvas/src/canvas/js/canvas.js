
konan.libraries.push ({          // This one will be auto generated.
        knjs_addDocumentToArena: function(arena) {
            // Should be resolved by jsinterop.
            return toArena(arena, document);
        },
        knjs_setInterval: function (arena, func, interval) {
            setInterval(konan_dependencies.env.Konan_js_wrapLambda(arena, func), interval);
        },
        knjs_getElementById: function (arena, obj, id, idLength, resultArena) {
            var name = toUTF16String(id, idLength);
            var result = kObj(arena, obj).getElementById(name);
            return toArena(resultArena, result);
        },
        knjs_getContext: function (arena, obj, context, contextLength, resultArena) {
            var name = toUTF16String(context, contextLength);
            var result = kObj(arena, obj).getContext(name);
            return toArena(resultArena, result);
        },
        knjs_getBoundingClientRect: function (arena, obj, resultArena) {
            var result = kObj(arena, obj).getBoundingClientRect();
            return toArena(resultArena, result);
        },
        knjs_moveTo: function(arena, obj, x, y) {
            kObj(arena, obj).moveTo(x, y);
        },
        knjs_lineTo: function(arena, obj, x, y) {
            kObj(arena, obj).lineTo(x, y);
        },
        knjs_fillRect: function(arena, obj, x1, y1, width, height) {
            kObj(arena, obj).fillRect(x1, y1, width, height);
        },
        knjs_setLineWidth: function(arena, obj, value) {
            kObj(arena, obj).lineWidth = value;
        },
        knjs_setFillStyle: function(arena, obj, value_ptr, value_length) {
            var value = toUTF16String(value_ptr, value_length);
            kObj(arena, obj).fillStyle = value;
        },
        knjs_beginPath: function(arena, obj) {
            kObj(arena, obj).beginPath();
        },
        knjs_stroke: function(arena, obj) {
            kObj(arena, obj).stroke();
        },
        knjs_fetch: function(arena, urlPtr, urlLength, resultArena) {
            var url = toUTF16String(urlPtr, urlLength);
            var result = fetch(url);
            return toArena(resultArena, result);
        },
        knjs_then: function(arena, obj, func, resultArena) {
            var value = konan_dependencies.env.Konan_js_wrapLambda(arena, func);
            var result = kObj(arena, obj).then(value);
            var index = toArena(resultArena, result);
            return index;
        },
        knjs_json: function(arena, obj, resultArena) {
            var object = kObj(arena, obj);
            result = object.json();
            return toArena(resultArena, result);
        }
});
