# Next.js Dashboard with Django API Integration

## Overview

This task is a web application built with Next.js on the frontend and a Django API backend. It features a basic dashboard page with four different types of charts (Candlestick, Line, Bar, and Pie), with data fetched from the Django API. The API data is hardcoded to ensure it matches the structure required by the frontend charts.

## Process

### Backend: Django API

I kicked things off by developing the backend API to define the data structure right from the start. This ensured that the data would be shaped correctly for the frontend charts. I used a few packages to make the API work:

- **djangorestframework**: To build the API endpoints.
- **django-cors-headers**: To handle CORS issues, so the frontend could communicate with the backend seamlessly.
- **environs**: For managing environment variables.

### Frontend: Next.js

For the frontend, I used Next.js and leaned on the [shadcn](https://shadcn.dev) components for charts. However, since there wasn't a Candlestick component available in shadcn, I used ApexCharts as an alternative.

- **State Management**: I utilized React hooks, like `useState`, to manage the state.
- **TypeScript**: For type safety, which helps catch errors early and keep things predictable.
- **Tailwind CSS**: For styling, to keep the design clean and responsive.

### Docker Setup

I created separate Dockerfiles for both the frontend and backend. To make deployment straightforward, I also created a general Docker Compose file that spins up both services simultaneously. 

## How to Run the Project

Follow these steps to get the project up and running:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd your-project-directory
   ```
3. **Run Docker Compose**:
   Make sure you have Docker installed and running, then execute:
   ```bash
   docker-compose up --build
   ```

The app should now be running, with the frontend accessible at `http://localhost:3000` and the backend API at `http://localhost:8000`.

## Requirements

- **Docker**: To build and run containers.
- **Git**: For cloning the repository.

## Additional Notes

The project is deployed on GitHub my github Account 