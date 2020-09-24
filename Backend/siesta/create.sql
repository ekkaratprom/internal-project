
    create table project (
       project_id bigint not null auto_increment,
        project_name varchar(255) not null,
        primary key (project_id)
    ) engine=InnoDB

    create table task (
       task_id bigint not null auto_increment,
        actual_time double precision,
        completed_status bit not null,
        create_date date not null,
        estimate_time double precision not null,
        reference_link varchar(255),
        task_date date not null,
        task_description varchar(255) not null,
        task_name varchar(255) not null,
        primary key (task_id)
    ) engine=InnoDB

    create table user (
       user_id bigint not null auto_increment,
        email varchar(255) not null,
        first_name varchar(255) not null,
        last_name varchar(255) not null,
        position varchar(255) not null,
        primary key (user_id)
    ) engine=InnoDB
