module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    require: [
        "tests/steps/*.ts",
        "tests/hooks/*.ts"
    ], // Pliki z definicjami kroków
    paths: ["tests/features/*.feature"], // Poprawna ścieżka do plików feature
    requireModule: ["ts-node/register"],
    format:[
      "html:report/report.html",
      "json:report/cucumber-report.json",
      "rerun:@rerun.txt"
  ]
  }
};