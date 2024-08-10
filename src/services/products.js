

export const productService = {
    baseUrl: `${process.env.BASE_URL}`,
    async createProduct(body){
        const endpoint = `http://localhost:8080/api/auth/signin`;
        const options = {
            method:'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body:JSON.stringify(body)
        }
        try {
            const res = await fetch(endpoint,options);
            if(!res.ok){
                throw new Error('something went wrong');
            }else{
                const data = await res.json();
                return data;
            }
        } catch (error) {
            console.log(error)
       