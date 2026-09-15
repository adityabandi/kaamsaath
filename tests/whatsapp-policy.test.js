import test from "node:test";
import assert from "node:assert/strict";
import { hasOpenServiceWindow, maySend, outboundIdempotencyKey } from "../lib/whatsapp/policy.js";
import { postWhatsApp } from "../lib/whatsapp/client.js";
const now = new Date("2026-09-15T00:00:00Z");
test("service window is open before but not at 24 hours", () => {
  assert.equal(hasOpenServiceWindow("2026-09-14T00:00:01Z", now), true);
  assert.equal(hasOpenServiceWindow("2026-09-14T00:00:00Z", now), false);
});
test("revoked consent blocks both lanes", () => assert.equal(maySend({optIn:{status:"revoked"},kind:"template",now}).allowed,false));
test("free-form text needs an open window", () => assert.equal(maySend({optIn:{status:"active"},kind:"text",now}).allowed,false));
test("transaction key is deterministic and versioned", () => {
  const a=outboundIdempotencyKey({agreementId:"JO-1",templateName:"match",recipient:"+91000",eventVersion:2});
  assert.equal(a,"JO-1:match:+91000:2");
});
test("outbound client cannot call network while disabled", async () => {
  process.env.WHATSAPP_OUTBOUND_ENABLED="false"; let called=false;
  const result=await postWhatsApp({to:"test"},{fetchImpl:async()=>{called=true}});
  assert.equal(result.blocked,true); assert.equal(called,false);
});
