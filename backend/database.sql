BEGIN;
CREATE TABLE IF NOT EXISTS public.roles (
    id bigint NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
    role character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT roles_pkey PRIMARY KEY (id),
    CONSTRAINT roles_name_key UNIQUE (role)
);
CREATE TABLE IF NOT EXISTS public.users (
    id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    email character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    first_name character varying(120) COLLATE pg_catalog."default",
    last_name character varying(120) COLLATE pg_catalog."default",
    city character varying(120) COLLATE pg_catalog."default",
    state character varying(120) COLLATE pg_catalog."default",
    country character varying(120) COLLATE pg_catalog."default",
    profile_picture_url character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
);
CREATE TABLE IF NOT EXISTS public.users_roles (
    id bigint NOT NULL DEFAULT nextval('users_roles_id_seq'::regclass),
    user_id bigint NOT NULL,
    role_id bigint DEFAULT 3,
    CONSTRAINT users_roles_pkey PRIMARY KEY (id)
);
ALTER TABLE IF EXISTS public.users_roles
ADD CONSTRAINT users_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE IF EXISTS public.users_roles
ADD CONSTRAINT users_roles_user_id_fkey1 FOREIGN KEY (user_id) REFERENCES public.users (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE IF EXISTS public.users_roles
ADD CONSTRAINT users_roles_user_id_fkey2 FOREIGN KEY (user_id) REFERENCES public.users (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION;
END;