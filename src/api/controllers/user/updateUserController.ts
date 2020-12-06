import { RequestHandler } from 'express';
import { jwtHelpers } from '../../../helpers';
import { user as userService } from '../../../services';

interface responseType {
  prettyMessage: string;
  status: number;
  success: boolean;
}

const updateUserController: RequestHandler = async (req, res) => {
  try {
    const accessToken: any = req.headers['access-token'];
    await jwtHelpers.verifyAccessToken(accessToken);

    // Checking if user already exists
    const { found } = await userService.findUserService(req.body.phone);

    const userNotFound: responseType = {
      prettyMessage: 'User not found.',
      status: 404,
      success: false,
    };

    if (!found) {
      res.status(userNotFound.status);
      res.send(userNotFound);
      return;
    }
    await userService.updateUserService(req.body);

    const response: responseType = {
      prettyMessage: 'Updated',
      status: 200,
      success: true,
    };

    res.status(response.status);
    res.send(response);
  } catch (err) {
    if (err.name) {
      const badRequest: responseType = {
        prettyMessage: err.name,
        status: 404,
        success: false,
      };
      res.status(badRequest.status);
      res.send(badRequest);
      return;
    }
    const response: responseType = {
      prettyMessage: 'Internal Server Error.',
      status: 501,
      success: false,
    };

    res.status(response.status);
    res.send(response);
  }
};

export default updateUserController;
