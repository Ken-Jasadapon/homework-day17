const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

let Contacts = [];

app.get("/contacts", (req, res) => {
    res
        .send(Contacts);
});

app.get("/contacts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const contact = Contacts.find(c => c.id === id);

    if (contact) {
        res
            .send(contact);
    } else {
        res
            .status(404)
            .send("Contact not found");
    }

});

app.post("/contacts", (req, res) => {
    const new_contact = req.body

    if (!new_contact.id) {
        new_contact.id = Contacts.length ? Contacts[Contacts.length - 1].id + 1 : 1;
    } else {
        const exists = Contacts.some(c => c.id === new_contact.id);
        if (exists) {
            return res
                .status(400)
                .send("ID already exists");
        }
    }

    Contacts.push(new_contact);

    res
        .status(201)
        .send(new_contact);
});

app.put("/contacts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const contactIndex = Contacts.findIndex(c => c.id === id);

    if (contactIndex !== -1) {
        Contacts[contactIndex] = {
            ...Contacts[contactIndex],
            ...req.body
        };

        res
            .status(200)
            .send(Contacts[contactIndex]);
    } else {
        res
            .status(404)
            .send("Contact not found");
    }
});

app.delete("/contacts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const contactIndex = Contacts.findIndex(c => c.id === id);

    if (contactIndex !== -1) {
        const deletedContact = Contacts.splice(contactIndex, 1);
        res
            .status(200)
            .send(deletedContact[0]);
    } else {
        res
            .status(404)
            .send("Contact not found");
    }

});



app.listen(3000, () => {
    console.log("App listening on port 3000!");
});