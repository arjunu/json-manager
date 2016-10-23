import React from 'react';
import {render} from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/xcode';

const code = ``;

function onChange(newValue) {
    console.log('change', newValue);
}

const Editor = ({content}) => (
    <AceEditor
        height="100%"
        width="100%"
        mode="json"
        theme="xcode"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        value={content}
    />
);

export default Editor;