import { $getRoot } from 'lexical';
export const setSafeLexicalState = (state, editorInstance, action = 'replace')=>{
    try {
        const editorState = editorInstance.parseEditorState(state);
        if (editorState.isEmpty()) return;
        editorInstance.update(()=>{
            const root = $getRoot();
            root.clear() //TODO: this is hack to prevent reconciliation error - find a way
            ;
            editorInstance.setEditorState(editorState);
        }, {
            discrete: true
        });
    } catch (e) {
    // console.error('Error setting object:', e)
    // setValue(object) //TODO: This breaks the editor find a better way to handle objects that are not valid
    }
};

//# sourceMappingURL=setSafeLexicalState.js.map