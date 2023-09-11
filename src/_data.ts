import env from "@config/env";

console.log(env);

async function data() {}

data()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
