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
I recently worked on a concurrency limiter that limited the number of concurrent requests that could be made to a backend API. Requests were grouped into contexts, and only a certain number of requests per context could hit the backend concurrently. The requests that couldn't get processed were placed in the queues of their respective contexts. Once a request was done processing, another one from a queue could begin. Each request had a wait period; if a request was not processed within its wait period it timed-out. Notice how requests don't get processed at some specified time like 2PM but, rather, get processed when there's capacity for that to happen.

I decided to borrow many of these ideas and apply them to tasks in the Tasq app. You create to-do tasks under various contexts, and those tasks automatically get moved from the backlog to the forefront whenever you have the capacity to handle them (and not at some fixed time).

Ultimately, time management is a means, not an end; the end is productivity (getting stuff done). Tasq focuses of what you have to do, and not when you have to do it.

P.S I recently joined a new [team](https://phenixrts.com/en-us/); this is also an opportunity for me to learn their tech tools as I build this project using the same tools they use.

## How it Works

## Development

#### Setup
```
nvm use
npm i
```

#### Start up
```
npm run start
```

#### Build
```
npm run build
```
