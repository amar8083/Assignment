// pages/api/pledges.js

import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Parse the JSON request body
    const { name, location, email, pledgeStatement, category, subscribe } =
      req.body;

    // Read existing data from the JSON file, if any
    let existingData = [];
    try {
      const data = fs.readFileSync("./data/pledges.json", "utf-8");
      existingData = JSON.parse(data);
    } catch (error) {
      console.error("Error reading existing data:", error);
    }

    // Create a new pledge object
    const newPledge = {
      name,
      location,
      email,
      pledgeStatement,
      category,
      subscribe,
    };

    // Add the new pledge to the existing data
    existingData.push(newPledge);

    // Write the updated data back to the JSON file
    fs.writeFileSync(
      "./data/pledges.json",
      JSON.stringify(existingData, null, 2)
    );

    res.status(200).json({ message: "Pledge submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
