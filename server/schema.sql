CREATE TABLE IF NOT EXISTS scores (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(30) NOT NULL DEFAULT 'Anonymous',
  wpm        INTEGER NOT NULL,
  accuracy   NUMERIC(5, 2) NOT NULL,
  word_count INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_scores_wpm_10 ON scores (wpm DESC) WHERE word_count = 10;
CREATE INDEX IF NOT EXISTS idx_scores_wpm_25 ON scores (wpm DESC) WHERE word_count = 25;
CREATE INDEX IF NOT EXISTS idx_scores_wpm_50 ON scores (wpm DESC) WHERE word_count = 50;
