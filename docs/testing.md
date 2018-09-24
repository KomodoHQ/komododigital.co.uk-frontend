# Testing

The project includes `jest` for testing.

To run a single test pass:

```
npm test
```

To watch for source changes (and test content changes), regenerate snapshots and re-run tests:

```
npm run test:watch
```

To ONLY watch for source changes and re-run tests (ie. no updated snapshots):

```
npm run test:watch:noupdate
```

## Snapshot Testing

Snaspshot testing is configured on the project. 

This means that, in order for tests not to fail, you need to make sure you have committed a working snapshot into the project. 

This snapshot will then be checked on CI to ensure what is rendered matches the snapshot.

For more on snapshot testing, see [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)