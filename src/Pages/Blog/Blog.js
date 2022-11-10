import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {

    useTitle('blog')
    return (
        <div className='mx-auto w-3/4 mb-8'>
           <h3 className='mt-3 font-semibold text-xl'>1. Difference between SQL and NoSQL</h3>
           <p className='mt-3'>Ans:The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data. The data storage and data management systems are highly biased by these terms for their structure and arrangement, which helps to maintain the data structure as per requirements and needs. SQL implements relational databases and stands for Structured Query Language that is exclusively used to define and manipulate data that is stored. </p>
            <h3 className='mt-5 font-semibold text-xl'>2. What is JWT, and how does it work?</h3>
            <p className='mt-3'>Ans:JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                
JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

Once decoded, you will get two JSON strings:

The header and the payload.
The signature.  </p>
            <h3 className='mt-5 font-semibold text-xl'>3. What is the difference between javascript and NodeJS?</h3>
            <p className='mt-3'>Ans: JavaScript is a high-level, lightweight (easy syntax) and object-oriented programming language that is used by almost every web developer to create web pages, web applications, mobile applications and is also used in game development. Node.js is a JavaScript runtime environment built on google is v8 engine which is used to run JavaScript outside the browser and to put it simply it is just an extension of a JavaScript library with many modules hence making JavaScript even more powerful.

In this post, we saw what JavaScript and Node.js are and then we described the differences between them. It should be noted that for any web developer the first step is to learn JavaScript and then go for Node.js. </p>
            <h3 className='mt-5 font-semibold text-xl'>4. How does NodeJS handle multiple requests at the same time?</h3>
            <p className='mt-3'>Ans: There is a lot of confusion out there about concurrency and parallelism. Some people use the terms interchangeably, but they actually refer to two different things.Concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It does not necessarily mean that they all be running at the same time, but they can be interleaved so that at any given time, there is always one task running.</p>
        </div>
    );
};

export default Blog;