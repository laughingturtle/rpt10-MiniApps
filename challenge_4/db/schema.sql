DROP TABLE IF EXISTS games;

create table games (
  id             INT NOT NULL AUTO_INCREMENT,
  color_id       INT(10) NOT NULL,
  datePlayed     DATE NOT NULL,
  player_id      INT(10) NOT NULL,
  PRIMARY KEY     (id)
);

DROP TABLE IF EXISTS colors;

create table colors (
  id       INT NOT NULL AUTO_INCREMENT,
  color         VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS players;

create table players (
  id            INT NOT NULL AUTO_INCREMENT,
  firstName         VARCHAR(30) NOT NULL,
  lastName         VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE games ADD FOREIGN KEY (color_id) REFERENCES colors(id);
ALTER TABLE games ADD FOREIGN KEY (player_id) REFERENCES players(id);

INSERT INTO colors (id, color) VALUES (0, 'Red');
INSERT INTO colors (id, color) VALUES (0, 'Yellow');

