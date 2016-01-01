/// <reference path="../typings/tsd.d.ts" />
/// <reference path="taskBox.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

$(() => {
    var content = <TaskBoxComponent url="api/tasks" />;
    React.render(content, document.getElementById("tasks"));
});
