const express = require("express");
const path = require("path")

const app = express();
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use((reg, res, next) => {
    if (reg.method === "GET" && !reg.path.startsWith("/api")) {
        return res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html")
        );
    }
    next();
});
const server = app.listen(3000, () => {
    console.log(`server started on http://localhost:${server.address().port}`)
});
