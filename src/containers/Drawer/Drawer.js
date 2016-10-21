import React from 'react';
import MUIDrawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Subheader from 'material-ui/Subheader';

export default class Drawer extends React.Component {

    render() {

        return (
            <MUIDrawer open={true}>
                <div style={{padding: "0px 16px"}}><TextField
                    hintText="Search"
                    floatingLabelText="Search"
                /><br /></div>
                <List>
                    <Subheader>Collections</Subheader>
                    <ListItem
                        primaryText="Collection 1"
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="JSON 1"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="Collection 2"
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="JSON 2"
                            />
                        ]}
                    />
                </List>
            </MUIDrawer>
        );
    }
}

Drawer.propTypes = {};