const app = require("./app");

// Define server port
const PORT = process.env.port || 3001;
// Listen to specified port(always keep this at bottom of the file)
app.listen(PORT, function () {
    console.log("Server has started on port " + PORT);
});