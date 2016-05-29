/// <reference path="../../typings/index.d.ts" />
/// <reference path="taskBox.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// Whole-script strict mode syntax
"use strict";

interface AppProps extends React.Props<any> {
    url: string;
}

interface AppState extends React.Props<any> {
    tasks: ITaskModel[];
}

class App extends React.Component<AppProps, AppState> {

    public render(): JSX.Element {
        return <TaskBoxComponent url={this.props.url} />;
    }

}

//let mapStateToProps = (state: any) => {
//    return state
//}

//let mapDispatchToProps = (dispatch: any) => {
//    return {
//        actions: Redux.bindActionCreators(FreactActions., dispatch)
//    }
//}

//Redux.connect(mapStateToProps, mapDispatchToProps)(App);
