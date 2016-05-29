/// <reference path="../../typings/index.d.ts" />
/// <reference path="state.d.ts" />

let configureStore = (initialState: AppState = { tasks: [] }) => {
    return Redux.createStore(reducer, initialState)
};
