const http = require("http")
const port = 1001

const serverHandler = (req,res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`

        <html>
            <head>
                <style>
                    body {
                        background-image: linear-gradient(to right, rgba(0,0,0, 0.553), rgba(0,0,0, 0.553)), url('https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=o9gVzM52qGsXBazL11EFxSmRSJLtpMnmWf9us04Pfws=');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        margin: 0;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                    }
                </style>
            </head>

            <body>
                <h1>Hello sir...! I'm Harmi Pagada</h1>
            </body>

        </html>



    `)
    res.end()
}

const server = http.createServer(serverHandler)

server.listen(port , (err) => {
    err ? console.log(err) : console.log("Server started on : "+ port);
    
})