export const selectDrawer = state => {
    const stateRoot = state.root;

    return {
        collections: stateRoot.get("collections"),
        projectDir: stateRoot.get("projectDir")
    };
};

