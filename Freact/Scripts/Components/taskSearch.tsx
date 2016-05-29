/// <reference path="../../typings/index.d.ts" />
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

class TaskSearchComponent extends React.Component<TaskSearchProps, TaskSearchState> {

    constructor(props?: TaskSearchProps, context?: any) {
        super(props, context);
        this.state = { term: "" };
    }

    private handleTermChange: React.FormEventHandler = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var target: any = e.target;
        var value: string = target ? target.value : "";
        if (value != this.state.term) {
            this.setState({ term: value });
            var term = $.trim(value);
            this.props.onSearchSubmit(term);
        }
    };

    private handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        var term = $.trim(this.state.term);
        this.props.onSearchSubmit(term);
    };

    public render(): JSX.Element {
        return <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="Search" defaultValue={this.state.term} onChange={this.handleTermChange} onKeyUp={this.handleTermChange} />
            <button className="btn btn-default" type="submit">Search</button>
            </form>;
    }

}
