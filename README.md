# Structure boilerplate Nuxt.JS

Boilerplate to streamline the development process with some out-of-the-box use cases

## Documentation structure folder
![App Screenshot](https://herbertograca.files.wordpress.com/2017/03/hexagonal-arch-4-ports-adapters2.png?w=708)

```bash
├── test                      # Tests
├── src                       # Application source code folder
│   ├── domain                # Domain application  
│   │   ├── entities          # Class folder and business rule validators
│   │   │   └── errors        # Class default errors
│   │   ├── contracts         # Folder that will indirectly connect the business layer with the external layer
│   │   │   └── repositories  # Repository interface folder, where it will link the business layer with the external layer
│   │   └── usecases          # Folder that contains the most system-specific business rules. This is where all the system use cases are implemented
│   ├── infrastructure        # Folder is made up of tools like database, UI, etc. In this layer, the idea is to have as little code as possible, just enough to interconnect the layers and inject the necessary implementations into the inner layers.
│   │   ├── ui                # UI configuration pages
│   │   ├── http              # Http Client
```

## Requirements

To run the project, install the following software

* Docker >= 1.40+
* Node.JS >= 16+

## Run project

To run the project, run the following command

```bash
  npm i && npm run dev
```

## Run tests

To run the tests, run the following command

```bash
  npm run test:coverage
```

## Feedback

If you have any feedback, please let us know via **douglasdennys45@gmail.com**

## Authors

- [@Douglas Dennys](https://www.github.com/douglasdennys45)