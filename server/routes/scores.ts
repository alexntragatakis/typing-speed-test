import { Router, Request, Response } from "express";
import sql from "../db";

const router = Router();

// GET /api/scores?wordCount=10|25|50 — top 50 leaderboard for a word count setting
router.get("/", async (req: Request, res: Response) => {
  const wordCount = Number(req.query.wordCount);

  if (![10, 25, 50].includes(wordCount)) {
    res.status(400).json({ error: "Invalid wordCount" });
    return;
  }

  try {
    const rows = await sql`
      SELECT id, username, wpm, accuracy, word_count, created_at
      FROM scores
      WHERE word_count = ${wordCount}
      ORDER BY wpm DESC
      LIMIT 50
    `;
    res.json(
      rows.map((row) => ({
        id: row.id,
        username: row.username,
        wpm: row.wpm,
        accuracy: parseFloat(row.accuracy),
        wordCount: row.word_count,
        createdAt: row.created_at,
      })),
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// POST /api/scores — save a result
router.post("/", async (req: Request, res: Response) => {
  const { username = "Anonymous", wpm, accuracy, wordCount } = req.body;

  if (
    typeof wpm !== "number" ||
    typeof accuracy !== "number" ||
    typeof wordCount !== "number"
  ) {
    res.status(400).json({ error: "Invalid payload" });
    return;
  }

  try {
    const rows = await sql`
      INSERT INTO scores (username, wpm, accuracy, word_count)
      VALUES (${username}, ${Math.round(wpm)}, ${accuracy}, ${wordCount})
      RETURNING *
    `;
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
