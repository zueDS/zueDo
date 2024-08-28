
async function registerUser(req, res) {
    let data = req.body;
    console.log(data);
    res.send("success!");
}

const AuthController = {
    registerUser
}

module.exports = AuthController;