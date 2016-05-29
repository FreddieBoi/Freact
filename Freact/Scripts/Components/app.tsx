/// <reference path="../../typings/index.d.ts" />
/// <reference path="../CustomTypings/index.d.ts" />
/// <reference path="../State/state.d.ts" />
/// <reference path="../State/actions.ts" />
/// <reference path="taskBox.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface AppProps extends React.Props<any> {
    url: string;
}

class AppComponent extends React.Component<AppProps, AppState> {

    public render(): JSX.Element {
        return <TaskBoxComponent url={this.props.url} />;
    }

}

let mapStateToProps = (state: any) => {
    return state;
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        actions: Redux.bindActionCreators(actions, dispatch)
    }
}

ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AppComponent);
