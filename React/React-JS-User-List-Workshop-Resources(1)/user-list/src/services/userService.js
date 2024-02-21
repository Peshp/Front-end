const baseUrl = "http://localhost:3030/jsonstore/users";

export const GetAll = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    const result = Object.values(data);

    return result;
}

export const GetOne = async (userId) => {
    const response = await fetch(baseUrl + userId);
    const data = await response.json();

    console.log(data);

    return data;
}

export const Add = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    };

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    const responseData = await response.json();
    const result = Object.values(responseData);

    return result;
};
