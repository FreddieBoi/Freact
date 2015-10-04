/// <reference path="../typings/tsd.d.ts" />
/// <reference path="task.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

class TaskListComponent extends React.Component<any, {}> {
    render() {
        var tasks = this.props.data.map((task: any) => {
            return <TaskComponent key={task.Id} id={task.Id} name={task.Name} isCompleted={task.IsCompleted} />;
        });
        var classes = classNames({
            "task-list": true,
            "list-unstyled": true
        });
        return <ul className={classes}>
            {tasks}
            </ul>;
    }
}
