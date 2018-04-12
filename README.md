# Snapshot Training for Jest

Based on examples provided by the Jest project, this project will teach you about how to use snapshot testing and how we can automate our assertions using it.

## Enzyme: Rule of thumb

* Shallow Rendering: Always start with shallow()
* Full Rendering: Use mount() for lifecycle methods and optionally children
* Static Rendering: Use render() to test children with if you don't care about lifecycle methods

## Snapshots can be used to test

* Text
* Objects
* Arrays
* DOM