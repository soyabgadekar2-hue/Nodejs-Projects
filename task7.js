const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    // LOGIN
    if (parsedUrl.pathname === "/login") {

        const username = parsedUrl.query.username;

        res.setHeader("Set-Cookie", `username=${username}`);

        res.writeHead(302, {
            Location: "/dashboard"
        });

        res.end();
    }

    // DASHBOARD
    else if (parsedUrl.pathname === "/dashboard") {

        const cookies = req.headers.cookie;

        if (cookies) {

            const username = cookies.split("=")[1];

            res.end(`
                <h1>Welcome, ${username}</h1>
                <a href="/logout">Logout</a>
            `);

        } else {

            res.end("Please login first");

        }
    }

    // LOGOUT
    else if (parsedUrl.pathname === "/logout") {

        res.setHeader(
            "Set-Cookie",
            "username=; Max-Age=0"
        );

        res.end(`
            <h1>You are logged out</h1>
            <a href="/login?username=Soyab">Login Again</a>
        `);
    }

    // HOME
    else {

        res.end(`
            <h1>Simple Login</h1>
            <a href="/login?username=Soyab">Login as Soyab</a>
        `);
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});