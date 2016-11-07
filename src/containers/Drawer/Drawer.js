import React from 'react';
import MUIDrawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Add from 'material-ui/svg-icons/content/add-box';
import Subheader from 'material-ui/Subheader';
import {selectDrawer} from './Drawer.selector';
import {ACTION_ADD_COLLECTION, ACTION_LOAD_JSON_FILE, ACTION_LOAD_NEW} from '../../constants/actions';
import {connect} from 'react-redux';

const getNestedItems = (collection, onClick) => (
    [...collection.get("files").valueSeq().map(file =>(
        <ListItem
            primaryText={file.get("name")}
            key={file.get("id")}
            primaryTogglesNestedList={true}
            onClick={()=>onClick(collection, file)}
        />
    ))]
);

export class Drawer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.addCollectionClick = this.addCollectionClick.bind(this);
        this.openJSONFile = this.openJSONFile.bind(this);
        this.onNewClick = this.onNewClick.bind(this);
    }

    addCollectionClick() {
        this.props.dispatch({type: ACTION_ADD_COLLECTION, name: ""});
    }

    onNewClick(){
        this.props.dispatch({type: ACTION_LOAD_NEW});
    }

    openJSONFile(collection, file) {
        this.props.dispatch({
            type: ACTION_LOAD_JSON_FILE,
            payload: {
                collectionId: collection.get("id"),
                id: file.get("id"),
                projectDir: this.props.projectDir
            }
        });
    }

    render() {

        const {collections, onAddCollectionClick, onAddJSONClick} = this.props;

        return (
            <MUIDrawer open={true}>
                <div style={{padding: "0px 16px"}}><TextField
                    hintText="Search"
                /><br /></div>
                <List>
                    <ListItem
                        key={"AddNewCollection"}
                        primaryText="Add Collection"
                        rightIcon={<Add/>}
                        onClick={onAddCollectionClick}
                    />
                    <Subheader>Collections</Subheader>
                    <ListItem
                        primaryText="New"
                        key={"new"}
                        onClick={this.onNewClick}
                    />
                    {collections.valueSeq().map(collection =>(
                        <ListItem
                            primaryText={collection.get("name")}
                            key={collection.get("id")}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={getNestedItems(collection, this.openJSONFile)}
                        />
                    ))}
                </List>
            </MUIDrawer>
        );
    }
}

Drawer.propTypes = {};

const mapStateToProps = state => selectDrawer(state);

export default connect(mapStateToProps)(Drawer);