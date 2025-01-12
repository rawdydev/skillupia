const express = require('express');
const app = express();
const port = 8000;

app.use(express.json())

app.listen(
  port,
  () => console.log(`API is alive on http://localhost:${port}`)
)

app.get('/', (req, res) => console.log("api is working!"))

app.get('/jobs', (req, res) => {
  res.status("200").send({
    id: "12",
    title:  'front-end position in tehran'
  })
})

app.post("/jobs/:id", (req, res) => {
  const {id} = req.params;
  const {title, location} = req.body;

  if (!title) {
    res.status("418").send({message: "we need some title!"})
  }
  
  if (!location) {
    res.status("418").send({message: "we need a location!"})
  }

  res.status("200").send({
    title: `created a job with an ID: ${id}, title: ${title} and location: ${location}`
  })

})

// Fallback Route
app.use((req, res) => {
  res.status(404).send({ message: "Route not found!" });
});