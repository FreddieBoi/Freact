/// <reference path="../typings/tsd.d.ts" />
/// <reference path="taskList.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface ITaskModel {
    Id: number;
    Name: string;
    Description: string;
    IsCompleted: boolean;
}

$(() => {
    $.getJSON("api/tasks")
        .done((data: any) => {
            var content = <TaskListComponent tasks={data} />;
            React.render(content, document.getElementById("tasks"));
        });
});
