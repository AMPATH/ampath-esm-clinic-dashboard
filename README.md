![Node.js CI](https://github.com/ampath/ampath-esm-clinic-dashboard/workflows/Node.js%20CI/badge.svg)
# Ampath Clinic dashboard

This is a [lerna](https://lerna.js.org) project containing ampath clinic dashboard micro-frontend.
This package includes the following

  - [@ampath/esm-hiv-clinic-dashboard-app](packages/esm-hiv-clinic-dashboard-app)

## Repository Development

### Prerequisites

- [Node](https://nodejs.org/downloads) version ^10
- yarn ```sh npm install yarn -g ```
- lerna  ```sh npm install lerna -g ```

### Getting started


To install and setup the repository once cloned, just use the following command

```sh
  npx lerna bootstrap
```

To develop a specific package e.g. [@ampath/esm-hiv-clinic-dashboard-app](packages/esm-hiv-clinic-dashboard-app)

run this command

```sh
  npx openmrs develop --sources 'packages/esm-hiv-clinic-dashboard-app'
```

You can always use regex to run multiple packages 

```sh
npx openmrs develop --sources 'packages/esm-{package1,package2}-app`
```

### Building

For building the code just run

```sh 
npx lerna run build
```

### Tests

To verify that all the test run from the root directory

```sh
yarn test or npm test
```

## Deployment

The `master` branch of this repo is deployed in [ng2-amrs](https://github.com/AMPATH/ng2-amrs)

## Configuration

This module is designed to be driven by configuration files.

## Resources

- [JIRA Epic](https://jira.ampath.or.ke/)
