module.exports = {
  register: (req, res) => {
    const db = req.app.get("db");
    let { username, password } = req.body;

    db.create_user([username, password])
      .then(user => res.status(200).send(user))
      .catch(err => {
        console.log(err);
        res.status(500).send(err,'something messed up');
      });
  },
  login: (req, res) => {
    const db = req.app.get("db");
    let { username, password } = req.body;

    db.login_user([username, password])
      .then(user => res.status(200).send(user))
      .catch(err => {
        console.log(err,'something messed up');
        res.status(500).send(err);
      });
  }
};
