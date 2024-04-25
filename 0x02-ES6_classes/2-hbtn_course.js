export default class HolbertonCourse {
  constructor(name, length, students) {
    // Check if the name is a string
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    // Check if the length is a number
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    // Check if students is an array of strings
    if (Array.isArray(students)) {
      for (let i = 0; i < students.length; i += 1) {
        if (typeof students[i] === 'string') {
          this._students = students;
        } else {
          throw new TypeError('Students must be an array of strings');
        }
      }
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  // name Getters and setters
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length Getters and setters
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof (value) === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // students Getters and setters
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i += 1) {
        if (typeof value[i] === 'string') {
          this._students = value;
        } else {
          throw new TypeError('Students must be an array of strings');
        }
      }
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
