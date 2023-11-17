import { PUBLIC_SEARCH_KEY, PUBLIC_SEARCH_URL } from '$env/static/public'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

export const searchClient = instantMeiliSearch(
  PUBLIC_SEARCH_URL, // Host
  PUBLIC_SEARCH_KEY // API key
)