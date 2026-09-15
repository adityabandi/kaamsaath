export const SERVICE_WINDOW_MS = 24 * 60 * 60 * 1000;

export function hasOpenServiceWindow(lastInboundAt, now = new Date()) {
  if (!lastInboundAt) return false;
  const age = now.getTime() - new Date(lastInboundAt).getTime();
  return Number.isFinite(age) && age >= 0 && age < SERVICE_WINDOW_MS;
}

export function maySend({ optIn, kind, lastInboundAt, now = new Date() }) {
  if (!optIn || optIn.status !== "active") return { allowed: false, reason: "active opt-in required" };
  if (kind === "text" && !hasOpenServiceWindow(lastInboundAt, now)) {
    return { allowed: false, reason: "free-form text requires open service window" };
  }
  if (kind !== "text" && kind !== "template") return { allowed: false, reason: "unsupported message kind" };
  return { allowed: true, lane: kind === "text" ? "service" : hasOpenServiceWindow(lastInboundAt, now) ? "template-in-window" : "template-outside-window" };
}

export function outboundIdempotencyKey({ agreementId, templateName, recipient, eventVersion = 1 }) {
  if (![agreementId, templateName, recipient].every(Boolean)) throw new Error("idempotency fields required");
  return [agreementId, templateName, recipient, eventVersion].join(":");
}
