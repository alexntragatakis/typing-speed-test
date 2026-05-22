import { Router, Request, Response } from "express";
import sql from "../db";

const router = Router();

// GET /api/scores — top 50 leaderboard
router.get("/", async (_req: Request, res: Response) => {
  try {
    const rows = await sql`
      SELECT id, username, wpm, accuracy, word_count, created_at
      FROM scores
      ORDER BY wpm DESC
      LIMIT 50
    `;
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// POST /api/scores — save a result
router.post("/", async (req: Request, res: Response) => {
  const { username = "Anonymous", wpm, accuracy, word_count } = req.body;

  if (
    typeof wpm !== "number" ||
    typeof accuracy !== "number" ||
    typeof word_count !== "number"
  ) {
    res.status(400).json({ error: "Invalid payload" });
    return;
  }

  try {
    const rows = await sql`
      INSERT INTO scores (username, wpm, accuracy, word_count)
      VALUES (${username}, ${Math.round(wpm)}, ${accuracy}, ${word_count})
      RETURNING *
    `;
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
