---
title: 'NextJS Platforms Starter Kit'
date: "2022-01-27"
---

I am working through a side project where I am learning how to use some new technologies that incorporate a PlanetScale database with Prisma's ORM on Vercel's Platforms Starter Kit. After installing the needed dependencies in my project, I went to configure settings to provision the database, and I am receiving error messages even though I'd been following the instructions laid out in the documentation very closely! A few Google searches got me nowhere and after some skimming of Stack Overflow threads, I found a README on GitHub that contained a link to a page where one can post issues. One of the developers reached out about including a DATABASE_URL in the .env file. I discovered that my .env file was named .env.example! The developer said it was great feedback and they updated the tutorial including a note that said to make sure to change the name of your .env file! 