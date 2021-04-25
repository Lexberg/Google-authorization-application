const express = require("express");
const path = require("path")

const app = express();
app.get("/api/profile", (reg, res, next) => {
    const authorization = reg.header("Authorization");
    if(!authorization) {
        return res.send(401);
    }
    return res.json({
        username: "The master user",
    });
});
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
