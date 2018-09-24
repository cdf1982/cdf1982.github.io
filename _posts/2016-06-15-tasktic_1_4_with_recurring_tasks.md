---
layout: post
title: Tasktic 1.4 with recurring tasks
description:
image:
tags: [tasktic]
---
Since launch, the most requested feature for Tasktic has been the possibility to **repeat tasks**. I assume this is because we all want to pay our bills on time, and maybe reinforce a few good habits.

I'm happy to announce that **Tasktic 1.4 is now available in the [App Store](https://geo.itunes.apple.com/us/app/tasktic-manage-your-tasks/id1036139076?mt=8&at=1000l3L9&ct=website), and it finally introduces recurring tasks** for Tasktic Pro and Tasktic Pro Big Supporter.

![tasktic_recurring_tasks]({{ site.baseurl }}/assets/images/blog/2016-06-15-tasktic_1_4_with_recurring_tasks/tasktic_recurring_tasks.jpg)

Recurring tasks are conceptually harder than they seem: *do you want them to repeat forever, or until a certain date?* *Is the repetition frequency set in hours, days, weeks or months?* *Do you want to repeat a task every Friday and Sunday on odd weeks?* *Does a task repeat if its previous instance hasn't been completed yet, or it stays overdue and does not notify you again?*

I believe Tasktic 1.4 answers to those questions are reasonable and flexible:

-   You can configure certain activities to repeat, both when you create a new task or when you edit an existing one. **By default, a new task does not repeat unless you decide it to**.

-   **Tasks can repeat every *n* hours, days, weeks or months**.

-   When you select a task to repeat with weekly frequency, you can pick on which weekdays (Monday, Friday, etc...) it will repeat. And of course **you can select multiple weekdays**.

-   You can create a monthly recurring task today and set its first due date 4 months in the future; **the first due date acts like a "start date"**, so you'll be notified of this task for the first time in 4 months, then again 2 months later, and so on...

-   **By default, a task repeats forever**, until you disable the repetition or delete it. But **you can also set an end date**, after which the task will not repeat.

-   **A recurring task can have a reminder** (visual and audio notification), or can repeat without notifying you: if you enable the notification when creating a recurring task, all its subsequent instances will also have a notification.

-   **A task repeats if you completed its previous instance, otherwise it stays overdue.**
    This is *really* important and deserves an example: let's say you created a *"read a book"*task, with a reminder, that will repeat every Saturday morning at 10.00.\
    The first Saturday comes, Tasktic sends you a notification and you remember to read a few chapters of [that](https://geo.itunes.apple.com/us/book/rogue-lawyer/id991450325?mt=11&at=1000l3L9) great Grisham novel; then you mark the task as completed, and immediately a new copy of it (completely identical, except for the due date) is automatically created by Tasktic for the next Saturday.
    A week later, as expected you receive a notification, but this time you're too busy playing [You Must Build a Boat](https://geo.itunes.apple.com/us/app/you-must-build-a-boat/id811397653?mt=8&at=1000l3L9) on your iPhone and skip the task. At this point, the *"read a book"* task stays active, and overdue, in your list of uncompleted activities, so you can maybe complete it later. But You Must Build a Boat is such a good game, and in the next week you do nothing but playing with it; when the next Saturday comes, you DON'T receive a notification reminding you to read.
    Why? Because you didn't complete the previous, overdue instance of the task, so a new one hasn't been created. When you think about it, this approach makes absolute sense, but *it is important that you are aware of this behavior* when planning and completing your recurring tasks.

-   When you complete an overdue recurring task, **its next instance might be in the past**, because **Tasktic doesn't skip occurrences**: let's continue with the previous example and say that after another week you finally beat You Must Build a Boat in hard mode; now you have a life again, and you catch up with reading, so you finally complete that overdue *"read a book"* task from two weeks ago.\
    After that, Tasktic automatically creates the next instance of the task, but the next *"read a book"* task is also overdue, with the due date set to the past Saturday, and not the next one.
    Why this behavior? Because not all tasks can actually be skipped for a week without consequences, and *it's not Tasktic job to decide to omit one or more occurrences of a recurring task*.

-   Of course, **you can edit the repetition parameters for an active (uncompleted) recurring task every time you want**, and the new settings will apply from that moment going forward. So if you skipped a few weeks of an activity (no judgment, we all do), you can edit that task and move its next due date to a future date, when you actually want to be reminded about it.

-   When you're configuring the repetition parameters, a **dynamic label** at the bottom of the screen will tell you in real time how often this task will repeat and when its first occurrence will be.

-   Last but not least, we're introducing **two new fanTasktic buttons** to help you recognize recurring tasks at a glance:

This task will repeat

![This task will repeat]({{ site.baseurl }}/assets/images/blog/2016-06-15-tasktic_1_4_with_recurring_tasks/tasktic_repeating_task.png)

This task task will repeat and also has a due date

![ This task task will repeat and also has a due date ]({{ site.baseurl }}/assets/images/blog/2016-06-15-tasktic_1_4_with_recurring_tasks/tasktic_repeating_task_with_due_date.png)

Recurring tasks might sound complicated, but actually they're not: **Tasktic behaves the way you would expect it to**, but I believe a detailed explanation of the thought process behind every decision was in order for such an important feature.

**I suggest you to create a couple of recurring tasks to familiarize with Tasktic's new capabilities**, and in case you need help, you can find a **tutorial inside Tasktic's Settings**, and of course you should not hesitate contacting us via [email](mailto:tasktic@cdf1982.com) or [Twitter](https://twitter.com/taskticapp).

We took our time to ship recurring tasks in a way we felt complete, powerful and clever; we hope you'll enjoy this feature. If so, please take the time to **leave a review** in the App Store: they really make a difference!