import React from 'react';
import Drawer from '../Drawer/Drawer';
import Editor from '../../components/Editor/Editor';
import JSONTree from 'react-json-tree'
import sampleJSON from '../../sampleJSON';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
const dialog = require('electron').remote.dialog;
import {ACTION_INIT_PROJECT} from '../../constants/actions';
import {selectApp} from './App.selector';

const styles = {
    loadProjectWrapper: {padding: 16},
    loadProjectButton: {
        marginTop: 12
    },
    contentWrapper: {
        position: "absolute",
        left: "256px",
        height: "100%",
        top: 0,
        bottom: 0,
        right: 0
    },
    editorWrapper: {
        height: "100%",
        position: "relative",
        width: "50%",
        float: "left"
    },
    treeWrapper: {
        height: "100%",
        position: "relative",
        width: "50%",
        float: "right"
    }
};

const LoadProject = ({onLoadProjectClick}) => (
    <div style={styles.loadProjectWrapper}>
        <div>Get started by selecting a directory to store your JSON files or one that already contains an existing
            project
        </div>
        <RaisedButton label="Select Dir"
                      primary={true}
                      style={styles.loadProjectButton}
                      onClick={onLoadProjectClick}
        />
    </div>
);

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.onLoadProjectClick = this.onLoadProjectClick.bind(this);
    }

    onLoadProjectClick() {
        const projectDir = dialog.showOpenDialog({properties: ['openDirectory']})[0];
        this.props.dispatch({type: ACTION_INIT_PROJECT, payload: {path: projectDir}});
    }

    render() {

        const {projectDir} = this.props;

        if (projectDir)
            return (
                <div>
                    <Drawer/>
                    <div style={styles.contentWrapper}>
                        <div style={styles.editorWrapper}>
                            <Editor content={JSON.stringify(sampleJSON)}/>
                        </div>
                        <div style={styles.treeWrapper}>
                            <JSONTree data={sampleJSON}/>
                        </div>
                    </div>
                </div>);
        else
            return <LoadProject onLoadProjectClick={this.onLoadProjectClick}/>;
    }
}

App.propTypes = {};

const mapStateToProps = state => selectApp(state);

export default connect(mapStateToProps)(App);