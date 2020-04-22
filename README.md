# zycus-automation

#### Quick start:
`npm install`
For local runs use:
`npm run debug`

On CI/CD you can use one of:
```
npm run test
npm run test:firefox
npm run test:ie
```


List of available default codeception steps methods:
https://codecept.io/helpers/WebDriver/#methods

Recommended to install Prettier vscode extension, to keep same formatting everywhere:
      
      "esbenp.prettier-vscode"

#### HTML report:
- delete `./output` folder first
- run tests
- after, run:
`npm run allure:serve`
This will start webserver with HTML report page.

#### ESlint:
It is recommended to install ESlint plugin, to get-real time style checks:
`dbaeumer.vscode-eslint`

#### "I" extension:
Custom methods to `I` object (custom codeceptjs steps): https://codecept.io/pageobjects/#actor
PageObjects: https://codecept.io/pageobjects/#pageobject
DataDriven tests: https://codecept.io/advanced/#data-driven-tests


#### CucumberJS + CodeceptJS
Make sure you are installed recommended workspace extension for VScode:

		"alexkrechik.cucumberautocomplete"

This extension should enable syntax highlight for .feature files.

Docs:
https://gkushang.github.io/


#### Q&A
a.	How to run all the specs?
```
npm run debug
```
b.	How to run any specific spec? 

```
npm run debug -- -o '{"gherkin": {"features": "./features/contract2.feature"}}'
```

To run one scenario:
- Use grep feature: put "@ONLY" to scenario that you want to run
Then:
```
npm run debug -- --grep "@ONLY"
```

c.	How to run specs in parallel?
Commands in:
```
npm run test
npm run test:firefox
npm run test:ie
```

Are running in parallel in 2 threads. This is configurable in config file:
```
    multiple: {
        parallel: {
            // Splits tests into 2 chunks
            chunks: 2
        }
    },
```

d.	How to run tests with any specific (cucumber) tag?

Use --grep parameter to filter tests:

```
npm run debug -- --grep "@SMOKE"
```


#### codeceptjs CLI
```
Usage: codeceptjs <command> [options]

Options:
  -V, --version                                   output the version number
  -h, --help                                      output usage information

Commands:
  init [path]                                     Creates dummy config in current dir or [path]
  migrate [path]                                  Migrate json config to js config in current dir or [path]
  shell|sh [options] [path]                       Interactive shell
  list|l [path]                                   List all actions for I.
  def [options] [path]                            Generates TypeScript definitions for all I actions.
  gherkin:init|bdd:init [options] [path]          Prepare CodeceptJS to run feature files.
  gherkin:steps|bdd:steps [options] [path]        Prints all defined gherkin steps.
  gherkin:snippets|bdd:snippets [options] [path]  Generate step definitions from steps.
  generate:test|gt [path]                         Generates an empty test
  generate:pageobject|gpo [path]                  Generates an empty page object
  generate:object|go [options] [path]             Generates an empty support object (page/step/fragment)
  generate:helper|gh [path]                       Generates a new helper
  run [options] [test]                            Executes tests
  run-rerun [options] [test]                      Executes tests in more than one test suite run
  run-workers [options] <workers>                 Executes tests in workers
  run-multiple [options] [suites...]              Executes tests multiple
  info [options] [path]                           Print debugging information concerning the local environment
  dry-run [options] [test]                        Prints step-by-step scenario for a test without actually running it
```