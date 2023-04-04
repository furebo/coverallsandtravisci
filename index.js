
import express from 'express';
const app = express();

app.get('/home', (req, res) => {
    res.status(200).send('WELCOME!');
  });

app.listen(5000, ()=>{
    console.log("Application is running on port 5000 !");
})

export default app;
