---
title: "Building Graphene Trace: A Healthcare Pressure Monitoring System"
description: "How I built a full-stack application for real-time pressure ulcer prevention using FastAPI, React, and Docker."
pubDate: 2025-01-10
tags: ["FastAPI", "React", "Healthcare", "Full-Stack"]
readingTime: "7 min read"
---

## The Problem

Pressure ulcers (bedsores) are a significant challenge in healthcare settings. Patients who are immobile or bedridden are at high risk, and these injuries can lead to serious complications, extended hospital stays, and increased healthcare costs.

The traditional approach relies on manual checks at regular intervals, but this is:
- Time-consuming for nursing staff
- Prone to human error
- Reactive rather than preventive

## The Solution: Graphene Trace

I built Graphene Trace to provide real-time pressure monitoring with intuitive visualizations that help medical staff identify at-risk patients before injuries occur.

### Key Features

1. **Real-time Heatmap Visualization** - Interactive pressure maps using Plotly.js
2. **Patient Dashboard** - Comprehensive overview of all monitored patients
3. **Analytics & Reporting** - Historical data analysis for pattern recognition
4. **Secure Authentication** - JWT-based auth with bcrypt password hashing

## The Architecture

### Backend: FastAPI + PostgreSQL

FastAPI was the natural choice for the backend. It offers:
- Automatic OpenAPI documentation
- Async support for handling real-time data
- Excellent performance
- Type safety with Pydantic

```python
@app.get("/api/patients/{patient_id}/pressure-data")
async def get_pressure_data(patient_id: int, db: Session = Depends(get_db)):
    return await pressure_service.get_latest_readings(db, patient_id)
```

SQLAlchemy handles the database layer, providing a clean ORM interface to PostgreSQL.

### Frontend: React + TypeScript

The frontend uses React with TypeScript for type safety. Plotly.js powers the heatmap visualizations, providing interactive charts that update in real-time.

```typescript
const PressureHeatmap: React.FC<Props> = ({ data }) => {
  return (
    <Plot
      data={[{
        type: 'heatmap',
        z: data.pressureMatrix,
        colorscale: 'RdYlGn',
        reversescale: true
      }]}
      layout={{ title: 'Pressure Distribution' }}
    />
  );
};
```

### DevOps: Docker

The entire application is containerized with Docker and orchestrated with docker-compose. This ensures:
- Consistent environments across development and production
- Easy deployment to any Docker-compatible host
- Isolated services that can scale independently

```yaml
services:
  backend:
    build: ./backend
    depends_on:
      - db
  frontend:
    build: ./frontend
  db:
    image: postgres:15
```

## Challenges & Solutions

### Challenge 1: Real-time Data Handling

Processing continuous pressure sensor data required careful consideration of performance.

**Solution:** Implemented data aggregation on the backend to reduce payload sizes, and used React's `useMemo` to prevent unnecessary re-renders.

### Challenge 2: Secure Authentication

Healthcare applications require strict security measures.

**Solution:** JWT tokens with short expiration times, bcrypt password hashing, and HTTPS-only cookies for token storage.

### Challenge 3: Visualization Performance

Rendering large heatmaps with thousands of data points caused lag.

**Solution:** Canvas-based rendering with Plotly.js and data sampling for initial views, with full resolution available on zoom.

## Key Learnings

1. **Healthcare software requires extra diligence** - Security, reliability, and data integrity are non-negotiable
2. **FastAPI is excellent for data-heavy APIs** - The async support and automatic documentation saved significant development time
3. **Docker simplifies everything** - From development to deployment, containers provide consistency
4. **User experience matters in clinical tools** - Medical staff need intuitive interfaces that don't slow them down

## What's Next

Future enhancements could include:
- Machine learning models for predictive risk scoring
- Mobile app for nurses on the go
- Integration with hospital EHR systems
- Alert notifications via SMS/email

---

*Check out the [live demo](https://graphene-trace-app.netlify.app) or view the [source code on GitHub](https://github.com/catalindragusanu/Graphene-Trace)!*
