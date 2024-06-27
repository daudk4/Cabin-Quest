import { signInActionGoogle, signInActionGitHub } from "../_lib/actions";

export function SignInButtonGoogle() {
  return (
    <form action={signInActionGoogle}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export function SignInButtonGitHub() {
  return (
    <form action={signInActionGitHub}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/github.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with GitHub</span>
      </button>
    </form>
  );
}
