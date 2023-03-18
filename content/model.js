let data = [
    { id: 1, title:'leena', desc: ''},
    { id: 2, title:'petchana', desc: ''},
    { id: 3, title:'6203619', desc: ''}
    
];

function getAll() {
    return Promise.resolve(data);
}

module.exports = getAll;