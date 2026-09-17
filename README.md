# Web-dev6

# SpendWise Dashboard

## Project Description

SpendWise is a personal budgeting and expense tracking web application.

The project was initially developed as a static dashboard using HTML and CSS. It has now been improved with JavaScript to make the application interactive.

Users can:

- Set a monthly budget.
- Add expense records.
- Select an expense category.
- Enter an expense date.
- View all recorded expenses.
- See the total amount spent.
- See the remaining balance.
- Receive feedback about their budget status.

---

# Improvements Made This Week

The main improvement this week was transforming SpendWise from a static dashboard into an interactive budgeting application.

The following JavaScript concepts were implemented:

- Conditional statements
- Arrays
- Objects
- Loops
- DOM manipulation
- Event listeners
- Form handling
- Input validation
- Budget calculations
- Dynamic content updates

---

# 1. Conditional Statements

Conditional statements are used to make decisions based on the user's financial information.

For example, SpendWise checks whether the user's expenses have exceeded their budget.

```javascript
if (totalExpenses > monthlyBudget) {

    return {
        text: "Budget exceeded",
        type: "danger"
    };

}
````

The application also checks whether:

* The budget has not been set.
* The budget has been exceeded.
* The entire budget has been used.
* The remaining balance is low.
* The user is still within their budget.

This allows SpendWise to provide appropriate feedback to the user.

---

# 2. Arrays

An array is used to store multiple expense records.

```javascript
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
    }
];
```

Instead of creating separate variables for every expense, all expenses are stored inside one array.

This makes it easier to add and process multiple records.

---

# 3. Objects

Each expense is represented as an object.

For example:

```javascript
const newExpense = {

    name: name,

    amount: amount,

    category: category,

    date: date

};
```

Each expense object contains:

* Name
* Amount
* Category
* Date

The new expense is then added to the array using:

```javascript
expenses.push(newExpense);
```

---

# 4. Loops

Loops are used to process the expense records stored in the array.

For example, the total expenses are calculated using a `for` loop:

```javascript
for (let i = 0; i < expenses.length; i++) {

    total += expenses[i].amount;

}
```

The same type of loop is used to display each expense in the HTML table.

This allows the application to process any number of expense records without manually writing HTML for every record.

---

# 5. DOM Manipulation

The Document Object Model (DOM) allows JavaScript to interact with HTML elements.

SpendWise uses DOM manipulation to update the dashboard.

For example:

```javascript
budgetDisplay.textContent =
    "$" + monthlyBudget.toFixed(2);
```

The total expenses are also updated:

```javascript
expenseDisplay.textContent =
    "$" + totalExpenses.toFixed(2);
```

The remaining balance is updated using:

```javascript
balanceDisplay.textContent =
    "$" + remainingBalance.toFixed(2);
```

JavaScript also creates table rows dynamically using:

```javascript
document.createElement("tr");
```

This means the expense table changes automatically whenever a new expense is added.

---

# 6. Event Listeners

Event listeners allow the application to respond to user actions.

The budget form uses a submit event:

```javascript
budgetForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

    }
);
```

The expense form also uses a submit event:

```javascript
expenseForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

    }
);
```

When the user submits the form:

1. JavaScript captures the input.
2. The input is validated.
3. A new expense object is created.
4. The object is added to the expense array.
5. The dashboard is recalculated.
6. The expense table is updated.
7. A feedback message is displayed.

---

# 7. User Input

The application collects information using HTML forms.

For the budget, the user enters:

* Monthly budget

For expenses, the user enters:

* Expense name
* Amount
* Category
* Date

JavaScript reads these values using DOM methods such as:

```javascript
expenseName.value
```

and:

```javascript
expenseAmount.value
```

---

# 8. Budget Calculations

SpendWise calculates the total expenses by processing every record in the expenses array.

The remaining balance is calculated using:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

For example:

```text
Monthly Budget = $2,000
Total Expenses = $500

Remaining Balance = $1,500
```

---

# 9. Dynamic Expense Table

The expense table is not manually updated every time a user adds an expense.

Instead, JavaScript generates the table rows dynamically.

The process is:

```text
User submits expense
        ↓
Expense object created
        ↓
Expense added to array
        ↓
Array processed with loop
        ↓
Table row created
        ↓
Expense displayed on webpage
```

---

# 10. Budget Feedback

SpendWise provides different messages depending on the user's spending.

### Within budget

The application displays:

```text
Your spending is currently within your budget.
```

### Low balance

The application displays:

```text
Your remaining budget is getting low.
```

### Budget exceeded

The application displays:

```text
Warning: Your expenses have exceeded your monthly budget.
```

This demonstrates the use of conditional statements.

---

# 11. Input Validation

The application validates user input before processing it.

For example, the application checks whether:

* The expense name is empty.
* The amount is a valid number.
* The amount is greater than zero.
* A category has been selected.
* A date has been selected.
* The monthly budget is greater than zero.

Invalid input produces an error message instead of being added to the application.

---

# 12. Challenges Encountered

One challenge was ensuring that the dashboard updated whenever a new expense was added.

The problem was solved by creating an `updateDashboard()` function.

This function:

1. Calculates the total expenses.
2. Calculates the remaining balance.
3. Determines the budget status.
4. Updates the summary cards.
5. Updates the expense count.
6. Displays the expense records.
7. Displays appropriate feedback.

Another challenge was preventing the form from refreshing the page when the user submitted an expense.

This was solved using:

```javascript
event.preventDefault();
```

This allows JavaScript to process the form without reloading the webpage.

---

# 13. Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* DOM Manipulation
* JavaScript Events
* JavaScript Arrays
* JavaScript Functions
* Conditional Statements
* Loops

---

# 14. Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 15. How to Run

1. Clone the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Enter a monthly budget.
5. Add expenses using the Add Expense form.
6. View the updated dashboard.
7. Open browser Developer Tools if you want to inspect the JavaScript.

---

# 16. Testing Example

Set the monthly budget to:

```text
2000
```

Add:

```text
Groceries
45
Food
```

Then add:

```text
Transport
100
Transport
```

SpendWise should automatically calculate:

```text
Total Expenses = $145
Remaining Balance = $1,855
```

The expense records should also appear in the table.

---

# Author