# HypurrFun

A tool for interacting with hypurr.fun

## Overview

This project allows you to monitor and interact releases on HypurrFun by reverse engineering and decoding the binary gRPC data used in their client-server communication. Since the platform doesn't provide official documentation for their `.protobuf` files or enable gRPC reflection, I've made a quick package to help decode their protocol.

## Features

- Hypurr Protobuf file
- Streaming support
- New project monitor
  - Lightning quick
  - Discord webhook notification

## How to use

### Docker

To use the new project monitor, you can simply use Docker to build and run the image. To do so, use:

```bash
docker build -t hypurr-project-monitor:latest .
```

### Manually

Alternatively, you can do:

```bash
go run cmd/new-project-monitor/main.go
```

## TODOs

- [ ] Tests
  - [ ] Tests for the `hypurr_utils` package
