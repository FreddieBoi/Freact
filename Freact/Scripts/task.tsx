/// <reference path="../typings/tsd.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface TaskProps extends React.Props<any> {
    id: number;
    name: string;
    description: string;
    isCompleted?: boolean;
}

class TaskComponent extends React.Component<TaskProps, {}> {
    render() {
        var classes = classNames({
            "task": true,
            "task-completed": this.props.isCompleted

        });
        return <li className={classes}>
            <strong className="task-name">{ this.props.name }</strong> <span className="task-description">{ this.props.description }</span>
            </li>;
    }
}
