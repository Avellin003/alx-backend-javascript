import { readDatabase } from '../utils';
import path from 'path';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = path.join(__dirname, '../../database.csv');
    try {
      const students = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';
      Object.keys(students).sort().forEach((field) => {
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = path.join(__dirname, '../../database.csv');

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databasePath);
      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
