---
title: "COBOL Fundamentals: Data Types & Variables"
excerpt: ""
pubDate: "2025-02-20"
tag: "cobol"
url: "/articles/cobol-data-types-variables"
---
## Data Types in COBOL
The COBOL standard categorizes data based on its purpose into five distinct types. These are:

1. **Alphabetic** - Used when you need to include letters (e.g., A-Z, a-z). While it might seem ideal for storing names, you should be cautious, as names can contain non-alphabetic characters. This data type can also include spaces.
2. **Alphanumeric** - Used when you need to include letters, numbers, and special characters (e.g., A-Z, 0-9, %, #). This type is most commonly used for storing names, coupon codes, or other mixed-type information.
3. **Numeric** - Used for numbers (e.g., 0-9). This data type is designed for arithmetic operations and calculations, making it essential for financial, scientific, and statistical applications.
4. **Alphanumeric Edited** - Used to format alphanumeric data for display purposes. This type allows for the insertion of fixed characters (e.g., hyphens, slashes, or spaces) into alphanumeric data.
5. **Numeric Edited** - Used to format numeric data for display purposes. This type allows for the insertion of fixed characters (e.g., currency symbols, commas, or decimal points) into numeric data.

### A Note on Edited Data Types 🤦‍♂️
The **Alphanumeric Edited** and **Numeric Edited** data types can be a bit tricky at first — but simply put, it's COBOL's way of saying, "Let's make this data look fancy!" They're designed for formatting data for display, like adding commas to numbers, currency symbols, or even hyphens in text.

## Variables in COBOL
In COBOL, all variables are defined in the `DATA DIVISION`, which is where your COBOL program defines and stores all the data it will use. COBOL variables are hierarchical and are made up of level numbers, `PICTURE` (or `PIC`) clauses, and optional default value (more on this later on):
1. A **LEVEL-NUMBER**, which is how we determine if it's an individual field, group item, or elementary item. So, what the differences? They are:
   * **01** Indicates that this is a top level item. It can be either standalone or the start of a group item. I'd like point out that anything starting with a ZERO is pronounced "OH" followed by the level number (e.g., OH-ONE, OH-TWO).
   * **02 - 49** - Indicates subordinate levels. These are used within groups to break down data into smaller, more manageable chunks — think of an **OBJECT** in modern programming languages.
   * **66** - This is used for what's known as RENAMES. I've not used this yet, but it seems similar to creating a view in SQL, it allows you to create an alternative view of the same data.
   * **77** - Indicates a standalone item which doesn't need to be not part of a group.
   * **88** - Most often used for condition names. They're incredibly useful for making your code more readable. The closest comparison I can think of might be an ENUM in modern languages. However, you can't really access it like like an ENUM (e.g., ORDER-STATUS.NEW-ORDER). Instead, you use the condition name in logical statements.
2. A **VARIABLE NAME**, refers to the name we'll use to access this item later on in the program. Like in every programming language it has some rules; one of which goes against everything I was thought about variables 😀. Getting back on track now, these rules are:
   * **Length** - A variable name can be as short as 1 character (please don't do this 😱—it's terrible for readability!!) and as long as 30 characters.
   * **Allowed Characters** - Pretty standard stuff here, they can include letters (A-Z a-z), numbers (0-9), and hypens (-). 
   * **Starting & Ending Characters** - In COBOL they can start and end with a letter or a number; that's right, a number!. However, because COBOL is not totally insane, you cannot start or end your variable names with a hypen. At least they choose to put some restrictions on the names 🤣.
   * **No Reserved Words** - This one makes sense. Don't use reserved words (e.g., DISPLAY, ACCEPT, MOVE).
3. A **PICTURE (or PIC) Clause** - A PICTURE (or PIC) Clause - This is where all kinds of magic happens. This is how we define the type, size, and display format of a variable, using symbols (e.g., A, 9, X). Formatting is actually one of the neatest tricks of COBOL. I can't tell you how many times I've pulled my hair out trying to make something look a certain way when it's displayed. Well, COBOL does the heavy lifting for you—once you wrap your head around how it works! We'll dive deeper into this shortly.
4. A  **VALUE Clause** - This is where you can set an initial value for your variable. It's also optional.

### A PICTURE Is Worth A Thousand Words
As mentioned earlier, the **PICTURE** clause allows you to define the structure of your data and format it in a way that makes you happy. While you might find references to the full keyword **PICTURE** in older code, most examples you'll encounter today use the abbreviated keyword **PIC**. I think it really comes down to either personal preference or your company's programming style guide. That said, the TL;DR on the PICTURE clause is that it's a blueprint for how your data should appear.

Now, like any blueprint the **PICTURE** clause contains some special symbols that at first clance will make you go "HUH!". I'll do my best to make explain them though, and while there are more than listed here, I'm only going to touch on the most common symbols. With symbols you can either use a single character and tell it the length between parenthesis (e.g., PIC 9(5)), or your can long hand it, like: `PIC 99999`. I don't recommend taking the long route though.

#### Common Symbols
The following are probably the most commonly used symbols based on what I've learned so far.

1. **9** - This symbol is pretty self explanitory and represents a number field. Example: `PIC 9(5)`, defines a 5-digit numeric field.
2. **A** - This respresents an alphabetic field. Example: `PIC A(10)`, defines a 10-digit numeric field.
3. **X** - This represents an alphanumeric field. Example: `PIC X(10)`, defines a 10-digit alphanumeric field.
4. **V** - This is where things get a little interesting. This represents an an implied decimal point. Example: `PIC 9(5)V99`, defines a 7-digit numberic field with two decimal places.
5. **S** - This indicates a signed number (e.g., -5.00, +5.00). I've not used this one yet.

## Assigning Values to Variables
In COBOL, you can assign values to variables using the **MOVE** statement. This is one of the most common ways to initialize or update variables in your program.

## Practical Examples
If you're like me, reading about something is fine and dandy, but seeing the code is more helpful. That said, let's dive into some code examples.

### Example 1: Assigning a Value to a Numeric Field
```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. EXP01.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 SALARY PIC 9(5).
       PROCEDURE DIVISION.
         MOVE 50000 TO SALARY.
         DISPLAY "Salary: " SALARY.
         STOP RUN.
       END PROGRAM EXP01.
       
```
**Output:**
```
Salary: 5000
```

### Example 2: Assigning a Value to an Alphanumeric Field
```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. EXP02.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 EMPLOYEE-NAME PIC X(20).
        PROCEDURE DIVISION.
           MOVE "John Doe" TO EMPLOYEE-NAME.
           DISPLAY "Employee Name: " EMPLOYEE-NAME.
           STOP RUN.
       END PROGRAM EXP02.
       
```
**Output:**
```
Employee Name: John Doe
```

### Example 3: Assigning a Value to a Grouped Field
For this example we're going to go over a couple ways to accomplish the task at hand. In COBOL, you can assign values to individual fields within a group using MOVE ... TO, or you can move data directly into the group using MOVE ... TO IN. In larger COBOL applications, you might encounter multiple groups with fields of the same name (e.g., EMPLOYEE-NAME in different groups). Using MOVE ... TO IN ensures values are assigned to the correct field, avoiding potential bugs or confusion. Let's take a look at a couple examples:

**MOVE ... TO**
This pair of statements allows you to assign values to individual fields within a group.

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. EXP03A.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 EMPLOYEE-DETAILS.
          05 EMPLOYEE-NAME PIC X(20).
          05 EMPLOYEE-ID   PIC 9(5).
       PROCEDURE DIVISION.
           MOVE "Jane Smith56789" TO EMPLOYEE-DETAILS.
           DISPLAY "Employee Name: " EMPLOYEE-NAME.
           DISPLAY "Employee ID: " EMPLOYEE-ID.
           STOP RUN.
       END PROGRAM EXP03A.
       
```

**MOVE ... TO ... IN**
This group of statements allows you to move data directly into the group, even if they share similar names. While I won't say never, I will say it shouldn't happen within smaller COBOL program, but if you work in a larger COBOL program you're probably going to see this.

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. MULTIPLE-GROUPS.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 EMPLOYEE-DETAILS.
          05 NAME PIC X(20).
       01 MANAGER-DETAILS.
          05 NAME PIC X(20).
       PROCEDURE DIVISION.
      *> Assigning values to fields in EMPLOYEE-DETAILS
           MOVE "John Doe" TO NAME IN EMPLOYEE-DETAILS.
           DISPLAY "Employee Name: " NAME IN EMPLOYEE-DETAILS.

      *> Assigning values to fields in MANAGER-DETAILS
           MOVE "Jane Smith" TO NAME IN MANAGER-DETAILS.
           DISPLAY "Manager Name: " NAME IN MANAGER-DETAILS.

           STOP RUN.
       END PROGRAM MULTIPLE-GROUPS.
       
```

### Example 4: Dates
Another common example we'd find in a business application might be a date. Now, this is one place where COBOL, at least in all my research, seems to be lacking. The COBOL Standard itself does not natively support a dedicated **DATETIME** field type. So, if we want to store a date, we need to do the work ourselves. Here are a couple of examples of formatting a date.

**Date as Grouped Field**

If you want to store a date in a structured way, you can use a grouped field to break it down into its components (year, month, and day). Here's an example:

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. CBLDATES.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 BIRTH-DATE.
          02 BIRTH-YEAR   PIC 9(4).
          02 BIRTH-MONTH  PIC 9(2).
          02 BIRTH-DAY    PIC 9(2).
       PROCEDURE DIVISION.
           MOVE 2025 TO BIRTH-YEAR
           MOVE 02   TO BIRTH-MONTH
           MOVE 21   TO BIRTH-DAY
           DISPLAY "Year: " BIRTH-YEAR
           DISPLAY "Month: " BIRTH-MONTH
           DISPLAY "Day: " BIRTH-DAY
           STOP RUN.
       END PROGRAM CBLDATES.

```


**Date as Individual Edited Field**

If you want to store and display a date in a specific format (e.g., MM/DD/YYYY), you can use an Alphanumeric Edited field. Here's an example:

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. CBLDATES.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 BIRTH-DATE PIC 99/99/9999.
       PROCEDURE DIVISION.
           MOVE 08151985 TO BIRTH-DATE
           DISPLAY BIRTH-DATE
           STOP RUN.
       END PROGRAM CBLDATES.

```

In this example, the **PICTURE** clause defines the format of the date, with slashes (/) inserted at fixed positions. The MOVE statement is then used to assign a raw date to **BIRTH-DATE**, and COBOL, in turn, works its magic and formats the date as: `08/15/1985`.

## Summary
In this article, we explored the fundamentals of COBOL data types and variables, including how to define and format them using PICTURE clauses. We also looked at practical examples of assigning values to variables and formatting data for display. By mastering these concepts, you'll be well-equipped to handle data effectively in COBOL programs, whether you're working with numeric calculations, alphanumeric strings, or formatted displays.

If you're an experienced COBOL developer and spot any inaccuracies or areas where I could improve my explanations, I'd greatly appreciate your feedback! And if you're new to COBOL but found this article interesting, I'd love to hear from you as well. Your thoughts and questions are always welcome—I enjoy learning and growing alongside others in this journey!