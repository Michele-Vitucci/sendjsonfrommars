import http from "node:http"; // Importa il modulo HTTP

// Creazione del server
const server = http.createServer((req, res) => {
    // Imposta l'intestazione della risposta come JSON
    res.setHeader("Content-Type", "application/json");

    // Crea il corpo della risposta JSON
    const responseBody = JSON.stringify({ location: "Mars" });

    // Imposta l'intestazione Content-Length (numero di byte della risposta)
    res.setHeader("Content-Length", Buffer.byteLength(responseBody));

    // Invia la risposta con codice di stato 200
    res.statusCode = 200;
    res.end(responseBody);
});

// Il server ascolta sulla porta 3000
server.listen(3000, () => {
    console.log("Server in esecuzione su http://localhost:3000");
});
