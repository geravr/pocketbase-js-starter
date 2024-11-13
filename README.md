# Custom PocketBase Project

This is a custom PocketBase project with JavaScript hooks and endpoints customization. Built with PocketBase v0.22.24.

## Project Structure
```
project/
├── pocketbase     # PocketBase executable
├── pb_hooks/      # JavaScript hooks and customizations
│   └── main.pb.js
├── pb_migrations/ # Database migrations (optional)
├── .gitignore
└── Dockerfile
```

## Requirements

- PocketBase v0.22.24 or higher
- Docker (for deployment)

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

## Hooks
Current implemented hooks:

- onAfterBootstrap - Logs when the application starts
- onRecordAfterCreate - Triggers after a record is created in specified collection

## Deployment

### Using Easypanel
1. Push your changes to GitHub
2. Create a new project in Easypanel
3. Select Docker deployment
4. Connect your GitHub repository
5. Deploy!

### Manual Deployment
Build the Docker image:
```bash
docker build -t my-pocketbase .
```

Run the container:
```bash
docker run -p 8080:8080 my-pocketbase
```

## Development

### Adding New Hooks
Add new hooks in pb_hooks/main.pb.js:
```javascript
onRecordAfterCreate((e) => {
    console.log("New record created:", e.record)
}, "collection_name")
```

### Adding Custom Endpoints
Add new endpoints in pb_hooks/main.pb.js:
```javascript
routerAdd("GET", "/api/custom-endpoint", (c) => {
    return c.json(200, { message: "Hello!" })
})
```

## Backup
To create a backup of your database:
```bash
./pocketbase backup
```
Backups will be stored in the pb_data directory.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Support
For support, please create an issue in the GitHub repository or contact the maintainers.