'use strict'
const Event = use('Event')
const User = use('App/Models/User');
const Persona = use('Persona');
const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class UserController {


  async login({request, auth}) {
    const {email, password} = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async registerUser({request}) {
    const payload = request.only(['username', 'email', 'password', 'password_confirmation'])

    Event.on('user::created', async(user) => {

      console.log('User Event New Register');

    })
    const user = await Persona.register(payload, function () {
      console.log('good register');
    });
    return user;
  }

  async verifyEmail({params, session, response}) {
    const user = await Persona.verifyEmail(params.token)
    return user;
    //session.flash({message: 'Email verified'})
//    response.redirect('back')
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
    const payload = request.only(['username', 'email', 'password', 'password_confirmation'])

    Event.on('user::created', async(user) => {

      console.log('User Event New Register');

    })
    const user = await Persona.register(payload, function () {
      console.log('good register');
    });

    // optional
    await auth.login(user);
    return user.token;
  }

  async getUser({auth}) {
    const user = await auth.getUser();
    return user;
  }

  async index({auth}) {
    return await User.all();
  }

  async destroy({auth, request, params}) {

    // const user = await auth.getUser();
    const {id} = params;
    const userToDelete = await User.find(id);
    // AuthorizationService.verifyPermission(project, user);
    // await project.delete();
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
