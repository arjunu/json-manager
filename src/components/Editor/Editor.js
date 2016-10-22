import React from 'react';
import {render} from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
var path = require('path');
import fs from 'fs';
import 'brace/mode/json';
import 'brace/theme/xcode';

const code = ``;

function onChange(newValue) {
    console.log('change', newValue);
}

var p = "/Users/rztm838/Documents/Github/json-manager/data/sample.json";
fs.readFile(p, 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    console.log(obj);
});

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