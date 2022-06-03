const User = require("../models/user.model");

class UserServices {
    async createUser(userdata) {
        await User.query().insert(userdata)
        return
    }

    async readUser(id,data) {
        return await User.query().findById(id);
         
    }

    async updateUserById(id, newData) {
        const updateCount = await User.query().findById(id).patch(newData);

        console.log(updateCount)
        if (updateCount == 0) {
            return { "error": "error while updating user" }
        }
        return { status: "updated" }
    }

    async deleteUserById(id) {
        const deleteCount = await User.query().deleteById(id)
        if (deleteCount == 0) {
            return { "error": "error while deleting user" }
        }
        return { status: "deleted" }
    }
}
module.exports = UserServices











