
	create table accounts (
       id bigint not null auto_increment,
        email_address varchar(255),
        name varchar(50) not null,
        primary key (id)
    ) engine=InnoDB;
    
    create table account_settings (
       id bigint not null auto_increment,
        setting_name varchar(255) not null,
        setting_value varchar(255) not null,
        account_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    alter table account_settings 
       add constraint FK54uo82jnot7ye32pyc8dcj2eh 
       foreign key (account_id) 
       references accounts (id);
