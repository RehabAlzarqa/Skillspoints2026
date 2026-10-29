import Link from "next/link";

export default function Brand() {
  return <Link href="/" className="brand" aria-label="SkillsPoints home"><span className="brand-mark" aria-hidden="true">s<span>✦</span></span>Skills<span className="brand-light">Points</span></Link>;
}
