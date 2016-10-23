import React from 'react';
import {connect} from 'react-redux';
import {selectContent} from './Content.selector';
import Editor from '../../components/Editor/Editor';
import JSONTree from 'react-json-tree'

const theme = {
    scheme: 'base16-solar-flare',
    author: "A",
    base00: '#18262F',
    base01: '#222E38',
    base02: '#586875',
    base03: '#667581',
    base04: '#85939E',
    base05: '#A6AFB8',
    base06: '#E8E9ED',
    base07: '#F5F7FA',
    base08: '#EF5253',
    base09: '#E66B2B',
    base0A: '#E4B51C',
    base0B: '#7CC844',
    base0C: '#52CBB0',
    base0D: '#33B5E1',
    base0E: '#A363D5',
    base0F: '#D73C9A'
};

const styles = {
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
        float: "right",
        background: "#18262f",
        fontFamily: "monospace"
    }
};

class Content extends React.Component {

    render() {
        const {openFileData} = this.props;

        return (
            <div style={styles.contentWrapper}>
                <div style={styles.editorWrapper}>
                    <Editor content={JSON.stringify(openFileData, null, '\t')}
                    />
                </div>
                <div style={styles.treeWrapper}>
                    <JSONTree data={openFileData}
                              theme={theme}
                              invertTheme={false}
                              isLightTheme={false}
                    />
                </div>
            </div>
        );
    }
}

Content.propTypes = {};

const mapStateToProps = state => selectContent(state);

export default connect(mapStateToProps)(Content);