import * as fs from "fs";

export const getData = (fileName: string): string[] =>
  fs.readFileSync(fileName).toString("utf8").split("\r\n");
