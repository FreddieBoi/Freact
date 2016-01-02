/// <reference path="../typings/tsd.d.ts" />
/// <reference path="taskList.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface TaskSearchProps extends React.Props<any> {
    onSearchSubmit: (term: string) => void;
}

interface TaskSearchState extends React.Props<any> {
    term: string;
}

class TaskSearchComponent extends React.Component<any, TaskSearchState> {

    constructor(props?: TaskBoxProps, context?: any) {
        super(props, context);
        this.state = { term: "" };
    }

    public handleTermChange: (e: any) => void = (e) => {
        this.setState({ term: e.target.value });
    };

    public handleSubmit: (e: any) => void = (e) => {
        e.preventDefault();
        var term = $.trim(this.state.term);
        this.props.onSearchSubmit(term);
    };

    public render(): JSX.Element {
        return <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="Search" value={this.state.term} onChange={this.handleTermChange} />
            <button className="btn btn-default" type="submit">Search</button>
            </form>;
    }

}
