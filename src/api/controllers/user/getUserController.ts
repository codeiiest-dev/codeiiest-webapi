import { RequestHandler } from 'express';
import { user as userService } from '../../../services';

interface resDataType {
  userId: string;
  phone: string;
  email: string;
  name: string;
  status: string;
  updatedAt: number;
  links: {
    github: string;
    linkedin: string;
    codeforces: string;
    codechef: string;
  };
}

interface responseType {
  prettyMessage: string;
  status: number;
  success: boolean;
  data?: resDataType;
}

const getUserController: RequestHandler = async (req, res) => {
  try {
    // Checking if user already exists
    const { found, user } = await userService.findUserService(req.body.phone);

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

    const response: responseType = {
      prettyMessage: 'Found',
      status: 200,
      success: true,
      data: {
        email: user!.email,
        links: user!.links,
        name: user!.name,
        phone: user!.phone,
        status: user!.status,
        updatedAt: user!.updatedAt,
        userId: user!.userId,
      },
    };

    res.status(response.status);
    res.send(response);
  } catch (err) {
    const response: responseType = {
      prettyMessage: 'Internal Server Error.',
      status: 501,
      success: false,
    };

    res.status(response.status);
    res.send(response);
  }
};

export default getUserController;
