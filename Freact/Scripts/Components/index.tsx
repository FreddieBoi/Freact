/// <reference path="../../typings/index.d.ts" />
/// <reference path="taskBox.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

$(() => {
    //let initialState = {
    //    tasks: []
    //}

    //let store = FreactStore.configureStore(initialState)

    ReactDOM.render(<App url="api/tasks" />, document.getElementById("app"));
});
