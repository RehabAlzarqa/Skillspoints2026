import { describe, it, expect } from "vitest";
import {
  validateSessionDescription,
  validateMaxParticipants,
  validateSessionDuration,
  validateSessionName,
} from "./validateSession ";

describe("validateSession helpers", () => {
  it("validates session description", () => {
    expect(validateSessionDescription("Short")).toBe(false);
    expect(validateSessionDescription("This is a sufficiently long description.")).toBe(true);
  });

  it("validates max participants", () => {
    expect(validateMaxParticipants(1)).toBe(false);
    expect(validateMaxParticipants(10)).toBe(true);
    expect(validateMaxParticipants(25)).toBe(false);
  });

  it("validates session duration", () => {
    expect(validateSessionDuration(10)).toBe(false);
    expect(validateSessionDuration(20)).toBe(true);
    expect(validateSessionDuration(40)).toBe(false);
  });

  it("validates session name", () => {
    expect(validateSessionName("")).toBe(false);
    expect(validateSessionName("Too short")).toBe(false);
    expect(validateSessionName("Valid Title")).toBe(true);
  });
});