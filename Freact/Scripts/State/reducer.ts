/// <reference path="../../typings/index.d.ts" />
/// <reference path="actions.ts" />
/// <reference path="state.d.ts" />

let reducer = (state: AppState, action: any): AppState => {
    switch (action.type) {
        case FreactActionIdentifiers.AddTask:
            return Object.assign({}, state, {
                tasks: state.tasks.concat([])
            });
        default:
            return state;
    }
};
