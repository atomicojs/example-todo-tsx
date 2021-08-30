![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h4.svg)
![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h3.svg)

### Hi, I'm [@uppercod](https://twitter.com/uppercod), creator of Atomico and I want to thank you for starting with Atomico.

If you need help you can find it at:

[![twitter](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/twitter.svg)](https://twitter.com/atomicojs)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/discord.svg)](https://discord.gg/7z3rNhmkNE)
[![documentation](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc-1.svg)](https://atomico.gitbook.io/doc/)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc.svg)](https://webcomponents.dev/edit/collection/F7dm6YnMEDRtAl57RTXU/d6E4w07fsQbb0CelYQac)

Now what you have installed is a quick start kit based on Vite, which you can scale for your project, now to continue you must execute the following commands:

1. `npm install`
2. `npm start` : Initialize the development server
3. `npm build` : Optional, Generate a build of your project from the html file [index.html](index.html).

## Todo con TSX

This is a small Todo created with Atomico that will allow you to know how it is with TSX (Typescript), I hope that with these examples you will understand:

1. **Create components with effects on forms**: it is normal that when starting with webcomponents you cannot reflect your events to forms, in this example I show you how to solve this in an elegant way.
2. **Design token**: The design tokens are the variables of a design system, in this example I show you how to carry the token design in a sustainable way and without global conflicts.
3. **Bases for developing components and applications with Atomico**: although the example is a small whole, with the use of Atomico types, communication through events and the use of forms.

### Structure

```bash
|-src
  |- todo # Groups all components
  |- todo-header # announces the creation of a task
  |- todo-task # shows the task and its status
  |- todo-footer # filter tasks
  |- button
  |- checkbox
  |- input
  |- tab
```
