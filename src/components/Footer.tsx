import { type FooterProps } from "../libs/types"
export function Footer(prop:FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {prop.year} {prop.fullName} {prop.studentId}
    </footer>
  );
}
