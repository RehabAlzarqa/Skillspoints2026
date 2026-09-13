//export function functionName(parameter: Type): ReturnType {
// logic
//  return something;
//}

//export function functionName(parameter: Type): ReturnType {
  // logic
  //return something;
//}
//validation logic
//validateSessionDescription

//validateMaxParticipants

//validateSessionDuration

//validateSessionName

//isFutureDate

export function validateSessionDescription(description: string): boolean {
  if (!description) return false;
  if (description.length < 10) return false;
  return true; // discription should be at least 10 characters long
}

export function validateMaxParticipants(max: number): boolean {
  if (max < 2) return false;
  if (max > 20) return false;
  return true; // participants should be between 2 and 20
}

export function validateSessionDuration(duration: number): boolean {
  if (duration < 15) return false;
  if (duration > 30) return false;
  return true; // duration should be between 15 and 30 minutes
}

export function validateSessionName(name: string): boolean {
  if (!name.trim()) return false;
  if (name.length < 10) return false;
  if (name.length > 20) return false;
  return true; //name should be between 10 and 20 characters long
}
export function isFutureDate(date: Date): boolean {
  const now = new Date();
  return date > now;
}
