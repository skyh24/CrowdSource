// pages/api/createTask.ts
import { NextApiRequest, NextApiResponse } from 'next';

type Task = {
  title: string;
  description: string;
  dueDate: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description, dueDate } = req.body;

    if (!title || !description || !dueDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newTask: Task = {
      title,
      description,
      dueDate,
    };

    // Here you would typically save the task to a database
    // For this example, we'll just return the task

    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}