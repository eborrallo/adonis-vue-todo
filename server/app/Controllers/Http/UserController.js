'use strict'

const User = use('App/Models/User');
const Persona = use('Persona');

class UserController {

  async login({request, auth}) {
    const {email, password} = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async registerUser({ request }) {
    const { email, password } = request.all();
    await User.create({
      email,
      password,
      username: email,
    });
    return this.login(...arguments);
  }
  async register({request, auth, response}) {
    const payload = request.only(['email', 'password', 'password_confirmation'])

    const user = await Persona.register(payload,function () {
      console.log('good register');
    });

    // optional
    await auth.login(user);
    return user.token;
  }
  async getUser({ auth }) {
    const user = await auth.getUser();
    return user;
  }

  async index({ auth }) {


    return await User.all();
  }
}

module.exports = UserController
