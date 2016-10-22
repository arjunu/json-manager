export const selectApp = state => {
    console.log(state);
    const stateRoot = state.root;

    return {
        projectDir: stateRoot.get("projectDir"),
        collections: stateRoot.get("collections"),
    };
};
