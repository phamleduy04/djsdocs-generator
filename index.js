const fetch = require('node-fetch');
const baseURL = 'https://djsdocs.sorta.moe/v2/embed';
const acceptedBranches = ['rpc', 'master', 'commando', 'stable'];
module.exports = {
    /**
     * @param {String} branch to search (default stable)
     * @param {String} query to Search
     * @returns {Promise}
     */
    search: function(branch = 'stable', query) {
        if (!query) throw new TypeError('Query not specified!');
        branch = branch.toLowerCase();
        if (!acceptedBranches.includes(branch)) throw new Error('branch should be rpc, master, commando or stable');
        return new Promise((resolve, reject) => {
            fetch(`${baseURL}?src=${branch}&q=${encodeURIComponent(query)}`)
                .then(res => res.json())
                .then(body => {
                    if (body === null) reject('Not found!');
                    resolve(body);
                });
        });
    },
};