# Testing React
---
## Why unit test ?
* Greater confidence when changing code
* Catch regressions - when you break something, you know where exactly it broke if you write good tests.
* Easily testable code is usually better code.
* Every change has to be intentional - You can't accidentally just change something and say it works.
* Bragging rights - "Yea we got 100% code coverage" :B

Unit testing is about developer happiness and being confident about your own code and not about just getting it done and it is needed inspite of end to end testing and QA.

>Unit testing Isn't everything though!

## Enzyme . Why Enzyme ?

* Open sourced and written by Airbnb
* It is a higher level abstraction over the React's test utils.
* It is officially recommended by the React team.
* Really good docs.

## What should we test ?

![what_shoul_we_test](Misc/Resources/what_shoul_we_test.png)
**Anything that is not static**