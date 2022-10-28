const createStudent = (personName) => {
  let response = { name: personName, feedback: () => 'Eita pessoa boa!' };
  return response;
};

module.exports = createStudent;
