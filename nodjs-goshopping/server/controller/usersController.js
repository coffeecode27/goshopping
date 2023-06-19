import models from "../models/init-models";

export const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    // Membuat pengguna baru
    const user = await req.context.models.users.create({ username });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', error });
  }
};

export default{
    createUser
}