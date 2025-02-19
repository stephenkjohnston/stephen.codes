---
title: "Introduction to COBOL"
url: "/articles/introduction-to-cobol"
pubDate: "2025-02-13"
tag: "cobol"
excerpt: "In this article, I attempt to cover the basics of COBOL and part of its history. COBOL, despite its age, remains highly relevant, which is one of the primary reasons I've been exploring it."
---
## The Problem
As businesses began relying more heavily on computers for data processing—such as payroll, inventory, banking, and more—in the 1950s, it became clear that change was needed. At the time, each computer had its own proprietary programming language, which was often hardware-specific. As a result, sharing programs between different systems was incredibly difficult. It's also important to note that programming languages at the time were highly mathematical, making them inaccessible to non-technical users.

## The Solution
Realizing how much money was being wasted on porting programs to different systems, the U.S. Department of Defense (DoD) began advocating for a standardized programming language that could be easily used across different systems. With this goal in mind, a group of experts gathered at the Conference on Data Systems Languages (CODASYL) in 1959. Among them was Grace Hopper, a pioneering computer scientist who invented the first compiler.

Out of this conference came the COmmon Business-Oriented Language (COBOL), a revolutionary language designed to meet the needs of business data processing. Among the features that made COBOL groundbreaking was its English-like syntax, which allowed non-technical people to read, understand, and even write programs. This was akin to how modern drag-and-drop website builders have democratized—or disrupted, depending on your perspective—web development today.

## The Structure of a COBOL program
Now that we've learned a bit about COBOL and some of the problems it solved, we'll take a look at the structure of a COBOL program.

### Columns in COBOL
Since COBOL dates back to the era of punched cards, it’s no surprise that its code is organized into specific areas, each made up of one or more columns with a unique purpose.

* Columns 1-6 - Known as the Sequence Number Area, in modern implementations of COBOL, these columns are often ignored.
* Column 7 - Known as the Indicator Area, in modern COBOL programming, this column is primarily used for comments (with *) or left blank for regular code lines. Other uses of Column 7 (such as /, -, or D) are less common in contemporary COBOL development.
* Columns 8-11: Area A (Margin A) - Used for division headers, section headers, paragraph names, and level indicators.
* Columns 12-72: Area B (Margin B) - Contains the actual COBOL statements, data definitions, and procedural code.
* Columns 73-80 - Known as the Identification Area, in modern COBOL programming, this area is rarely used.

### The Structure of a COBOL program
Because COBOL is English-like, perhaps it comes as no surprise that a COBOL program is structured much like a document, with divisions, sections, paragraphs, sentences, and characters. Let's explore these a little more.

* Divisions: Major segments of a COBOL program that categorize different aspects like program identification, environment setup, data definitions, and procedural logic.
* Sections: Group related functionality within divisions.
* Paragraphs: Small blocks of code within sections for specific tasks.
* Sentences: Groups of statements that perform operations within paragraphs.
* Statements: Individual commands or instructions within sentences.

### The Four Divisions of a COBOL program
Every COBOL program consists of four divisions; however, only two are required to write a basic COBOL program: the IDENTIFICATION DIVISION and the PROCEDURE DIVISION.

#### IDENTIFICATION DIVISION
It is mandatory for every COBOL program. If your program doesn't start with these "magical words", it's not a valid COBOL program. It provides a place to store some valuable metadata, such as the program name, author, and other details. Within this division the the PROGRAM-ID paragraph must appear directly after the IDENTIFICATION DIVISION and is the only required paragraph. Other optional paragraphs include: AUTHOR, DATE-WRITTEN, DATE-COMPILED, and SECURITY.

#### ENVIRONMENT DIVISION
This division must follow the IDENTIFICATION DIVISION and describes the system the program will run on, including:

1. The computer hardware and operating system.
1. Any I/O devices (e.g., printers, disk drives, etc.) the program will use.

The ENVIRONMENT DIVISION is divided into two sections:

* CONFIGURATION SECTION - Describes the system environment.
* INPUT-OUTPUT SECTION - Defines files and I/O devices, controlling how data is read from or written to these resources.

#### DATA DIVISION
This is where your COBOL program defines and stores all the data it will use. It’s like the program’s "storage room" for variables, records, and files.

The DATA DIVISION is divided into the following sections:

1. FILE SECTION - Defines the structure of files used for input/output.
1. WORKING-STORAGE SECTION - Stores temporary data and variables used during program execution.
1. LINKAGE SECTION - Defines data shared between programs (used in subprograms).

#### PROCEDURE DIVISION
The PROCEDURE DIVISION is mandatory for any COBOL program since it's where the program is brought to life. This is where you define the logic, operations, and all the processing that will occur happens.

### A Basic COBOL Program
If you've done any programming before, this program will not shock you. It's the basic 'Hello World' program.

We start by declaring our IDENTIFICATION DIVISION followed by a PROGRAM-ID, which is the only required paragraph in this division.

Next, we declare the PROCEDURE DIVISION, which is where the action happens. Now, because we want to see something, we need to tell COBOL to write something to the output device; these days, it's typically a terminal screen, but back in the day, it was often a printer.

Finally, we instruct COBOL that immediately after it displays Hello World, we want to stop everything, and that's done with the STOP RUN statement.

```cobol
      *******************************************************************
      *                   IDENTIFICATION DIVISION                       *
      *******************************************************************
      * The IDENTIFICATION DIVISION provides metadata about our program,*
      * and is one of two mandatory DIVISIONS in COBOL. The PROGRAM-ID  *
      * is the only required entry within this DIVISION.                *
      *******************************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLOWORLDPROGRAM.
      
      *******************************************************************
      *                     PROCEDURE DIVISION                          *
      *******************************************************************
      * The PROCEDURE DIVISION is where the program's logic is written. *
      *******************************************************************
       PROCEDURE DIVISION.

      * The DISPLAY statement prints the contents to the output device,
      * in this case, the console window.
           DISPLAY 'Hello, World'.

      * The STOP RUN statement ends the program
           STOP RUN.
```

## Summary
In this article, I've described the history and reasoning behind COBOL, the structure of COBOL, and shown you how to write a basic program using COBOL.

As I'm still learning COBOL, if you notice anything that needs correction, please let me know, and I'll do my best to update this article.

