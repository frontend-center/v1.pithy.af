const express = require('express')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic(__dirname, {
  setHeaders(res, path) {
    const mime = serveStatic.mime.lookup(path)
    let maxAge = mime === 'text/html' ? 0 : 600
    res.setHeader('Cache-Control', `public, max-age=${maxAge}`)
  }
}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
