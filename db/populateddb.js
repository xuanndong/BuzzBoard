const { Client } = require('pg');
require('dotenv').config();

const SQL = `
create table if not exists messages (
    id integer primary key generated always as identity,
    text varchar(255),
    name varchar(255),
    added date not null default current_date 
);

insert into messages (text, name)
values
    ('Hi there', 'Amandon'),
    ('Hello world', 'Chales');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.QUERY,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();
