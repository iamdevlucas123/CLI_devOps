#!/usr/bin/env node
//Shebang to allow execution as a CLI tool

const { program } = require("commander");

program
  .name("devops-cli")
  .description("CLI DevOps utilities")
  .version("1.0.0");

program
  .command("health")
  .description("Check CLI health")
  .action(() => {
    console.log("CLI is healthy");
  });

program.parse(process.argv);
