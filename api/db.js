const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'users';
const dbConfig = {
    schema: 'mongodb',
    host: 'mongodb',
    port: '27017'
};

const url = `${dbConfig.schema}://${dbConfig.host}:${dbConfig.port}/${dbName}`;

class Database {
    constructor() {
        this.db = null;
    }

    async connect() {
        const client = await MongoClient.connect(url);
        this.db = client.db(dbName);
        return this.db;
    }

    close() {
        if (this.db && this.db.close) {
            this.db.close();
        }
    }

    getCollection(collection) {
        return this.db && this.db.collection
            ? this.db.collection(collection)
            : null;
    }

    async find(collection, query = {}) {
        return await this.getCollection(collection).find(query).toArray();
    }

    async findOne(collection, query = {}) {
        return await this.getCollection(collection).findOne(query);;
    }

    async findById(collection, id) {
        return await this.findOne(collection, { _id: ObjectID(id) });
    }

    async findAll(collection) {
        return await this.find(collection, {});
    }

    async insertOne(collection, item) {
        const result = await this.getCollection(collection).insertOne(item);
        return result.ops[0];
    }

    async insertMany(collection, items) {
        const result = await this.getCollection(collection).insertMany(items);
        return result.ops;
    }

    async deleteById(collection, id) {
        return await this.getCollection(collection).deleteOne({
            _id: ObjectID(id)
        });
    }
}

module.exports = new Database();
