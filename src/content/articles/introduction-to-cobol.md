---
title: "Introduction to COBOL"
url: "/articles/introduction-to-cobol"
pubDate: "2025-02-13"
tag: "cobol"
excerpt: "Discover COBOL basics, history, and relevance in this article. Learn why this enduring language still matters in modern tech."
---
## The Problem
As businesses began relying more heavily on computers for data processing—such as payroll, inventory, banking, and more—in the 1950s, it became clear that change was needed. At the time, each computer manufacturer used its own proprietary programming language, which was often tied to specific hardware. For instance, languages like FORTRAN and Assembly required a strong mathematical background, making them inaccessible to non-technical users.

## The Solution
Recognizing the inefficiency and cost of porting programs across systems, the U.S. Department of Defense (DoD) spearheaded efforts to create a standardized programming language that could be used universally. With this goal in mind, a group of experts gathered at the Conference on Data Systems Languages (CODASYL) in 1959. Among them was [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper), a pioneering computer scientist who was a driving force behind the development of the first compiler, playing a pivotal role in its creation alongside other contributors.

Out of this conference came the COmmon Business-Oriented Language (COBOL), a revolutionary language designed to meet the needs of business data processing. Among the features that made COBOL groundbreaking was its English-like syntax, which allowed non-technical people to read, understand, and even write programs. This was similar to how modern drag-and-drop website builders have democratized—or, some might argue, disrupted—web development today.

## The Structure of a COBOL program
Now that we've learned a bit about COBOL and some of the problems it solved, we'll take a look at the structure of a COBOL program.

### Columns in COBOL
Since COBOL dates back to the era of punched cards—where data was physically encoded on cards—it's no surprise that its code is organized into specific column-based areas, each serving a unique purpose.

* Columns 1-6 - known as the Sequence Number Area, are often ignored in modern COBOL implementations.
* Column 7 - Column 7, known as the Indicator Area, is primarily used for comments (marked with *) or left blank for regular code lines in modern COBOL programming.
* Columns 8-11: Area A (Margin A) - Used for division headers, section headers, paragraph names, and level indicators.
* Columns 12-72: Area B (Margin B) - Contains the actual COBOL statements, data definitions, and procedural code.
* Columns 73-80 - known as the Identification Area, are rarely used in modern COBOL programming.

### The Structure of a COBOL program
Because COBOL is English-like, perhaps it comes as no surprise that a COBOL program is structured much like a document, with divisions, sections, paragraphs, sentences, and statements. Let's explore these a little more.

* Divisions: Major segments of a COBOL program that categorize different aspects like program identification, environment setup, data definitions, and procedural logic.
* Sections: Group related functionality within divisions.
* Paragraphs: Small blocks of code within sections for specific tasks.
* Sentences: Groups of statements that perform operations within paragraphs.
* Statements: Individual commands or instructions within sentences.

### The Four Divisions of a COBOL program
Every COBOL program consists of four divisions; however, only two are required to write a basic COBOL program: the IDENTIFICATION DIVISION and the PROCEDURE DIVISION.

#### IDENTIFICATION DIVISION
The IDENTIFICATION DIVISION is mandatory for every COBOL program. Without it, the program is invalid. It provides a place to store some valuable metadata, such as the program name, author, and other details. Within this division, the PROGRAM-ID paragraph must appear directly after the IDENTIFICATION DIVISION and is the only required paragraph. Other optional paragraphs include AUTHOR, DATE-WRITTEN, DATE-COMPILED, and SECURITY.

#### ENVIRONMENT DIVISION
This division, which follows the IDENTIFICATION DIVISION, describes the system environment where the program will run, including:

1. The computer hardware and operating system.
1. Any I/O devices (e.g., printers, disk drives, etc.) the program will use.

The ENVIRONMENT DIVISION is divided into two sections:

* CONFIGURATION SECTION - Describes the system environment.
* INPUT-OUTPUT SECTION - Defines files and I/O devices, controlling how data is read from or written to these resources.

#### DATA DIVISION
This is where your COBOL program defines and stores all the data it will use. It's like the program's "storage room" for variables, records, and files.

The DATA DIVISION is divided into the following sections:

1. FILE SECTION - Defines the structure of files used for input/output.
1. WORKING-STORAGE SECTION - Stores temporary data and variables used during program execution.
1. LINKAGE SECTION - Defines data shared between programs (used in subprograms).

#### PROCEDURE DIVISION
The PROCEDURE DIVISION is mandatory for any COBOL program, as it contains the logic and operations that bring the program to life. This is where you define the logic, operations, and all the processing that will occur happens.

### A Basic COBOL Program
If you have prior programming experience, this program will look familiar. It's the basic 'Hello World' program.

We start by declaring our IDENTIFICATION DIVISION followed by a PROGRAM-ID, which is the only required paragraph in this division.

Next, we declare the PROCEDURE DIVISION, which is where the action happens. To display output, we use the DISPLAY statement, which writes to the output device. While this is typically a terminal screen today, it was often a printer in the past.

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

As I continue to learn COBOL, I welcome any feedback or corrections. Please let me know, and I'll update the article accordingly. 

## Acknowledgments
Big thanks to `harrywwc`, a knowledgeable COBOL enthusiast who provided invaluable feedback on this article, helping me refine the details and make it more accurate. Your insights were spot on!