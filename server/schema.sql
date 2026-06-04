CREATE TABLE IF NOT EXISTS scores (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(30) NOT NULL DEFAULT 'Anonymous',
  wpm        INTEGER NOT NULL,
  accuracy   NUMERIC(5, 2) NOT NULL,
  word_count INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_scores_wpm ON scores (wpm DESC);
