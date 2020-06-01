import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
  });


//   https://github.com/microsoft/TypeScript-Node-Starter/blob/master/src/app.ts