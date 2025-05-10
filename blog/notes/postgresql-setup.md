# PostgreSQL Setup

## MacOS on Apple Silicon

```zsh
docker pull postgres

docker run -d --name postgres_container_name -e POSTGRES_PASSWORD=your_password -p 5432:5432 -v ~/data:/var/lib/postgresql/data postgres
```

### Connecting to PostgreSQL

```zsh
docker run --name pdadmin_container_name -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=your_email@.com' -e 'PGADMIN_DEFAULT_PASSWORD=your_password' -d dpage/pgadmin4
```

OR

```zsh
psql -h localhost -p 5432 -U postgres -W
```
