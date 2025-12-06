# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

I have used React JS for this challenge. Custom css for styling. No external framework.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](/Screenshot.png)

### Links

- Solution URL: [https://github.com/webdevsuman/frontendmentor-challenges/tree/main/four-card-feature-section-master](https://github.com/webdevsuman/frontendmentor-challenges/tree/main/four-card-feature-section-master)
- Live Site URL: [https://four-card-feature-section-master-webdevsuman.vercel.app/](https://four-card-feature-section-master-webdevsuman.vercel.app/)

## My process

Used ReactJS as frontend library. Custom CSS for styling. Cards are from common reusable card component.

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

For this challenge, making a Common reusable card component was a bit tricky, because of the leyout. I have used CSS Grid layout for it. And made an object for passing the card data -

const dummyData = [
{
id: 1,
title: "Supervisor",
content: "Monitors activity to identify project roadblocks",
borderColor: "hsl(180, 62%, 55%)",
rowSpan: "span 2",
iconSrc: "/images/icon-supervisor.svg",
},
{
id: 2,
title: "Team Builder",
content:
"Scans our talent network to create the optimal team for your project",
rowSpan: "span 1",
borderColor: "hsl(0, 78%, 62%)",
iconSrc: "/images/icon-team-builder.svg",
},{
id: 3,
title: "Calculator",
content:
"Uses data from past projects to provide better delivery estimates",
rowSpan: "span 1",
borderColor: "hsl(212, 86%, 64%)",
iconSrc: "/images/icon-calculator.svg",
},
{
id: 4,
title: "Karma",
content: "Regularly evaluates our talent to ensure quality",
rowSpan: "span 2",
borderColor: "hsl(34, 97%, 64%)",
iconSrc: "/images/icon-karma.svg",
},
];

## Author

- Website - [SUMAN DAS](https://webdevsuman.vercel.app/)
- Frontend Mentor - [@webdevsuman](https://www.frontendmentor.io/profile/webdevsuman)
