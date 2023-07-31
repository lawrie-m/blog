<!doctype html>

<title>Laravel From Scratch Blog</title>
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.12.3/dist/cdn.min.js"></script>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>

<body style="font-family: Open Sans, sans-serif">
    <section class="px-6 py-8">
        <nav class="md:flex md:justify-between md:items-center">
            <div>
                <a href="/">
                    <img src="/images/moutain.png" alt="Laracasts Logo" width="120" height="16">
                </a>
            </div>

            <div class="mt-8 md:mt-0 flex items-center">
                @auth
                <x-dropdown>
                    <x-slot name="trigger">
                        <button id="nav" class="text-xs font-bold uppercase hover:text-green-500">Welcome, {{ auth()->user()->name }}!</button>
                    </x-slot>

                    @admin
                    <x-dropdown-item href="/" :active="request()->is('admin/posts')" :active="request()->is('/')">Homepage</x-dropdown-item>
                    <x-dropdown-item href="/admin/posts" :active="request()->is('admin/posts')" :active="request()->is('admin/posts')">Dashboard</x-dropdown-item>
                    <x-dropdown-item href="/admin/posts/create" :active="request()->is('admin/posts/create')">New Post</x-dropdown-item>
                    @endadmin
                    <x-dropdown-item href="#" x-data="{}" @click.prevent="document.querySelector('#logout-form').submit()">Log Out</x-dropdown-item>


                    <form id="logout-form" method="POST" action="/logout" class="hidden">
                        @csrf
                    </form>
                </x-dropdown>

                @else
                <a href="/register" class="text-xs font-bold uppercase hover:text-green-500 {{ request()->is('register') ? 'text-green-500' : '' }}">Register</a>
                <a href="/login" class="ml-6 text-xs font-bold uppercase hover:text-green-500 {{ request()->is('login') ? 'text-green-500' : '' }}">Log In</a>
                @endauth

                <a href="#newsletter" class="bg-green-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 hover:bg-green-600 duration-300">
                    Subscribe for Updates
                </a>
            </div>
        </nav>

        {{$slot}}

        <footer id="newsletter" class="bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 pt-10 px-10 mt-16">
            <img src="/images/moutain.png" alt="Laracasts Logo" width="120" height="16" class="mx-auto">
            <h5 class="text-3xl pt-4">Stay in touch with the latest posts</h5>
            <p class="text-sm mt-3">Promise to keep the inbox clean. No bugs.</p>

            <div class="mt-10">
                <div class="relative inline-block mx-auto lg:bg-gray-200 rounded-full">

                    <form method="POST" action="/newsletter" class="lg:flex text-sm">
                        @csrf
                        <div class="lg:py-3 lg:px-5 flex items-center">
                            <label for="email" class="hidden lg:inline-block">
                                <img src="/images/mailbox-icon.svg" alt="mailbox letter">
                            </label>

                            <div>
                                <input id="email" name="email" type="text" placeholder="Your email address" class="lg:bg-transparent py-2 lg:py-0 pl-4 focus-within:outline-none">

                                @error('email')
                                <span class="text-xs text-red-500">{{$message}}</span>
                                @enderror
                            </div>
                        </div>

                        <button type="submit" class="transition-colors duration-300 bg-green-500 hover:bg-green-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    </section>

    <x-flash />

</body>