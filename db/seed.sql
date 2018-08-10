create table users(
id serial primary key,
username varchar(25),
password varchar(25),
profile_pic text
);

insert into users(username, password, profile_pic)
values ('username', 'password', 'https://robohash.org/dumb');
insert into users(username, password, profile_pic)
values ('username2', 'password2', 'https://robohash.org/angry');
insert into users(username, password, profile_pic)
values ('username3', 'password3', 'https://robohash.org/happy');

create table posts (
id serial primary key,
title varchar(40),
img text,
content text,
author_id integer references users(id)
)

insert into posts(title, img, content, author_id)
values ('I Killed a  Human Today', 'N/A', 'blegh;', 2);