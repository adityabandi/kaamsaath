import test from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { validMetaSignature, verifyChallenge } from "../api/meta-webhook.js";

test("accepts correct webhook challenge", () => {
  assert.deepEqual(verifyChallenge({"hub.mode":"subscribe","hub.verify_token":"v","hub.challenge":"42"}, "v"), {status:200,body:"42"});
});
test("rejects wrong challenge token", () => {
  assert.equal(verifyChallenge({"hub.mode":"subscribe","hub.verify_token":"x"}, "v").status, 403);
});
test("validates Meta sha256 signature without exposing secret", () => {
  const body=Buffer.from('{"object":"whatsapp_business_account"}');
  const secret="test-only-secret";
  const sig="sha256="+createHmac("sha256",secret).update(body).digest("hex");
  assert.equal(validMetaSignature(body,sig,secret),true);
  assert.equal(validMetaSignature(body,sig,"wrong"),false);
});
