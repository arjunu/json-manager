import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class AddCollectionDialog extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleClose = this.handleClose.bind(this);

        this.state = {input: ""};
    }

    handleClose() {
        this.props.onClose(this.state.input);
    }

    componentWillReceiveProps(newProps) {
        if (!this.props.show && newProps.show)
            this.setState({input: ""});
    }

    render() {
        const {title, show, hint} = this.props;

        const dialogActions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Add"
                primary={true}
                disabled={!this.state.input}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <Dialog
                title={title}
                actions={dialogActions}
                modal={false}
                open={show}
                onRequestClose={this.handleClose}
            >
                <TextField
                    hintText={hint}
                    onChange={event => this.setState({input: event.target.value})}
                />
            </Dialog>
        );
    }
}

AddCollectionDialog.propTypes = {};