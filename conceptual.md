### Conceptual Exercise

Answer the following questions below:

- What is a JWT?   
A JWT is a JSON Web Token. A JWT stores a "payload" of information and are "signed" with a secret key so they can be validated later.

- What is the signature portion of the JWT?  What does it do?   
The signature portion of a JWT is a version of the header and payload that is signed with a secret key. The signature allows the token to be validated at a later time so the information in the payload can be accessed.

- If a JWT is intercepted, can the attacker see what's inside the payload?   
The payload is encoded, not encrypted so the attacker would be able to see what's inside the payload.

- How can you implement authentication with a JWT?  Describe how it works at a high level.   
Authentication can be implemented with a JWT through the use of middleware. The JWT can be sent with every request made to the browser, and middleware can be used with routes that need authentication to authenticate.

- Compare and contrast unit, integration and end-to-end tests.   
Unit tests are best for testing small individual pieces of code. Integration tests are best for testing blocks of code that are supposed to work together for a common goal. End-to-end tests are best for testing the entire user experience.

- What is a mock? What are some things you would mock?   
A mock is something to use while writing unit tests that rely on other objects. A mock can simulate the behavior of other objects and isolate that behavior. Some things you would mock include AJAX requests, reading or writing to files, or impure functions.

- What is continuous integration?   
Continuous integration is the practice of merging in small code changes frequently, rather than merging in a large vhange at the end of the development cycle.

- What is an environment variable and what are they used for?   
An environment variable is a value that affect process and behavior of running systems and environments. They are used to set execution parameters that are used by processes you do not have control over.

- What is TDD? What are some benefits and drawbacks?   
TDD is test-driven development. It is the practice of writing tests for how you expect your code to work, then writing the code itself and making sure it passes the test. Some benefits of TDD include clearer, more consice code, that is thourouly tested. Drawbacks of TDD are that it can take much longer to write all of your code.

- What is the value of using JSONSchema for validation?   
JSONSchema can fail fast, before any bad data gets to your database. It can reduce the amount of code for processing and validating data as a whole. It is also an easy system to set up and maintain in the long term.

- What are some ways to decide which code to test?   
It is always best to test your API instead of your database. In general, test the code that you have written and how it works together, as opposed to something that should work. For example, testing your API route to create and whether or not the item is created through the API rather than testing that that thing was added to the database.

- What does `RETURNING` do in SQL? When would you use it?   
`RETURNING` in SQL will return whatever information is specified after the query statement has finished. You would use it after inserting something new into your database, or whenever you need information that is not automatically returned by the query statement.

- What are some differences between Web Sockets and HTTP?   
HTTP operates in a request-response cycle, where a request is sent and a resposne is recieved and the transaction is then over until a new request is sent. Web Sockets open a continuous channel between the client and the server where data can be sent in real time, until the connection is terminated by either the client or server.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?   
  I can't say I have a distinct preference for either Flask or Express. Flask seemed a little simpler to learn and implement, giving a kind of instant satisfaction. Express feels like it has many more moving parts. To me, it is a little more daunting with all of the setup and different files to create, I always feel like there's something I'm missing. However, I also see a bigger potential with Express than I did with Flask. It is easy to see how they can complete the same goal, but it is easier to conceptualize how Express might be used on a much larger scale.
