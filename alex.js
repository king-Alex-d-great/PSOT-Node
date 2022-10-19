const { dataStore } = require("./txn");

// console.log(dataStore);

// Get all transactions ✅
// Add a transaction
// Update an existing Transaction
// Delete A transaction
// Get A transaction by Timestamp
// Get All transactions by type (Withdraw/ Deposit)
// Bonus: Get all transactions done on a particular date

let getAllTransaction = () => dataStore;

const _transactionType = ["DEPOSIT", "WITHDRAW"];
const _token = ["BTC", "XRP", "ETH"];

const validateTransactionType = (transactionType) => {
  if (!_transactionType.includes(transactionType.toUpperCase())) {
    return false;
  }

  return true;
};

const validateTokenType = (tokenType) => {
  if (!_token.includes(tokenType.toUpperCase())) {
    return false;
  }
  return true;
};

const validateTimeStamp = (date) => {
  let dateObject = new Date(date).getTime();
  dateObject = dateObject / 1000;
  let timeStamp = Math.floor(dateObject);

  if (result === NaN) {
    return (response = {
      isSuccessful: false,
      timeStamp,
    });
  }

 let response = {
    isSuccessful: true,
    timeStamp,
  };
  return response;
};

//Year - month - day

// Add a new transaction
const addTransaction = (timeStamp, transactionType, amount, token) => {
  const isValidTimeStamp = validateTimeStamp(timeStamp);

  if (isValidTimeStamp.isSuccessful == false) return "Invalid timestamp";
  const isValidTokenType = validateTokenType(token);

  if (isValidTokenType == false) return "Invalid token type";

  const isValidTransactionType = validateTransactionType(transactionType);
  if (isValidTransactionType == false) return "Invalid transactionType";

  if (amount < 0) return "Amount must be greater than 0";

  const newTransaction = {
    TimeStamp: timeStamp,
    TransactionType: transactionType,
    Amount: amount,
    Token: token,
  };

  dataStore.push(newTransaction);
  return "Added Successfully" ;
};

// Get A transaction by Timestamp ==> 2020.10.24 => 1571967208
const getTransactionByTimeStamp = (timeStamp) => {
  //validate timestamp
  let result = validateTimeStamp(timeStamp);

  if (result.isSuccessful == false) return "Invalid Time Stamp";

  //find a transaction where the transaction timestamp is equal to our timestamp argument
  let transaction = dataStore.find(
    (transaction) => transaction.TimeStamp === result.timeStamp
  );

  if (!transaction)
    return("Transaction not find");

  return transaction;
};

//Update A transaction 
const updateTransaction = (timeStamp, amount) => {
    //First try and get the object
    let _transaction = getTransactionByTimeStamp(timeStamp);
    _transaction.Amount = amount;

    let index = dataStore.indexOf(_transaction);
    dataStore[index] = _transaction;
}



//// Bonus: Get all transactions done on a particular date

//Get the date (2020.10.10)
// for each transaction in our datastore we will change its date to march the format above i.e 1344567 => 2020.10.10
//If we find a match after we change it, we can add the match/transaction into aan array

//Tip: Array.Filter, Array.Find etc!
