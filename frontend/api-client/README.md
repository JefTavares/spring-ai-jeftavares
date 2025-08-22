Versão do node: v22.18.0

Eu tive o mesmo erro e consegui consertar o meu executando:
npm install node
sudo npm install n -g
Depois executei npm run deve ele funciona perfeitamente.

npm run dev.

# Pacotes utilizados:

Axios

```sh
npm install axios
```

tutoriais
https://www.youtube.com/watch?v=BU2zkLXnuvI
https://www.youtube.com/watch?v=dW_G-C3OyVQ

rodar o docker compose para tunnel
cd
docker compose up --build -d --remove-orphans

## Direto, sem docker compose

docker run --network host --name ai_teste cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiNmE0NDdiOGZlZTgwZWZkOTQwMzNkZDY4NTQ4ZjFkOWQiLCJ0IjoiYjA5NjkxOWQtYjdkNS00OGM3LTkwNGUtZGJmZjQwZTI1OTBjIiwicyI6IlpHUXhNMlZrTWpBdE5qQm1aaTAwT0RCa0xXSmlNV1V0T0dJd01HWTBZVFpsTmpFMCJ9

posso adicionar o -d ai em cima
