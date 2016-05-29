/// <reference path="../../typings/index.d.ts" />
/// <reference path="../taskModel.d.ts" />
/// <reference path="taskList.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface TaskBoxProps extends React.Props<any> {
    url: string;
}

interface TaskBoxState extends React.Props<any> {
    tasks: ITaskModel[];
}

class TaskBoxComponent extends React.Component<TaskBoxProps, TaskBoxState> {

    constructor(props?: TaskBoxProps, context?: any) {
        super(props, context);
        this.state = { tasks: [] };
    }

    private handleSearchSubmit: (term: string) => void = (term) => {
        console.debug("search: " + term);
        $.ajax({
            url: this.props.url + (term ? "?" + $.param({ term: term }) : ""),
            dataType: "json",
            type: "get",
            cache: false
        }).done((data: ITaskModel[]) => {
            this.setState({ tasks: data });
        }).fail((xhr, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
    };

    public componentDidMount(): void {
        $.ajax({
            url: this.props.url,
            dataType: "json",
            method: "get",
            cache: false
        }).done((data: ITaskModel[]) => {
            this.setState({ tasks: data });
        }).fail((xhr, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
    }

    public render(): JSX.Element {
        return <div className="taskBox">
            <h1>Tasks</h1>
            <TaskSearchComponent onSearchSubmit={this.handleSearchSubmit} />
            <TaskListComponent tasks={this.state.tasks} />
            </div>;
    }

}
