let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress);

let deep = structuredClone(passportWithAddress);
deep.address.city = ('Bobryisk');
console.log(deep);