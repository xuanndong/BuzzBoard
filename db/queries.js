const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("select * from messages");
    return rows;
}

async function createMessages(text, name) {
    await pool.query("insert into messages(text, name) values ($1, $2)", [text, name]);
}

async function getDetailMessage(name) {
    const { rows } = await pool.query("select * from messages where name LIKE $1", [name]);
    return rows;
}
module.exports = {
    getAllMessages,
    createMessages,
    getDetailMessage,
};
