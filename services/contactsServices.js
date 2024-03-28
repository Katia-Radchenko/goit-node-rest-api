// import fs from "fs/promises";
// import path from "path";
// import {nanoid} from "nanoid"
import Contact from "../models/Contact.js";



// function updateContacts(contacts) {
//     fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
// }


export const listContacts = ()=>Contact.find();

// export async function getContactById(contactId) {
//     const contacts = await listContacts();
//     const result = contacts.find(item => item.id === contactId);
//
//     return result || null;
// }
//
// export async function removeContact(contactId) {
//     const contacts = await listContacts();
//     const index = contacts.findIndex(item => item.id === contactId);
//     if (index === -1) {
//         return null;
//     }
//     const [result] = contacts.splice(index, 1);
//     await updateContacts(contacts);
//
//     return result;
// }
//
// export async function addContact({name, email, phone}) {
//     const contacts = await listContacts();
//     const newContacts = {
//         id: nanoid(),
//         name,
//         email,
//         phone
//     };
//     contacts.push(newContacts);
//     await updateContacts(contacts);
//
//     return newContacts;
// }
//
// export const updateContactById = async (contactId, data) => {
//     const contacts = await listContacts();
//     const index = contacts.findIndex(item => item.id === contactId);
//     if (index === -1) {
//         return null;
//     }
//     contacts[index] = {...contacts[index], ...data};
//     await updateContacts(contacts);
//
//     return contacts[index];
// }