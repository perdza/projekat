"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            //UserModel.findOne({'username' : username, 'password': password}, (err, user) => {
            //   if(err) console.log(err);
            //  else res.json(user)
            // })
            //u response u json formatu ugradjuje korisnika koga je pronasao, ako ga nadje  
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map