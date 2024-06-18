# Mock REST API Service

Technology Stack used: Vue3, REST API and Pinia.

## Code snippets

1. Define Pinia in `store/pinia.js` and init the `data: {}` object

```javascript
import {defineStore} from 'pinia'

export const piniaStore = defineStore('counter', {
    state: () => ({
        data: {}
    })
})
```

2. Fetch data from a REST API Endpoint and save it to Pinia store
```javascript
const fetchData = async () => {
    // fetch data from endpoint
    const response = await fetch('https://jsonplaceholder.org/posts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

// write in pinia store
    store.data = await response.json()
    json.value = await store.data
}
```

3. Method `fetchData()` callback after the component `App.vue` has been mounted
```javascript
onMounted(() => fetchData())
```

## Recommended Installation

```
git clone https://github.com/roma-marshall/vue3-api-pinia
cd json-api-pinia
npm run dev
```

## License

MIT License
