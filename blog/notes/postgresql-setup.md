# PostgreSQL Setup

## MacOS on Apple Silicon

```zsh
docker pull postgres

docker run -d --name my_postgres -e POSTGRES_PASSWORD=your_password -p 5432:5432 -v ~/data:/var/lib/postgresql/data postgres
```

```zsh
psql -h localhost -p 5432 -U postgres -W
```
