let questions = [
  {
    question: "What does SQL Stand for?",
    answers: [
      {
        text: "Structured Question Language",
        correct: false,
      },
      {
        text: "Strong Question Language",
        correct: false,
      },
      {
        text: "Structured Query Language",
        correct: true,
      },
      {
        text: "Structured Question Language",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question: "Which SQL Statement is used to extract Data from a Database?",
    answers: [
      {
        text: "EXTRACT",
        correct: false,
      },
      {
        text: "GET",
        correct: false,
      },
      {
        text: "OPEN",
        correct: false,
      },
      {
        text: "SELECT",
        correct: true,
      },
    ],
    selectval: false,
  },
  {
    question: "Which SQL Statement is used to Delete Data from database?",
    answers: [
      {
        text: "DELETE",
        correct: true,
      },
      {
        text: "REMOVE",
        correct: false,
      },
      {
        text: "COLLAPSE",
        correct: false,
      },
      {
        text: "REMOVE",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question: "Which SQL Statement is used to Insert new data in a Database?",
    answers: [
      {
        text: "INSERT INTO",
        correct: true,
      },
      {
        text: "ADD RECORD",
        correct: false,
      },
      {
        text: "INSERT NEW",
        correct: false,
      },
      {
        text: "ADD NEW",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question: "How do you select column name FirstName from table Persons?",
    answers: [
      {
        text: "SELECT FirstName FROM Persons",
        correct: true,
      },
      {
        text: "EXTRACT FirstName FROM Persons",
        correct: false,
      },
      {
        text: "SELECT Persons.FirstName",
        correct: false,
      },
      {
        text: "SELECT Persons_FirstName",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question: "How do you select all columns from a table name Persons?",
    answers: [
      {
        text: "SELECT * FROM Persons",
        correct: true,
      },
      {
        text: "EXTRACT FirstName FROM Persons",
        correct: false,
      },
      {
        text: "SELECT Persons.FirstName",
        correct: false,
      },
      {
        text: "SELECT Persons_FirstName",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question:
      "How can you delete the records where FirstName is Peter in the Persons Table",
    answers: [
      {
        text: "DELETE FROM Persons WHERE Firstname = Peter",
        correct: true,
      },
      {
        text: "DELETE ROW FirstName = Peter FROM Persons",
        correct: false,
      },
      {
        text: "Delete FirstName=Peter from Persons",
        correct: false,
      },
      {
        text: "Delete * from Persons",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question:
      "Which SQL can return you the number of records in the Person table?",
    answers: [
      {
        text: "SELECT NO(*) FROM Persons",
        correct: false,
      },
      {
        text: "SELECT LEN(*) FROM Persons",
        correct: false,
      },
      {
        text: "SELECT COLUMNS(*) FROM Persons",
        correct: false,
      },
      {
        text: "SELECT COUNT(*) FROM Persons",
        correct: true,
      },
    ],
    selectval: false,
  },
  {
    question: "Which is the most common type of join in SQL?",
    answers: [
      {
        text: "INSIDE JOIN",
        correct: false,
      },
      {
        text: "INNER JOIN",
        correct: true,
      },
      {
        text: "JOINED",
        correct: false,
      },
      {
        text: "JOINED TABLE",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question: "Which operator is used to select values within a range?",
    answers: [
      {
        text: "BETWEEN",
        correct: true,
      },
      {
        text: "WITHIN",
        correct: false,
      },
      {
        text: "RANGE",
        correct: false,
      },
      {
        text: "RANGE BETWEEN",
        correct: false,
      },
    ],
    selectval: false,
  },
  {
    question:
      "Which operator is used to search for a particular pattern in a column?",
    answers: [
      {
        text: "LIKE",
        correct: true,
      },
      {
        text: "GET",
        correct: false,
      },
      {
        text: "BETWEEN",
        correct: false,
      },
      {
        text: "IN BETWEEN",
        correct: false,
      },
    ],
    selectval: false,
  },
];

export default questions;