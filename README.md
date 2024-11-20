# Custom PocketBase Project

This is a custom PocketBase project with JavaScript hooks and endpoints customization. Built with PocketBase v0.22.24.

## Project Structure
```
project/
├── pb_data/       # Only keep the types for local development
│   └── types.d.ts # PocketBase types to be used in pb_hooks
├── pocketbase     # PocketBase executable
├── pb_hooks/      # JavaScript hooks and customizations
│   └── main.pb.js
├── pb_migrations/ # Database migrations (optional)
├── .gitignore
└── Dockerfile
```

## Requirements

- [PocketBase](https://pocketbase.io/docs/) v0.22.24 or higher
- Docker (only for deployment)

## Getting Started

### Local Development

1. Clone the repository
```bash
git clone https://github.com/geravr/pocketbase-js-starter.git
cd pocketbase-js-starter
```

2. Start PocketBase
```bash
./pocketbase serve
```

The admin UI will be available at http://127.0.0.1:8090/_/

## Custom Endpoints
The project includes the following custom endpoints:

- GET /api/custom - Example custom endpoint that returns a message

Learn more about [custom endpoints](https://pocketbase.io/docs/js-routing/#registering-new-routes).

## Hooks
Current implemented hooks:

- onAfterBootstrap - Logs when the application starts
- onRecordAfterCreate - Triggers after a record is created in specified collection

Read more about [JS hooks](https://pocketbase.io/docs/js-event-hooks/).

## Deployment

### Using Easypanel
1. Push your changes to your GitHub repository
2. Create a new project in [Easypanel](https://easypanel.io)
3. Add new service in your project
4. Select App Service, and set the service name
5. In source, select GitHub and set the repository information
6. Select Docker deployment
7. Go to Storage tab and add 2 new volumes: `data -> /pb_data` and `hooks -> /pb_hooks`
8. Deploy!

### Manual Deployment
Build the Docker image:
```bash
docker build -t my-pocketbase .
```

Run the container:
```bash
docker run -p 8080:8080 \
    -v $(pwd)/pb_data:/pb_data \
    -v $(pwd)/pb_hooks:/pb_hooks \
    my-pocketbase
```

## Development

### Adding New Hooks
Add new hooks in pb_hooks/main.pb.js:
```javascript
onRecordAfterCreate((e) => {
    console.log("New record created:", e.record)
}, "collection_name")
```

Check out the [available hooks](https://pocketbase.io/docs/js-event-hooks/).

### Adding Custom Endpoints
Add new endpoints in pb_hooks/main.pb.js:
```javascript
routerAdd("GET", "/api/custom-endpoint", (c) => {
    return c.json(200, { message: "Hello!" })
})
```

## License
This project is licensed under the MIT License - see the LICENSE file for details