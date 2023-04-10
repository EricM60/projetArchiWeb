const express = require('express');
const app = express();

app.use('/api/posts', (req, res, next) =>{  
  const posts = [  
    {  
      id: 'snkfkjkf',   
      title: 'First server-side post',  
      content: 'This is comming from the server'   
    },  
    {  
      id: 'gyrrshjhk',   
      title: 'Second server-side post',  
      content: 'This is commiing from the server'   
    },  
    {  
      id: 'mhsetghj',   
      title: 'Third server-side post',  
      content: 'This is comming from the server'   
    }  
  ]  
  res.json(posts);  
});  
  
module.exports = app;  