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
      email,
      name,
      message,
    };

    // data is ready to store in database

    res.status(201).json({ message: "Stored message", message: newMessage });
  }
};

export default handler;
