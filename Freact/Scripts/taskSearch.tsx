/// <reference path="../typings/tsd.d.ts" />
/// <reference path="taskList.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

class TaskSearchComponent extends React.Component<any, {}> {

    public render(): JSX.Element {
        return <form className="form-inline">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="btn btn-default" type="submit">Search</button>
            </form>;
    }

}
