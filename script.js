let monthlyBudget = 2000;


/*
   Array containing all expense records.

   Each expense is stored as an object.
*/

let expenses = [
    {
        name: "Groceries",
        amount: 45,
        category: "Food",
        date: "2026-09-10"
    },

    {
        name: "Bus Fare",
        amount: 5,
        category: "Transport",
        date: "2026-09-11"
    },

    {
        name: "Netflix",
        amount: 12,
        category: "Entertainment",
        date: "2026-09-12"
    }
];


/* ========================================
   2. GET HTML ELEMENTS
   ======================================== */

const budgetForm =
    document.getElementById("budget-form");


const budgetInput =
    document.getElementById("budget-input");


const expenseForm =
    document.getElementById("expense-form");


const expenseName =
    document.getElementById("expense-name");


const expenseAmount =
    document.getElementById("expense-amount");


const expenseCategory =
    document.getElementById("expense-category");


const expenseDate =
    document.getElementById("expense-date");


const budgetDisplay =
    document.getElementById("budget-display");


const expenseDisplay =
    document.getElementById("expense-display");


const balanceDisplay =
    document.getElementById("balance-display");


const budgetStatus =
    document.getElementById("budget-status");


const expenseTableBody =
    document.getElementById("expense-table-body");


const expenseCount =
    document.getElementById("expense-count");


const emptyState =
    document.getElementById("empty-state");


const message =
    document.getElementById("message");


/* ========================================
   3. CALCULATE TOTAL EXPENSES
   ======================================== */


/*
   This function uses a loop to process
   every expense stored in the array.
*/

function calculateTotalExpenses() {

    let total = 0;


    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

    }


    return total;
}


/* ========================================
   4. CALCULATE REMAINING BALANCE
   ======================================== */

function calculateRemainingBalance() {

    const totalExpenses =
        calculateTotalExpenses();


    return monthlyBudget - totalExpenses;
}


/* ========================================
   5. DETERMINE BUDGET STATUS
   ======================================== */


/*
   Conditional statements are used to
   make decisions based on the budget.
*/

function getBudgetStatus() {

    const balance =
        calculateRemainingBalance();


    const totalExpenses =
        calculateTotalExpenses();


    if (monthlyBudget <= 0) {

        return {
            text: "Set a monthly budget",
            type: "warning"
        };

    }


    if (totalExpenses > monthlyBudget) {

        return {
            text: "Budget exceeded",
            type: "danger"
        };

    }


    if (totalExpenses === monthlyBudget) {

        return {
            text: "Budget fully used",
            type: "warning"
        };

    }


    if (balance <= monthlyBudget * 0.20) {

        return {
            text: "Low balance remaining",
            type: "warning"
        };

    }


    return {
        text: "Within budget",
        type: "success"
    };
}


/* ========================================
   6. DISPLAY MESSAGE
   ======================================== */

function showMessage(text, type) {

    message.textContent = text;

    message.className =
        "message show " + type;

}


/* ========================================
   7. UPDATE DASHBOARD
   ======================================== */


/*
   DOM manipulation is used here to update
   information directly on the webpage.
*/

function updateDashboard() {

    const totalExpenses =
        calculateTotalExpenses();


    const remainingBalance =
        calculateRemainingBalance();


    const status =
        getBudgetStatus();


    /*
       Update budget card.
    */

    budgetDisplay.textContent =
        "$" + monthlyBudget.toFixed(2);


    /*
       Update expenses card.
    */

    expenseDisplay.textContent =
        "$" + totalExpenses.toFixed(2);


    /*
       Update remaining balance card.
    */

    balanceDisplay.textContent =
        "$" + remainingBalance.toFixed(2);


    /*
       Update status.
    */

    budgetStatus.textContent =
        status.text;


    /*
       Change status color.
    */

    budgetStatus.style.color =
        getStatusColor(status.type);


    /*
       Update expense count.
    */

    expenseCount.textContent =
        expenses.length +
        (expenses.length === 1
            ? " expense"
            : " expenses");


    /*
       Show warning or success message.
    */

    if (monthlyBudget > 0) {

        if (status.type === "danger") {

            showMessage(
                "Warning: Your expenses have exceeded your monthly budget.",
                "danger"
            );

        } else if (status.type === "warning") {

            showMessage(
                "Your remaining budget is getting low.",
                "warning"
            );

        } else {

            showMessage(
                "Your spending is currently within your budget.",
                "success"
            );

        }

    }


    /*
       Display the expense records.
    */

    displayExpenses();
}


/* ========================================
   8. STATUS COLOR
   ======================================== */

function getStatusColor(type) {

    if (type === "danger") {

        return "#dc2626";

    }


    if (type === "warning") {

        return "#d97706";

    }


    return "#16a34a";
}


/* ========================================
   9. DISPLAY EXPENSES
   ======================================== */


/*
   This function uses a loop to display
   every expense in the array.
*/

function displayExpenses() {

    /*
       Clear existing table rows.
    */

    expenseTableBody.innerHTML = "";


    /*
       Check if there are no expenses.
    */

    if (expenses.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    /*
       Loop through the expense array.
    */

    for (
        let i = 0;
        i < expenses.length;
        i++
    ) {

        const expense =
            expenses[i];


        /*
           Create a new table row.
        */

        const row =
            document.createElement("tr");


        /*
           Create table cells.
        */

        const numberCell =
            document.createElement("td");


        const nameCell =
            document.createElement("td");


        const amountCell =
            document.createElement("td");


        const categoryCell =
            document.createElement("td");


        const dateCell =
            document.createElement("td");


        /*
           Add information to cells.
        */

        numberCell.textContent =
            i + 1;


        nameCell.textContent =
            expense.name;


        amountCell.textContent =
            "$" + expense.amount.toFixed(2);


        categoryCell.textContent =
            expense.category;


        dateCell.textContent =
            expense.date;


        /*
           Add cells to row.
        */

        row.appendChild(numberCell);

        row.appendChild(nameCell);

        row.appendChild(amountCell);

        row.appendChild(categoryCell);

        row.appendChild(dateCell);


        /*
           Add row to table.
        */

        expenseTableBody.appendChild(row);

    }
}


/* ========================================
   10. BUDGET FORM EVENT
   ======================================== */


/*
   Event listener waits for the user to
   submit the budget form.
*/

budgetForm.addEventListener(
    "submit",
    function (event) {

        /*
           Prevent page refresh.
        */

        event.preventDefault();


        /*
           Convert input to number.
        */

        const newBudget =
            Number(budgetInput.value);


        /*
           Validate input.
        */

        if (
            isNaN(newBudget) ||
            newBudget <= 0
        ) {

            showMessage(
                "Please enter a valid budget greater than zero.",
                "danger"
            );

            return;

        }


        /*
           Store the new budget.
        */

        monthlyBudget =
            newBudget;


        /*
           Update dashboard.
        */

        updateDashboard();


        /*
           Clear input.
        */

        budgetInput.value = "";


        /*
           Display confirmation.
        */

        showMessage(
            "Monthly budget updated successfully.",
            "success"
        );

    }
);


/* ========================================
   11. EXPENSE FORM EVENT
   ======================================== */


/*
   Event listener responds when the user
   submits a new expense.
*/

expenseForm.addEventListener(
    "submit",
    function (event) {

        /*
           Prevent page refresh.
        */

        event.preventDefault();


        /*
           Get values from form.
        */

        const name =
            expenseName.value.trim();


        const amount =
            Number(expenseAmount.value);


        const category =
            expenseCategory.value;


        const date =
            expenseDate.value;


        /*
           Validate the input.
        */

        if (
            name === "" ||
            isNaN(amount) ||
            amount <= 0 ||
            category === "" ||
            date === ""
        ) {

            showMessage(
                "Please complete all expense fields correctly.",
                "danger"
            );

            return;

        }


        /*
           Create a new expense object.
        */

        const newExpense = {

            name: name,

            amount: amount,

            category: category,

            date: date

        };


        /*
           Add the new expense to the array.
        */

        expenses.push(newExpense);


        /*
           Update the dashboard.
        */

        updateDashboard();


        /*
           Clear the form.
        */

        expenseForm.reset();


        /*
           Confirmation message.
        */

        showMessage(
            "Expense added successfully.",
            "success"
        );

    }
);


/* ========================================
   12. INITIAL DISPLAY
   ======================================== */


/*
   Display the initial expense records
   when the page loads.
*/

updateDashboard();