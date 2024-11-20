/// <reference path="../pb_data/types.d.ts" />

// This hook is executed after the app is bootstrapped
onAfterBootstrap((e) => {
  console.log("App started");
});

// Custom endpoint example
routerAdd("GET", "/api/custom", (c) => {
    return c.json(200, { message: "Hello!" });
})

// Collection hook example (executed after a record is created)
onRecordAfterCreateRequest((e) => {
  console.log(e.httpContext);
  console.log(e.record);
  console.log(e.uploadedFiles);
}, "users");

// Collection hook example (executed before a record is created)
onRecordBeforeCreateRequest((e) => {
  console.log(e.httpContext);
  console.log(e.record);
  console.log(e.uploadedFiles);
}, "users");
