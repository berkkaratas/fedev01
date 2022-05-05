<template>
  <div class="max-w-md mx-auto">
    <strong
      class="block text-xl font-medium text-center text-white sm:text-3xl"
    >
      Düzenli olarak gelişmelerden haberdar ol!
    </strong>

    <form class="mt-6">
      <div class="relative max-w-lg">
        <label class="sr-only" for="email"> Email </label>

        <input
          class="
            w-full
            p-4
            pr-16
            text-sm
            font-medium
            bg-white
            border-none
            rounded-full
          "
          id="email"
          type="email"
          placeholder="fedevclub@pm.me"
        />

        <button
          class="
            absolute
            top-1/2
            right-1.5
            -translate-y-1/2
            rounded-full
            bg-pink-500
            p-3
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-white
            transition
            hover:bg-pink-700
          "
          type="button"
        >
          Abone Ol
        </button>
      </div>
    </form>
  </div>
</template>