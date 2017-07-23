#!/usr/bin/env node

const exec = require("child_process").exec;
const ora = require("ora");

const spinner = ora("downloading the latest bicycle scheme").start();

exec("cd .. && git clone https://github.com/flypie2/bicycle-pack.git", () => {
  spinner.text = "copy scheme to your project";
  exec("rm -rf ../bicycle-pack/.git && cp -rf ../bicycle-pack/* ./", () => {
    exec("rm -rf ../bicycle-pack", () => {
      spinner.stop();
    });
  });
});
