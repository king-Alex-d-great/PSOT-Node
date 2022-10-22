const express = require('express');

const app = express();
const PORT = 8000;


// GET all transactions
app.get("/", (req, res) => {
    res.send ("Here are all the transactions!")
});

//Posting a new transaction
app.post('/api/transaction', (req, res) => {
    timestamp = req.body.timestamp,
    transactiontype = req.body.transactiontype,
    amount = req.body.amount,
    token = req.body.token
    
    let transaction ={
        TimeStamp: 156278411,
        TransactionType: withdrawal,
        Amount: 0.456723,
        Token: ETH
    }

    transaction.push();
    res.send();

});

//Get  A transaction by TimeStamp
app.get("/api/transaction/:id", (req, res) => {
    let id = req.params.id;
    let TimeStamp = transaction.find((TimeStamp) => TimeStamp.id == id);
    return res.send();
});

//Get a transaction bt transaction type
app.get("/api/transaction/:id", (req, res) => {
    let id = req.params.id;
    let TransactionType = transaction.find((withdrawal) => TransactionType.id == id);
    return res.send('Here are all the withdrawals!');
});

//Get a transaction bt transaction type : Deposit
app.get("/api/transaction/:id", (req, res) => {
    let id = req.params.id;
    let TransactionType = transaction.find((Deposit) => TransactionType.id == id);
    return res.send('Here are all the Deposit!');
});


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
});