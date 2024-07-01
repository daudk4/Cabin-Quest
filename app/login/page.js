import { SignInButton } from "@/app/_components/SignInButton";

export const metadata = {
  title: "Login",
};
export default async function Page() {
  const res = await fetch("http://localhost:3000/api/auth/providers");
  const data = await res.json();
  const providers = Object.keys(data);

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      {providers.map((provider) => (
        <SignInButton provider={provider} />
      ))}
    </div>
  );
}
