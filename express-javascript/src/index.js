import express from "express";


const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "BASE_OK" });
});

app.get("/data", (req, res) => {
  res.json({ message: "Hello from BASE service" });
});

const PORT = 3000;

async function main() {
  app.listen(PORT, () => {
    console.log(`Base service running on port ${PORT}`);
  });


}

main()
