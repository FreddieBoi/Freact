/// <reference path="../../typings/index.d.ts" />

declare namespace __ReduxLogger {

    type LoggerPredicate = (getState: () => any, action: any) => boolean;

    type StateToString = (state: any) => string;
    type ActionToString = (action: any) => string;
    type ErrorToString = (error: any, prevState: any) => string;

    interface ColorsObject {
        title?: boolean | ActionToString;
        prevState?: boolean | StateToString;
        action?: boolean | ActionToString;
        nextState?: boolean | StateToString;
        error?: boolean | ErrorToString;
    }

    interface LevelObject {
        prevState?: string | boolean | StateToString;
        action?: string | boolean | ActionToString;
        nextState?: string | boolean | StateToString;
        error?: string | boolean | ErrorToString;
    }

    interface ReduxLoggerOptions {
        level?: string | ActionToString | LevelObject;
        duration?: boolean;
        timestamp?: boolean;
        colors?: ColorsObject;
        logger?: any;
        logErrors?: boolean;
        collapsed?: boolean | LoggerPredicate;
        predicate?: LoggerPredicate;
        stateTransformer?: (state: any) => any;
        actionTransformer?: (action: any) => any;
        errorTransformer?: (error: any) => any;
    }

    function createLogger(options?: ReduxLoggerOptions): Redux.Middleware;
}

declare module "redux-logger" {
    export = __ReduxLogger;
}

import reduxLogger = __ReduxLogger.createLogger;
