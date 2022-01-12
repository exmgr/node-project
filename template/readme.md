# README  
This is just a dummy readme. But now that we got your attention let's discuss about what we consider best practices    

## Documentation
We believe that all code should be accompanied by documentation. That's why we suggest you always include a `README` file and keep it up to date

## Project structure
Most of the time we structure our code in layers, namely `datasource`, `repository`, `service` and `usecase`. 

The hierarchy of these layers is `usecase -> service -> repository -> datasource`, meaning that usecases may depend on services that rely on repositories, which in turn build upon datasources.

In `datasource` directory belong modules that describe how to fetch data from external sources, such as 3rd party APIs, files, databases and so on.

In `repository` directory belong modules that are constructed by gluing together datasources and usually abstacting over them so that the source of data becomes irrelevant.

In `service` directory you may include modules that combine repositories and possibly datasources in order to abstract over the capabilities you want to offer to layers above.

In `usecase` directory you may inlude modules that describe the business logic of your application, separated into use cases.  
Each of these layers may be omitted depending on your use case. 

Other directories you may find in our codebase are `common`, `web`, `config` etc. These are harder to categorise and therefore they usually end up directly under root directory. As a general rule of thumb, you can group similar modules together in a directory, initialize them in an `index.js` file if needed and export whatever is meant to work as an API for the rest of you application. 

## Code style
This template includes `standard.js` as code formatter. Please respect our choice and follow its guidelines in order to produce consistent and well formatted code.
There are a lot of [integrations](https://github.com/standard/standard#are-there-text-editor-plugins) available for IDEs, so we suggest you find what is better suited for your workflow and install the plugins required. We also included a npm script so you can always run `npm run format` to format all files in your project.

## Code guidelines
This is a short attempt to describe how our code looks like so that new comers can easily adopt this style of writing. By no means is this an exhaustive list and you are more than encouraged to also check our repositories so that you get an idea of how the real things is. Also bear in mind that most of these practices are just a general aggrement between us and may be subject to changes if the consensus, the language standars or the conditions change. We also encourage you to discuss with us any suggestions you may have.
When possible we would like to:
- Use `require` instead of `import` (at least until ES6 modules gain more popularity)
- Group module importing: External libraries first, local modules later
- Use either `async/await` or promise chains(linear if possible), but avoid callbacks
- Handle or rethrow errors at lower levels, but don't forget to catch them at top levels
- Keep variable and function names short but descriptive
- Prefer `const` over `let` and in general *immutability* over *mutability*
- Prefer functions over classses, composability over inheritance, simplicity over complexity
- Prefer `Array.map/filter/reduce/forEach` over loops  
- Separate independent logic blocks into distinct functions for easier testing and reusability(D.R.Y)

## Library arsenal
Here we list some of the libraries we commonly use:
- `dotenv` to load configuration variables from the environment
- `winston` for logging
- `jest` for testing
- `moment/moment-timezone` to manipulate time and date
- `axios` as an http client
- `lodash` for utility functions

## Other
- `docker` to deploy applications
