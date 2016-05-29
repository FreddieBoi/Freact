/// <reference path="../../typings/index.d.ts" />

// Whole-script strict mode syntax
"use strict";

enum FreactActionIdentifiers {
    AddTask
}

let actions = {

    addTask: (text: string): any => {
        return {
            type: FreactActionIdentifiers.AddTask,
            text: text
        };
    }

};
