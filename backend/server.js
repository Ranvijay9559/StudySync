import "dotenv/config";
import app from "./app.js";
import db from "./src/utils/db.js";

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})