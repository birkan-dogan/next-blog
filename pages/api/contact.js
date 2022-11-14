import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // server-side validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // store it in a database
    const newMessage = {
      id: new Date().toISOString(),
      email,
      name,
      message,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);

    const data = JSON.parse(fileData);
    data.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Stored message", message: newMessage });
  }
};

export default handler;
