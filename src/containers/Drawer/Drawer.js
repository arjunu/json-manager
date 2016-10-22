import React from 'react';
import MUIDrawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Add from 'material-ui/svg-icons/content/add-box';
import Subheader from 'material-ui/Subheader';
import {selectDrawer} from './Drawer.selector';
import {ACTION_ADD_COLLECTION} from '../../constants/actions';
import {connect} from 'react-redux';

export class Drawer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.addCollectionClick = this.addCollectionClick.bind(this);
    }

    addCollectionClick() {
        this.props.dispatch({type: ACTION_ADD_COLLECTION, name: ""});
    }

    render() {

        const {collections} = this.props;

        return (
            <MUIDrawer open={true}>
                <div style={{padding: "0px 16px"}}><TextField
                    hintText="Search"
                /><br /></div>
                <List>
                    <Subheader>Collections</Subheader>
                    <ListItem
                        key={1}
                        primaryText="Add Collection"
                        rightIcon={<Add/>}
                        onClick={this.addCollectionClick}
                    />
                    {collections.valueSeq().map(collection => (<ListItem
                        primaryText={collection.get("name")}
                        key={collection.get("id")}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="JSON 1"
                            />
                        ]}
                    />))}
                </List>
            </MUIDrawer>
        );
    }
}

Drawer.propTypes = {};

const mapStateToProps = state => selectDrawer(state);

export default connect(mapStateToProps)(Drawer);