import "jsr:@std/dotenv/load";

import express from "npm:express";
import { Request, Response } from "npm:express";

const app = express();

const PORT = Deno.env.get("PORT");
const HOST = Deno.env.get("HOST");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Name and email are required");
  }

  console.log(name, email);
  res.redirect("/");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running @ http://${HOST}:${PORT}`);
});
