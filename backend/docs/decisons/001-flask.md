# 001 - Flask
Date: 2021-03-02

## Context

Many backend frameworks exist to make building python web applications easier. The trade-offs largely weigh between strict conventions that 'ship' with pre-built tools (e.g. [Django](https://www.djangoproject.com/)) or highly configurable frameworks without the pre-built components (e.g. (e.g [Flask]())). Alternatively, other use cases might require specific technology focused frameworks (e.g. [Tornado](https://www.tornadoweb.org/en/stable/)).

## Decision

We want the ability to build configurable tools without the overhead associated with large libraries and strict conventions. For example, this boilerplate is an extension of boilerplate that Nate wrote circa 2018 - much of that 2018 code is unchanged. We expect to have high code reusability with minimal refactoring for this project.

## Other Considerations

Switching or using another framework shouldn't be limited to this boilerplate if it provides the necessary pieces of software for our project. As an alternative to this project, Django might be very useful for building highly ORM based applications. Also, asynchronous Python projects might be more suited to frameworks like Tornado to be more useful.
