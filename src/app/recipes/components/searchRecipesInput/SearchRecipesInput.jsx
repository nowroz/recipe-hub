"use client"

import { useRouter, useSearchParams } from "next/navigation"


const SearchRecipesInput = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSearchRecipes = (event) => {
    event.preventDefault()

    const form = event.target

    const searchText = form.searchText.value.trim()

    const newSearchParams = new URLSearchParams(searchParams.toString())

    newSearchParams.set("search", searchText)

    router.push(`?${newSearchParams.toString()}`)
  }

  return (
    <form onSubmit={handleSearchRecipes} className="flex items-center justify-center gap-3">
      <input type="search" name="searchText" id="searchText" placeholder="Search recipes..." className="min-w-75 px-3 py-1 border rounded-md" />
      <button className="px-3 py-1 bg-amber-200 text-black font-bold rounded-md cursor-pointer">Search</button>
    </form>
  )
}

export default SearchRecipesInput
