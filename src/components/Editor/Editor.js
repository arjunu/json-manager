import React from 'react';
import {render} from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/dawn';

const Editor = ({content, onChange}) => (
    <AceEditor
        height="100%"
        width="100%"
        mode="json"
        theme="dawn"
        onChange={onChange}
        name="jm_editor"
        editorProps={{$blockScrolling: true}}
        value={content}
    />
);

export default Editor;