# @magicjs/swagen

[![version][0]][1] [![downloads][2]][3]

## Install

```bash
yarn global add @magicjs/swaggen
```

## Usage

```sh
$ swagen -h

Usage: swagen [command]

Options:
  -V, --version      output the version number
  -h, --help         output usage information

Commands:
  koa      Generate code for koa server api
  sdk [options]      Generate code for client sdk
  postman [options]  Transform openapi file to postman collection file
```

### Generate client sdk code

```sh
$ swagen sdk -h

Usage: sdk [options] [openapiYmlFile] [name] [dist]

Generate code for client sdk

Options:
  -h, --help  output usage information


# example, default name is filename of yaml file or specified by name option
$ swagen sdk ./petstore.yaml ./sdk petstore
```

### Generate koa server api code

```sh
$ swagen koa -h

Usage: koa [options] [openapiYmlFile] [dist]

Generate code for koa server api

Options:
  -h, --help  output usage information


# example, if dist not specified, current dir will be used as default dist
$ swagen koa ./petstore.yaml ./koa
```

### Generate postman collection from openapi

````sh
$ swagen postman -h

Usage: postman [options] [openapiYmlFile] [targetFile]

Transform openapi file to postman collection file

Options:
  -h, --help  output usage information
```


More about **json-server** you can see [here](https://github.com/typicode/json-server)

### Use remote file

```sh
# set name with 'petstore'
swagen sdk https://api.36node.com/petstore/v0/openapi.yaml . petstore
````

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/a-new-command`
3. Commit your changes: `git commit -am 'Add a new command'`
4. Push to the branch: `git push origin feature/a-new-command`
5. Submit a pull request :D

## Add new template

1. Add new generator js file in src/generators, filename is the template name.
2. In new generator js file， export default function which generate template.
