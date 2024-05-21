
class GetApi {
    async getApis() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default GetApi;