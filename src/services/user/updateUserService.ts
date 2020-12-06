import findUserService from './findUserService';
import UserModel from '../../models/Users';

interface ParamType {
  phone: string;
  name: string;
  links: {
    github: string;
    linkedin: string;
    codeforces: string;
    codechef: string;
  };
  status: string;
}

const updateUserSerivce = async (data: ParamType): Promise<boolean> => {
  try {
    const { links, name, phone, status } = data;
    const updatedAt: number = Date.now();
    const { user } = await findUserService(phone);

    const updatedLink = { ...user!.links };
    let updatedName = user!.name;
    let updatedStatus = user!.status;

    if (links) {
      if (links.codechef && links.codechef.length)
        updatedLink.codechef = links.codechef;
      if (links.codeforces && links.codeforces.length)
        updatedLink.codeforces = links.codeforces;
      if (links.github && links.github.length)
        updatedLink.github = links.github;
      if (links.linkedin && links.linkedin.length)
        updatedLink.linkedin = links.linkedin;
    }
    if (name && name.length) updatedName = name;
    if (status && name.length) updatedStatus = status;

    await UserModel.findOneAndUpdate(
      { phone },
      {
        links: updatedLink,
        name: updatedName,
        updatedAt,
        status: updatedStatus,
      },
      { runValidators: true, useFindAndModify: false },
    );

    return true;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateUserSerivce;
