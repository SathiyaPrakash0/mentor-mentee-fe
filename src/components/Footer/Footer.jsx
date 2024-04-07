import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-slate-300 border-t border-blue-gray-50 py-6 text-center">
      <Typography color="blue-gray" className="font-semibold">
        &copy; 2024 Mentor Mentee
      </Typography>
    </footer>
  );
}