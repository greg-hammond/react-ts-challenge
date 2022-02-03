# react-ts-challenge

Run it live at https://react-ts-challenge.netlify.app

Developers: clone repo, npm install, npm run start

## overview

This project creates a general framework for hosting "challenges" - simple tasks that prompt the user for some input, then does some processing and returns a result.

Challenges are defined in /services/challengeDefs.ts, which exports an array of IChallenge objects. 

Each challenge is shown as a tab; selecting a tab then displays the UI for performing that challenge.  Each challenge has a title, a description, instructions, an input field, and buttons to process or reset the form (well it's not actually a 'form')

Each challenge has its own processing function which takes the user input, processes it, and returns a result, which is shown on the page.


## individual challenges:

- Temperature converter: converts Celsius <=> Fahrenheit (both ways)

- Palindrome checker: 
    - return boolean whether input is a palindrome.
    - must use recursion.
    - must not use .reverse() method.

- Prime factorization using recursion.
    - return list of prime factors, I suppose.


## Tech notes

required:
- CRA (template = typescript)
- styled-components

I had trouble at first trying to create-react-app.  It complained that I had an old version globally installed, and/or that global installations were no longer supported.

So I did this:

`npm uninstall -g create-react-app`

but somehow that didn't solve my problem.  But doing this did:

`npx clear-npx-cache`

then I was able to

`npx create-react-app react-ts-challenge --template typescript`

