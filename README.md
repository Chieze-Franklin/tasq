# Tasq
ToDo app for the lazy!

## Problem
Try as i may, I always struggle to follow tasks that are bound to specific time periods (between 2PM and 3PM, for instance). Some of the challenges I have with time-based tasks are:
- There's always the guilt that comes with missing a task, and the confusion on how best to make up for that.
- You may start with a relatively empty calendar of tasks but pretty soon all your time slots are filled up, making it more likely that you will not attend to all the tasks in the day. A busy calendar also makes it harder to make up for missed tasks.
- Time-based tasks (and the consequent calendar they create) are not very flexible, making them less than ideal in a fast-paced and/or chaotic environment like a start-up or emergency unit. Emergencies can pop up at any time and last very long, which means you don't get to complete the tasks the emergencies interrupted.
- Time-based tasks require context switching that may not be healthy or ideal for you. Imagine being "in the zone" in whatever creative act you are performning, only to stop because it's time for another (probably very different) activity.
- It's almost impossible to accurately estimate how long it would take to complete a task, especially one that is not routine; time-based tasks force you to create estimates that probably won't be met, potentially throwing your entire calendar into disarray.
- Some tasks require you to focus on them, no matter how long it takes to complete them. This is not easy to achieve with time-based tasks.
- In carrying out a task there are a number of factors outside your control. For instance, a task may need a response from a colleague (who is probably tied up in their own task). The fact that you have alloted 3PM to 3:30PM on your calendar for that task doesn't mean that colleague will be available to help you within that time period.

## Solution
- "timeless" tasks
- I recently worked on a concurrency limiter where requests to a backend API where rate-limited not based on some arbitrary number but based on the number of active requests. Once a request was done processing, another one from a queue could begin. Requests were also rate-limited based on "context." So, requests under one context could be more limited than requests under another context. This ToDo app takes a similar approach. You create to-do tasks under various contexts, and those tasks automatically get moved from the backlog to the forefront in such a way that isn't overwhelming.
- i just joined a new [team](https://phenixrts.com/en-us/); this is also an opportunity for me to learn their tech tools
- Ultimately, time management is a means; the end is productivity (getting stuff done). Tasq focuses of what you have to do, and not when you have to do it.

## target users
- if you have routine tasks, this is not for you.
- if your environment is well-defined and hardly changing, no
- if you have tasks that require creativity, making it impossible and less ideal to sandbox into a time slot on a calendar, this is for you.

## How it Works
