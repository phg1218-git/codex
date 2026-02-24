const bucket = new Map<string, { count: number; resetAt: number }>();

export const isRateLimited = (key: string, limit = 60, windowMs = 60_000): boolean => {
  const now = Date.now();
  const record = bucket.get(key);

  if (!record || now > record.resetAt) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  record.count += 1;
  return record.count > limit;
};
