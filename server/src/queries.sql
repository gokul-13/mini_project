CREATE TABLE student(id SERIAL PRIMARY KEY,name VARCHAR(255) NOT NULL,email VARCHAR(255));
CREATE TABLE courses(id SERIAL PRIMARY KEY,name VARCHAR(255));
CREATE TABLE marks(student_id INTEGER,mark INTEGER,course_id INTEGER,FOREIGN KEY(student_id) REFERENCES student(id),FOREIGN KEY(course_id) REFERENCES courses(id),PRIMARY KEY(student_id,course_id));