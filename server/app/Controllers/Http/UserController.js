'use strict'
const Event = use('Event')
const User = use('App/Models/User');
const Persona = use('Persona');
const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');
const Mail = use('Mail');


class UserController {


  async login({request, auth}) {
    const {email, password} = request.all();
    const token = await auth.attempt(email, password);
    // return token;
    token.user = await User.query().where('email', email).fetch()
    return token;
  }

  async signUp(request) {
    const payload = request.only(['username', 'email', 'password', 'password_confirmation'])


    const user = await
      Persona.register(payload, function () {
        console.log('good register');
      });
    const tokens = await user.tokens().fetch();
    const token = tokens.toJSON()[0].token.replace("/", "thisIsSlash");
    await Mail.send('emails.welcome', Object.assign({}, user.toJSON(), {token}), (message) => {
      message
        .to(user.email)
        .from('admin@test.com')
        .subject('Welcome to My App')
    });

    return user
  }

  async registerUser({request}) {
    let user = await this.signUp(request);
    return user;
  }

  async verifyEmail({params, session, response}) {
    const token = params.token.replace("thisIsSlash", "/");
    return await Persona.verifyEmail(token);

  }

  async updatePassword({request, auth}) {
    const payload = request.only(['old_password', 'password', 'password_confirmation'])
    const user = auth.user
    await Persona.updatePassword(user, payload)
  }

  async forgotPassword({request}) {
    await Persona.forgotPassword(request.input('uid'))
  }

  async updatePasswordByToken({request, params}) {
    const token = params.token
    const payload = request.only(['password', 'password_confirmation'])

    const user = await Persona.updatePasswordByToken(token, payload)
  }

  async register({request, auth, response}) {
    let user = await this.signUp(request);
    // optional
    await auth.login(user);
    return user.token;
  }

  async getUser({auth}) {
    const user = await auth.getUser();
    return user;
  }

  async index({auth}) {
    const user = await User.find(23);

    return await User.all();
  }

  async destroy({auth, request, params}) {

    // const user = await auth.getUser();
    const {id} = params;
    const userToDelete = await User.find(id);
    await userToDelete.delete();
    return userToDelete;

  }

  async update({auth, request, params}) {
    const user = await auth.getUser();
    const {id} = params;
    const userToUpdate = await User.find(id);

    if (user.is('administrators')) {
    } else {
      if (!userToUpdate) {
        throw new ResourceNotExistException();
      }
      if (userToUpdate.id !== user.id) {
        throw new InvalidAccessException();
      }
    }
    userToUpdate.merge(request.only(['username', 'email', 'password', 'account_status', 'created_at', 'updated_at']));
    await userToUpdate.save();
    return userToUpdate;
  }

}

module.exports = UserController
