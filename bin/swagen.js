#!/usr/bin/env node

const program = require("commander");
const path = require("path");

const pkg = require("../package.json");
const { koa, sdk, postman } = require("../dist");

program.version(pkg.version);

const templatePath = path.join(__dirname, "../templates");

program
  .command("koa [openapiYmlFile] [dist]")
  .description("Generate code for koa server api")
  .action((yamlFile, dist) => {
    try {
      koa({ yamlFile, dist, templatePath });
    } catch (error) {
      console.error(error);
    }
  });

program
  .command("sdk [openapiYmlFile] [dist] [name]")
  .description("Generate code for client sdk")
  .action((yamlFile, dist, name) => {
    try {
      sdk({ yamlFile, dist, templatePath });
    } catch (error) {
      console.error(error);
    }
  });

program
  .command("postman [openapiYmlFile] [targetFile]")
  .description("Transform openapi file to postman collection file")
  .action((yamlFile, targetFile) => {
    try {
      postman({ yamlFile, targetFile, templatePath });
    } catch (error) {
      console.error(error);
    }
  });

program.parse(process.argv);
