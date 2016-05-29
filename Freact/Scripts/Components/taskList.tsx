/// <reference path="../../typings/index.d.ts" />
/// <reference path="../taskModel.d.ts" />
/// <reference path="task.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface TaskListProps extends React.Props<any> {
    tasks: ITaskModel[];
}

class TaskListComponent extends React.Component<TaskListProps, {}> {

    public render(): JSX.Element {
        var tasks = this.props.tasks.map((task: ITaskModel) => {
            return <TaskComponent key={task.Id} id={task.Id} name={task.Name} description={task.Description} isCompleted={task.IsCompleted} />;
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
