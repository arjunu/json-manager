import React from 'react';
import Drawer from '../Drawer/Drawer';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
const dialog = require('electron').remote.dialog;
import {ACTION_INIT_PROJECT} from '../../constants/actions';
import {selectApp} from './App.selector';
import AddDialog from '../../components/AddDialog/AddDialog';
import {ACTION_ADD_COLLECTION, ACTION_ADD_JSON} from '../../constants/actions';
import {generateId} from '../../utils';
import Content from '../Content/Content';

const styles = {
    loadProjectWrapper: {padding: 16},
    loadProjectButton: {
        marginTop: 12
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
        this.onAdd = this.onAdd.bind(this);

        this.state = {
            showAddCollectionDialog: false,
            addNewJSONFor: false
        };
    }

    onLoadProjectClick() {
        const projectDir = dialog.showOpenDialog({properties: ['openDirectory']})[0];
        this.props.dispatch({
            type: ACTION_INIT_PROJECT,
            payload: {path: projectDir},
            origin: "App.onLoadProjectClick"
        });
    }

    onAdd(newItem) {
        if (this.state.addNewJSONFor) {
            if (newItem)
                this.props.dispatch({
                    type: ACTION_ADD_JSON,
                    payload: {name: newItem, collectionId: this.state.addNewJSONFor.get("id"), id: generateId()},
                    origin: "App.onAdd"
                });

            this.setState({addNewJSONFor: false});
        }
        else {
            if (newItem)
                this.props.dispatch({
                    type: ACTION_ADD_COLLECTION,
                    payload: {name: newItem, id: generateId()},
                    origin: "App.onAdd"
                });

            this.setState({showAddCollectionDialog: false});
        }
    }

    render() {

        const {projectDir} = this.props;

        if (projectDir)
            return (
                <div>
                    <Drawer onAddCollectionClick={()=>this.setState({showAddCollectionDialog: true})}
                            onAddJSONClick={collection=>this.setState({addNewJSONFor: collection})}
                    />
                    <Content/>
                    <AddDialog show={this.state.showAddCollectionDialog || !!this.state.addNewJSONFor}
                               onClose={this.onAdd}
                               title={this.state.addNewJSONFor ? `Add new JSON under collection "${this.state.addNewJSONFor.get("name")}"` : "Add new collection"}
                               hint={this.state.addNewJSONFor ? "New JSON name" : "New collection name"}
                    />
                </div>);
        else
            return <LoadProject onLoadProjectClick={this.onLoadProjectClick}/>;
    }
}

App.propTypes = {};

const mapStateToProps = state => selectApp(state);

export default connect(mapStateToProps)(App);