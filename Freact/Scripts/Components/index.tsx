/// <reference path="../../typings/index.d.ts" />
/// <reference path="../CustomTypings/index.d.ts" />
/// <reference path="../State/state.d.ts" />
/// <reference path="../State/reducer.ts" />
/// <reference path="app.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

let createFreactStore = Redux.compose(Redux.applyMiddleware(reduxLogger()))(Redux.createStore);

$(() => {
    let initialState: AppState = {
        tasks: []
    };

    let store = createFreactStore(reducer, initialState);
    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <AppComponent url="api/tasks" />
        </ReactRedux.Provider>,
        document.getElementById("app"));
});
