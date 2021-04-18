const express = require('express');
const database = require('./mysql')();
const jwt = require('./jwt');

const app = express();
app.use(express.json());

app.post('/api/user', async (req, res) => {
  const { login, password } = req.body;

  sqlRecFindUser = `
    SELECT * FROM users
    WHERE login='${login}'
  `;
  database.query(sqlRecFindUser, (err, response) => {
    if (!err) {
      const user = response[0];
      if (user) {
        console.log(user);
        if (user.password === password) {
          const token = jwt.generate();
          console.log(token);
          const tokenSetRequest = `
            UPDATE users
            SET sessionId='${ token.token }'
            WHERE login='${login}'
          `;

          database.query(tokenSetRequest, (err, result) => {
            if (!err) {
              res.json({ token: token.token });
            } else {
              console.log(err);
            }
          })
        } else {
          res.send('err PASSWORD DONT MATCH');
        }
      } else {
        console.log('err CANT FIND');
        res.send('err CANT FIND');
      }
    } else {
      console.log(err);
      
    }
  });
});


app.get('/api/user', (req, res) => {
  console.log(req.headers.authorization);
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.replace('bearer ', '');

    let sqlRecFindUser = `
      SELECT * FROM users
      WHERE sessionId='${token}'
    `;

    database.query(sqlRecFindUser, (err, result) => {
      if (!err) {
        const { id } = result[0];

        const reqQuery = `select login, title, status
        from users, todos
        where (todos.user = users.id and users.id = ${ id })`;
        database.query(reqQuery, (err, result) => {
          if (!err) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
      } else {
        console.log(err);
      }
    })
  }

});


// app.get('/api/:id', (req, res) => {
//   const { id } = req.params;

// }); CRUD >>> REST (API)

app.listen(5000, () => { console.log(5000) });


// async function loginUser(login, password) {
//   sqlRecFindUser = `
//     SELECT * FROM users
//     WHERE login='${login}'
//   `;
//   let token = null;
//   let userId = null;
//   try {
//     const user = database.query(sqlRecFindUser);
//     console.log(user);
//     if (user) {
//       if (user.password === password) {
//         userId = user.id;
//         token = (jwt.generate()).token;
        
//         const tokenSetRequest = `
//           UPDATE users
//           SET sessionId='${ token.token }'
//           WHERE login='${login}'
//         `;
//         const result = database.query(tokenSetRequest);
//         if (!result) {
//           console.log('ERR');
//         }
//       }
//     } else {
//       console.log('err CANT FIND');
//     }
//   }
//   catch(err) {
//     console.log(err);
//   }
//   finally {
//     return { token, userId };
//   }
// };