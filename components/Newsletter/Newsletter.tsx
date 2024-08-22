export function Newsletter() {
  return (
    <div className="flex justify-between md:flex-row flex-col gap-8 md:gap-0">
    <div className="flex flex-col items-start gap-2">
      <h5 className="text-xl font-bold">Join our newsletter</h5>
      <p className="text-sm sm:text-sm"> Keep up to date with related Nextify.</p>
    </div>
    <div className="mb-4 w-full max-w-sm">

      <form
        name="email-form"
        method="get"
        className="relative max-w-full"
      >
        <input
          type="email"
          className="mb-2.5 block h-9 w-full rounded-md border border-solid border-black bg-gray-100 px-3 py-6 align-middle text-sm placeholder:text-black text-black focus:border-blue-600"
          maxLength={256}
          name="email-5"
          placeholder="Enter your email"
          required={true}
        />

        <input
          type="submit"
          value="Submit"
          className="sm:absolute right-0 top-0 inline-block h-full cursor-pointer bg-gray-800 px-6 py-2.5 text-center font-semibold text-white relative w-full sm:w-auto sm:right-0 rounded-tr-md rounded-br-md"
        />

      </form>
    </div>
  </div>
  )
}
