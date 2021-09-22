# assistant-devoxxfr-2021

> A GitHub App built with [Probot](https://github.com/probot/probot) that Our assistant for DevoxxFR 2021 Presentation

https://github.com/settings/installations/19475235
https://github.com/settings/apps/assistant-devoxxfr-2021

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t assistant-devoxxfr-2021 .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> assistant-devoxxfr-2021
```

## Contributing

If you have suggestions for how assistant-devoxxfr-2021 could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 linsolas <linsolas@gmail.com>
