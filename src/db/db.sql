CREATE TABLE headers (
    id SERIAL PRIMARY KEY,
    sub1_avg float,
    sub2_avg float,
    sub3_avg float,
    sub4_avg float,
    sub5_avg float,
    sub6_avg float,
    sub1_max int,
    sub2_max int,
    sub3_max int,
    sub4_max int,
    sub5_max int,
    sub6_max int,
    total_max int,
    total_avg float
);

CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    sid int,
    dep int,
    year int,
    term int,
    total int,
    rank int,
    sub1 int,
    sub2 int,
    sub3 int,
    sub4 int,
    sub5 int,
    sub6 int,
    rank1 int,
    rank2 int,
    rank3 int,
    rank4 int,
    rank5 int,
    rank6 int,
    header_id int,
    foreign KEY (header_id) REFERENCES headers(id)
);

CREATE TABLE admins (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50),
    password VARCHAR(255)
);

CREATE TABLE sessions (
    id serial PRIMARY KEY,
    start_date TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES admins(id)
)

ALTER TABLE headers 
    ADD COLUMN sub1 VARCHAR(50),
    ADD COLUMN sub2 VARCHAR(50),
    ADD COLUMN sub3 VARCHAR(50),
    ADD COLUMN sub4 VARCHAR(50),
    ADD COLUMN sub5 VARCHAR(50),
    ADD COLUMN sub6 VARCHAR(50);
    
ALTER TABLE students 
    DROP COLUMN dep,
    DROP COLUMN year,
    DROP COLUMN term;

ALTER TABLE headers
    ADD COLUMN dep INT,
    ADD COLUMN year INT,
    ADD COLUMN term INT;
