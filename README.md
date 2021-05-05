# react-sample-project

This repository is a mono repository, this means that there are multiple packages in the same repository

All packages are located inside folder `packages` and every package have a **package.json** file that defines the pkg itself

## Development

To start development use:

```bash
yarn watch
```

## Build

To build project use:

```bash
yarn build
```

## Tests

Execute tests
```bash
yarn test
```

Execute tests with coverage
```bash
yarn test:ci
```

## E2e tests

E2e tests are located in a separated package in `packages/e2e`

Execute e2e tests
```bash
yarn test:e2e
```
