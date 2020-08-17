const initialState = { historyProp: '' }

function reducer(state = initialState, action) {
    // console.log(state, action)

    switch (action.type) {
        case 'HistorySlider':
            return {
                history: state.history.push({
                    pathname: "/account",
                    state: { username: this.state.username }
                })
            }

        default:
            return state;
    }

}

export default reducer;
