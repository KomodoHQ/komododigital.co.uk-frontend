# Development

To get the current version of the site running:

```
gatsby develop
```

## Component Creation

You're far more likely to want to work in the following manner:

1. Create a component - 

```
touch src/components/mycomponent.jsx
```

2. Create a storybook file for your component - 

```
touch storybook/stories/mycomponent.story.js
```

3. Create a test file for your component - 

```
touch test/components/mycomponent.test.jsx
```

4. Start a storybook watcher so you can develop UI

```
npm run storybook
```

5. Start a test watcher so you can add tests

```
npm run test:watch
```

