# 🚴 LongRides

LongRides is a full-stack web application for tracking and logging long-distance cycling tours. It lets you visualise your rides on an interactive map, log new tours, and view your cycling statistics at a glance.

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Splash** | Welcome landing page with a call-to-action to start exploring |
| `/map` | **My Tours** | Interactive map (powered by Leaflet/OpenStreetMap) showing ride and climb locations |
| `/add` | **Add Log** | Form to log a new ride with title, description, and date |
| `/profile` | **Profile** | User profile page *(work in progress)* |
| `/statistics` | **Tour Stats** | Grid of stat cards showing total distance, longest tour, days riding, countries visited, and more |

---

## Tech Stack

**Frontend**
- [React 19](https://react.dev/) with TypeScript
- [React Router v7](https://reactrouter.com/) for client-side routing
- [styled-components](https://styled-components.com/) for styling
- [React Leaflet](https://react-leaflet.js.org/) + [Leaflet](https://leafletjs.com/) for interactive maps
- [react-icons](https://react-icons.github.io/react-icons/) for iconography

**Backend**
- [Node.js](https://nodejs.org/) with [Express 5](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) for MongoDB integration
- [cors](https://www.npmjs.com/package/cors) for cross-origin support

---

## Project Structure

```
longrides/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/   # Page and UI components
│       ├── routes/       # App routing (AppRoutes.tsx)
│       ├── data/         # Static data (data.json)
│       └── App.tsx
└── server/               # Express backend
    └── index.js
```

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/laurenashleigh/longrides.git
cd longrides
```

**2. Install and run the backend**
```bash
cd server
npm install
node index.js
```
The API will start on `http://localhost:5000`.

**3. Install and run the frontend**
```bash
cd client
npm install
npm start
```
The app will open at `http://localhost:3000`.

---

## Features

- 🗺️ Interactive map of tour locations using OpenStreetMap tiles
- 📊 Statistics dashboard with key cycling metrics
- 📝 Ride log form to record new tours
- 🎨 Themed UI with styled-components

---

## Roadmap

- [ ] Connect frontend to backend API
- [ ] User authentication
- [ ] Complete profile page
- [ ] Persist ride logs to MongoDB
- [ ] Dynamic map markers from logged rides
