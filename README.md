# Tasq
ToDo app for the lazy!

## Problem
- i struggled to follow tasks that are bound to specific time periods
- there's always the guilt of missing a period, and the confusion on how best to make up for that
- u may start with a relatively empty calendar of tasks... but pretty soon all your time slots are filled up... making it more likely for you not to do all the tasks in the day, and harder to make up for missed tasks
- time-based tasks require context switching that may not be healthy or ideal for u
- it's impossible to accurately estimate how long it would take to complete a task; time-based tasks force u to do that.
- some tasks require u to focus on them, no matter how long it takes to complete them
- time management is a means; the end is productivity (getting stuff done)

## Solution
- I recently worked on a concurrency limiter where requests to a backend API where rate-limited not based on some arbitrary number but based on the number of active requests. Once a request was done processing, another one from a queue could begin. Requests were also rate-limited based on "context." So, requests under one context could be more limited than requests under another context. This ToDo app takes a similar approach. You create to-do tasks under various contexts, and those tasks automatically get moved from the backlog to the forefront in such a way that isn't overwhelming.
- i just joined a new [team](https://phenixrts.com/en-us/); this is also an opportunity for me to learn their tech tools

## target users
- if you have routine tasks, this is not for you.
- if you have tasks that require creativity, making it impossible and less ideal to sandbox into a time slot on a calendar, this is for you.

## How it Works
