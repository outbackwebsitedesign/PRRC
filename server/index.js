import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

// Small async wrapper so thrown errors become 500s instead of crashing.
const h = (fn) => (req, res) => {
  Promise.resolve(fn(req, res)).catch((err) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });
};

const byOrder = { orderBy: { order: 'asc' } };

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get(
  '/api/services',
  h(async (req, res) => {
    const services = await prisma.service.findMany({
      ...byOrder,
      include: { points: { orderBy: { order: 'asc' } } },
    });
    res.json(services);
  }),
);

app.get(
  '/api/stats',
  h(async (req, res) => {
    const { group } = req.query;
    const stats = await prisma.stat.findMany({
      where: group ? { group: String(group) } : undefined,
      ...byOrder,
    });
    res.json(stats);
  }),
);

app.get('/api/values', h(async (req, res) => res.json(await prisma.value.findMany(byOrder))));
app.get('/api/jobs', h(async (req, res) => res.json(await prisma.job.findMany(byOrder))));
app.get('/api/sectors', h(async (req, res) => res.json(await prisma.sector.findMany(byOrder))));
app.get('/api/reports', h(async (req, res) => res.json(await prisma.report.findMany(byOrder))));
app.get('/api/requests', h(async (req, res) => res.json(await prisma.request.findMany(byOrder))));
app.get('/api/personnel', h(async (req, res) => res.json(await prisma.personnel.findMany(byOrder))));
app.get('/api/courses', h(async (req, res) => res.json(await prisma.course.findMany(byOrder))));
app.get('/api/lessons', h(async (req, res) => res.json(await prisma.lesson.findMany(byOrder))));
app.get('/api/certifications', h(async (req, res) => res.json(await prisma.certification.findMany(byOrder))));
app.get('/api/schedule', h(async (req, res) => res.json(await prisma.scheduleItem.findMany(byOrder))));
app.get('/api/alerts', h(async (req, res) => res.json(await prisma.alert.findMany(byOrder))));

app.get(
  '/api/missions',
  h(async (req, res) => {
    const { scope } = req.query;
    const where =
      scope === 'field'
        ? { assignedToField: true }
        : scope === 'dashboard'
          ? { activeOnDashboard: true }
          : undefined;
    res.json(await prisma.mission.findMany({ where, ...byOrder }));
  }),
);

app.get(
  '/api/contact-info',
  h(async (req, res) => res.json(await prisma.contactInfo.findFirst())),
);

app.get(
  '/api/field-status',
  h(async (req, res) => res.json(await prisma.fieldStatus.findFirst())),
);

// In production, serve the built frontend from the same origin.
const distDir = path.resolve(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get(/^(?!\/api\/).*/, (req, res) => res.sendFile(path.join(distDir, 'index.html')));
}

const port = process.env.API_PORT || 3001;
app.listen(port, () => {
  console.log(`PRRC API listening on http://localhost:${port}`);
});
