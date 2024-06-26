import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Guest Area",
};

const Page = async () => {
  const session = await auth();
  const fName = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {fName}
    </h2>
  );
};

export default Page;
