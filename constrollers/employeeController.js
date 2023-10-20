export function getAllEmployees(req, res, next) {
  res.status(200).json({
    status: 'success',
    data: 'all employees',
  });
}
