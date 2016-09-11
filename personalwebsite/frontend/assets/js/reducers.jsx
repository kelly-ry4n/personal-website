exports = module.exports = {};
const ipsumActions = require('./actions')

const initalState = {
    ipsumsLoaded: false,
    ipsums: [],
}


exports.Reducer = (state=initalState, action) => {

    switch (action.type) {

        default:
            return state
    }
}
