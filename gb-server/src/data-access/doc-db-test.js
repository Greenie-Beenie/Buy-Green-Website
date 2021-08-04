//This file is an experiment to create a generalized set of db-access functions
//compatible with all collections.  The workability of this file has not yet been
//tested.  This file will remain until we determine its feasability.
export default function makeDocDb({ Id, docCol }) {
    return Object.freeze({
        listAllDocs,
        findDocById,
        deleteDocById  
    });
    async function listAllDocs() {
        const docList = [];
        const snapshot = snapshotDocs();
        snapshot.forEach(doc => {docList.push(doc.data())});
        return docList;
    }
    async function findDocById({ id }) {
        let document;
        const snapshot = snapshotDocById({ id });
        if (snapshot.empty) {
            return {};
        }
        snapshot.forEach(doc => {document = doc});
        return document;
    }
    async function deleteDocById({ id }) {
        const snapshot = snapshotDocById({ id });
        snapshot.forEach(doc => {doc.ref.delete()});
    }

    async function snapshotDocs() {
        return await docCol.get();
    }
    async function snapshotDocById({ id }) {
        return await docCol.where("id", "==", id).get();
    }
}