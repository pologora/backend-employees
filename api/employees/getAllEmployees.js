import { client } from '../../mongoDb/connectToDb.js';

const employeeCollection = client.db('magazyn').collection('Employee');

async function getAllEmployees(req, res, next) {
  const { query } = req;

  if (query.isSnti) {
    query.isSnti = query.isSnti === 'true';
  }

  console.log(query);

  const result = employeeCollection.find(query);
  const data = await result.toArray();

  res.status(200).json({
    status: 'success',
    length: data.length,
    data: data,
  });
}

export default getAllEmployees;
